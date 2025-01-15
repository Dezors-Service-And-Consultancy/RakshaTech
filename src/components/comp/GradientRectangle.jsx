import React from 'react';

const GradientRectangle = () => {
  const rectangleStyle = {
    width: '239.5px',
    height: '262px',
    borderRadius: '5px',
    background: 'linear-gradient(to bottom, #02DDA0, #013326)',
    opacity: 0.4,
    filter: 'blur(4px)',
    position: 'relative',
  };

  return <div style={rectangleStyle}></div>;
};


export default GradientRectangle;
