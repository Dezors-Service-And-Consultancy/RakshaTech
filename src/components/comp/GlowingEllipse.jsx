import React from 'react';

const GlowingEllipse = () => {
  const ellipseStyle = {
    width: '300px', // Adjust width for glow effect
    height: '200px', // Adjust height for glow effect
    borderRadius: '50%', // Makes it an ellipse
    backgroundColor: '#01C38D',
    filter: 'blur(500px)', // Apply blur effect
    position: 'absolute',
    left: '50%', // Center horizontally
    top: '50%', // Center vertically
    transform: 'translate(-50%, -50%)', // Adjust for centering
  };

  return <div style={ellipseStyle}></div>;
};

export default GlowingEllipse;
