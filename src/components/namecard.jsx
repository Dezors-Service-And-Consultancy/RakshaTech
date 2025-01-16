import React from 'react';
import './NameCard.css';

const cardsData = [
    {
        image: 'images.jpg',
        name: 'Olivia Cole',
        description: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nemo voluptatibus atque quae. A repellendus aliquid itaque iusto hic ea nobis, molestiae soluta commodi ullam ut.'
    },
    {
        image: 'images.jpg',
        name: 'John Doe',
        description: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nemo voluptatibus atque quae. A repellendus aliquid itaque iusto hic ea nobis, molestiae soluta commodi ullam ut.'
    },
    {
        image: 'images.jpg',
        name: 'Jane Smith',
        description: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nemo voluptatibus atque quae. A repellendus aliquid itaque iusto hic ea nobis, molestiae soluta commodi ullam ut.'
    },
    {
        image: 'images.jpg',
        name: 'Alice Johnson',
        description: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nemo voluptatibus atque quae. A repellendus aliquid itaque iusto hic ea nobis, molestiae soluta commodi ullam ut.'
    }
];

const NameCard = () => {
    return (
        <div className="flex">
            {cardsData.map((card, index) => (
                <div className="card" key={index}>
                    <img src={card.image} alt="Profile Picture" />
                    <h3>{card.name}</h3>
                    <p>{card.description}</p>
                </div>
            ))}
        </div>
    );
};

export default NameCard;
