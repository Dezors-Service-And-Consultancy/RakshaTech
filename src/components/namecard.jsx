import React from "react";

const cardsData = [
  {
    image: "/face.png",
    name: "Olivia Cole",
    description:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit.Lorem ipsum dolor sit, amet consectetur adipisicing elit. ",
  },
  {
    image: "/face.png",
    name: "John Doe",
    description:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit.Lorem ipsum dolor sit, amet consectetur adipisicing elit.",
  },
  {
    image: "/face.png",
    name: "Jane Smith",
    description:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit.Lorem ipsum dolor sit, amet consectetur adipisicing elit.",
  },
  {
    image: "/face.png",
    name: "Alice Johnson",
    description:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit.Lorem ipsum dolor sit, amet consectetur adipisicing elit. ",
  },
];

const NameCard = () => {
  return (
    <div className="flex flex-col items-center px-4 md:px-16 lg:px-32 h-auto justify-center">
      <h1 className="font-quantico text-5xl mb-8 text-white">Our Team</h1>
      <div className="grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-10  ">
        {cardsData.map((card, index) => (
          <div
            key={index}
            className="max-w-[200px] mx-auto flex flex-col justify-center items-center rounded-3xl shadow-md p-4 bg-gradient-to-t to-[#031310] from-[#005A41]   hover:shadow-lg  transition-shadow duration-300"
          >
            <img
              src={card.image}
              alt={card.name}
              className="h-[10vh] object-cover rounded-t-md"
            />
            <h2 className="text-base text-white overflow-hidden font-quantico my-[2rem] ">
              {card.name}
            </h2>
            <p className="text-white text-center overflow-hidden mt-2 text-xs font-text">
              {card.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default NameCard;
