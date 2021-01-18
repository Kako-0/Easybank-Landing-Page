import React from 'react';
import './style.css';

const WhyChooseCard = ({img, title, text}) => {
    return (
        <div className="wcec-container">
            <img src={img} alt="icon-online" />
            <h1>{title}</h1>
            <p>{text}</p>
        </div>
    );
}

export default WhyChooseCard;
