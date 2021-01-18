import React from 'react';
import './style.css';

const ArticleCard = ({img, author, title, text}) => {
    return (
        <div className="ac-container">
            <img src={img} alt="imageArticle" />
            <div className="ac-information">
                <h6>{author}</h6>
                <h4>{title}</h4>
                <p>{text}</p>
            </div>
        </div>
    );
}

export default ArticleCard;