import React from "react";
export default function AboutUs() {
  return (
    <div className="flex justify-around items-center">
      <img src="path_to_image.jpg" alt="Image" className="w-1/2" />
      <div className="w-1/2">
        <h2>Your Text Goes Here</h2>
        <p>This is the text that goes next to the image.</p>
      </div>
    </div>
  );
}
