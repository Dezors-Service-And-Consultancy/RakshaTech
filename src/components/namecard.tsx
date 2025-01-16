import React from 'react';
import './comp/NameCard.css';

interface CardProps {
    image: string;
    name: string;
    description: string;
}

const Card: React.FC<CardProps> = ({ image, name, description }) => (
    <div className="card">
        <img src={image} alt="Profile Picture" />
        <h3>{name}</h3>
        <p>{description}</p>
    </div>
);

interface CardData {
    image: string;
    name: string;
    description: string;
}

const NameCard: React.FC = () => {
    const cardsData: CardData[] = [
        { image: 'images.jpg', name: 'Olivia Cole', description: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nemo voluptatibus atque quae. A repellendus aliquid itaque iusto hic ea nobis, molestiae soluta commodi ullam ut.' },
        { image: 'images.jpg', name: 'Olivia Cole', description: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nemo voluptatibus atque quae. A repellendus aliquid itaque iusto hic ea nobis, molestiae soluta commodi ullam ut.' },
        { image: 'images.jpg', name: 'Olivia Cole', description: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nemo voluptatibus atque quae. A repellendus aliquid itaque iusto hic ea nobis, molestiae soluta commodi ullam ut.' },
        { image: 'images.jpg', name: 'Olivia Cole', description: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nemo voluptatibus atque quae. A repellendus aliquid itaque iusto hic ea nobis, molestiae soluta commodi ullam ut.' },
    ];

    return (
        <div className="flex">
            {cardsData.map((card, index) => (
                <Card key={index} {...card} />
            ))}
        </div>
    );
};

export default NameCard;
