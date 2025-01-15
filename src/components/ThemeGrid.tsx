import React from 'react';
import GradientRectangle from './comp/GradientRectangle';
import icon1 from '../../public/assets/icons8-users-100 (1).png';
import icon2 from '../../public/assets/icons8-drone-100 (1).png';
import icon3 from '../../public/assets/icons8-automobile-100.png';
import icon4 from '../../public/assets/icons8-cart-100.png';
import icon5 from '../../public/assets/icons8-robot-100.png';
import icon6 from '../../public/assets/icons8-education-100 (1).png';
import icon7 from '../../public/assets/icons8-medical-100 (1).png';
import icon8 from '../../public/assets/icons8-coins-100.png';

interface Theme {
  icon: string;
  label: string;
}

const ThemeGrid: React.FC = () => {
  const themes: Theme[] = [
    { icon: icon1, label: 'Consumer Tech' },
    { icon: icon2, label: 'Consumer Tech' },
    { icon: icon3, label: 'Consumer Tech' },
    { icon: icon4, label: 'Consumer Tech' },
    { icon: icon5, label: 'Consumer Tech' },
    { icon: icon6, label: 'Consumer Tech' },
    { icon: icon7, label: 'Consumer Tech' },
    { icon: icon8, label: 'Consumer Tech' },
  ];

  return (
    <div className="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 gap-4 transition-all duration-300 ease-in-out">
      {themes.map((theme, index) => (
        <div key={index} className="relative p-4 mx-auto my-4">
          <div className="w-[239.5px] h-[262px] rounded-[5px] opacity-40 filter blur-[4px] relative bg-gradient-to-b from-[#02DDA0] to-[#013326] z-0" />
          <div className="absolute inset-0 flex flex-col items-center justify-center z-10">
            <img src={theme.icon} alt={theme.label} className="w-16 h-16" />
            <div className="mt-2 text-center text-white font-bold">{theme.label}</div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ThemeGrid;
