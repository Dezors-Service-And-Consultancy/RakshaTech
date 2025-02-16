import React, { useState } from 'react';
import icon1 from '/assets/icon-user.png';
import icon2 from '/assets/icon-drone.png';
import icon3 from '/assets/icon-car.png';
import icon4 from '/assets/icon-cart.png';
import icon5 from '/assets/icon-robot.png';
import icon6 from '/assets/icon-edu.png';
import icon7 from '/assets/icon-med.png';
import icon8 from '/assets/icon-coin.png';

const NewThemeGrid = () => {
  const themes = [
    { icon: icon1, label: 'Consumer Tech', about: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Deleniti, nisi.' },
    { icon: icon2, label: 'Consumer Tech', about: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Deleniti, nisi.' },
    { icon: icon3, label: 'Consumer Tech', about: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Deleniti, nisi.' },
    { icon: icon4, label: 'Consumer Tech', about: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Deleniti, nisi.' },
    { icon: icon5, label: 'Consumer Tech', about: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Deleniti, nisi.' },
    { icon: icon6, label: 'Consumer Tech', about: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Deleniti, nisi.' },
    { icon: icon7, label: 'Consumer Tech', about: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Deleniti, nisi.' },
    { icon: icon8, label: 'Consumer Tech', about: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Deleniti, nisi.' },
  ];

  const [flippedIndex, setFlippedIndex] = useState<number | null>(null);

  const handleFlip = (index) => {
    setFlippedIndex(flippedIndex === index ? null : index);
  };

  return (
    <div className="w-full mx-[4vw] max-md:mr-11 grid lg:grid-cols-4 md:grid-cols-3 grid-cols-2 gap-4  transition-all duration-500 ease-in-out">
      {themes.map((theme, index) => (
        <div key={index} className={`cursor-pointer relative p-4 mx-auto my-4 ${flippedIndex === index ? 'z-10' : 'z-0'}`} onClick={() => handleFlip(index)}>
          <div className={`h-[150px] w-[150px] md:w-[160px] md:h-[160px] lg:w-[200px] lg:h-[200px] rounded-[5px] opacity-40 filter relative bg-gradient-to-b from-[#02DDA0] to-[#013326] z-0 transition-transform duration-300 ${flippedIndex === index ? 'transform rotate-y-180' : ''}`} />
          <div className={`absolute inset-0 flex flex-col items-center justify-center z-10 transition-all duration-500 ${flippedIndex === index ? 'opacity-0' : 'opacity-100'}`}>
            <img src={theme.icon} alt={theme.label} className="w-[2rem] h-[2rem]" />
            <div className="mt-2text-center text-white font-bold">{theme.label}</div>
          </div>
          <div className={`m-auto p-auto  h-[150px] w-[150px] md:w-[160px] md:h-[160px] lg:w-[200px] lg:h-[200px] object-contain absolute inset-0 flex flex-col items-center justify-center z-10 ${flippedIndex === index ? 'opacity-100' : 'opacity-0'}`}>
            <div className="px-4 text-center text-sm text-white">{theme.about}</div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default NewThemeGrid;
