import { createRoot } from "react-dom/client";
import { Canvas } from "@react-three/fiber";
import { useFrame } from "@react-three/fiber";
import { useRef, useMemo } from "react";
import * as THREE from "three";
import { useEffect } from "react";

function WireSphere({ radius, opacity, depth }) {
  const outerSphereRef = useRef();
  const lineRefs = useRef([]);

  // Update sphere positions to scale with radius
  const spherePositions = useMemo(
    () => [
      [0, -radius * 0.5, 0], // bottom
      [0, 0, 0], // middle
      [0, radius * 0.5, 0], // top
    ],
    [radius]  // Add radius as dependency
  );

  // Update threshold to scale with radius
  const findNearbyVertices = (geometry, sphereY, threshold = radius * 0.15) => {
    const positions = geometry.attributes.position.array;
    const nearbyVertices = [];

    for (let i = 0; i < positions.length; i += 3) {
      const vertexY = positions[i + 1];
      if (Math.abs(vertexY - sphereY) < threshold) {
        nearbyVertices.push(
          new THREE.Vector3(positions[i], positions[i + 1], positions[i + 2])
        );
      }
    }
    return nearbyVertices;
  };

  useEffect(() => {
    const geometry = outerSphereRef.current.geometry;
    const lines = [];
    const vertexSpheres = [];

    spherePositions.forEach((spherePos) => {
      const nearbyVertices = findNearbyVertices(geometry, spherePos[1]);
      const sphereVector = new THREE.Vector3(...spherePos);

      nearbyVertices.forEach((vertex) => {
        // Create line
        const points = [sphereVector, vertex];
        const lineGeometry = new THREE.BufferGeometry().setFromPoints(points);
        const line = new THREE.Line(
          lineGeometry,
          new THREE.LineBasicMaterial({ color: "#00FFFF", opacity: opacity })
        );
        lines.push(line);

        // Update vertex sphere size to scale with radius
        const vertexSphere = new THREE.Mesh(
          new THREE.SphereGeometry(radius * 0.01, 8, 8),
          new THREE.MeshBasicMaterial({ color: "#00FFFF" })
        );
        vertexSphere.position.copy(vertex);
        vertexSpheres.push(vertexSphere);
      });
    });

    lineRefs.current = lines;
    lines.forEach((line) => outerSphereRef.current.add(line));
    vertexSpheres.forEach((sphere) => outerSphereRef.current.add(sphere));

    return () => {
      lines.forEach((line) => outerSphereRef.current.remove(line));
      vertexSpheres.forEach((sphere) => outerSphereRef.current.remove(sphere));
    };
  }, [spherePositions, radius]); // Add radius as dependency

  useFrame(() => {
    outerSphereRef.current.rotation.y += 0.003;
    outerSphereRef.current.rotation.x = -0.2; // Add fixed tilt on X axis
  });

  return (
    <group className="w-full h-screen">
      <mesh ref={outerSphereRef}>
        <icosahedronGeometry args={[radius, depth]} />
        <meshBasicMaterial wireframe color="#00FFFF" />
      </mesh>

      {/* Update small spheres size */}
      {spherePositions.map((position, index) => (
        <mesh key={index} position={position}>
          <sphereGeometry args={[radius * 0.025, 16, 16]} />
          <meshBasicMaterial color="#00FFFF" />
        </mesh>
      ))}
    </group>
  );
}

export default function SphereBackground({ radius, opacity, depth }) {
  return (
    <div id="canvas-container" className="w-full h-screen opacity-40">
      <Canvas>
        <WireSphere radius={radius} opacity={opacity} depth={depth}/>
      </Canvas>
    </div>
  );
}
