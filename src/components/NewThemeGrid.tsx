import React, { useState } from 'react';
import GradientRectangle from './comp/GradientRectangle';
import icon1 from '../assets/icons8-users-100 (1).png';
import icon2 from '../assets/icons8-drone-100 (1).png';
import icon3 from '../assets/icons8-automobile-100.png';
import icon4 from '../assets/icons8-cart-100.png';
import icon5 from '../assets/icons8-robot-100.png';
import icon6 from '../assets/icons8-education-100 (1).png';
import icon7 from '../assets/icons8-medical-100 (1).png';
import icon8 from '../assets/icons8-coins-100.png';

interface Theme {
  icon: string;
  label: string;
  about: string;
}

const NewThemeGrid: React.FC = () => {
  const themes: Theme[] = [
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

  const handleFlip = (index: number) => {
    setFlippedIndex(flippedIndex === index ? null : index);
  };

  return (
    <div className="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 gap-4 transition-all duration-500 ease-in-out">
      {themes.map((theme, index) => (
        <div key={index} className={`cursor-pointer relative p-4 mx-auto my-4 ${flippedIndex === index ? 'z-10' : 'z-0'}`} onClick={() => handleFlip(index)}>
          <div className={`w-[239.5px] h-[262px] rounded-[5px] opacity-40 filter relative bg-gradient-to-b from-[#02DDA0] to-[#013326] z-0 transition-transform duration-300 ${flippedIndex === index ? 'transform rotate-y-180' : ''}`} />
          <div className={`absolute inset-0 flex flex-col items-center justify-center z-10 transition-all duration-500 ${flippedIndex === index ? 'opacity-0' : 'opacity-100'}`}>
            <img src={theme.icon} alt={theme.label} className="w-16 h-16" />
            <div className="mt-2 text-center text-white font-bold">{theme.label}</div>
          </div>
          <div className={`m-auto p-auto h-[200px] w-[200px] absolute inset-0 flex flex-col items-center justify-center z-10 ${flippedIndex === index ? 'opacity-100' : 'opacity-0'}`}>
            <div className="text-white">{theme.about}</div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default NewThemeGrid;
