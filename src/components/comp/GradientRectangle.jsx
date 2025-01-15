import React from 'react';

const GradientRectangle = () => {
  const rectangleStyle = {
    width: '256.3px',
    height: '360px',
    borderRadius: '20px',
    background: 'linear-gradient(to bottom, #031310 0%, #005A41 100%)',
    position: 'absolute',
    bottom: '0',
    left: '50%', // Center horizontally
    transform: 'translateX(-50%)', // Adjust for centering
  };

  return <div style={rectangleStyle}></div>;
};

export default GradientRectangle;