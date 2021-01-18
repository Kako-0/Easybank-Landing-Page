import React from 'react';
import ArticleCard from './ArticleCard';
import './style.css';

import money from '../../images/image-currency.jpg';
import restaurant from '../../images/image-restaurant.jpg';
import plane from '../../images/image-plane.jpg';
import confetti from '../../images/image-confetti.jpg';

const Articles = () => {
    return (
        <div className="articles-container">
            <h1>Lastest Articles</h1>
            <div className="articles-list"> 
                <ArticleCard 
                    img={money}
                    author="By Claire Robinson"
                    title="Receive money in any currency with no fees"
                    text="The world is getting smaller and we’re becoming more mobile. So why should you be forced to only receive money in a single …"
                />
                <ArticleCard
                    img={restaurant}
                    author="By Wilson Hutton"
                    title="Receive money in any currency with no fees"
                    text="The world is getting smaller and we’re becoming more mobile. So why should you be forced to only receive money in a single …"
                />
                <ArticleCard
                    img={plane}
                    author="By Wilson Hutton"
                    title="Treat yourself without worrying about money"
                    text="Our simple budgeting feature allows you to separate out your spending and set 
                    realistic limits each month. That means you …"
                />
                <ArticleCard
                    img={confetti}
                    author="By Claire Robinson"
                    title="Our invite-only Beta accounts are now live!"
                    text="After a lot of hard work by the whole team, we’re excited to launch our closed beta. It’s easy to request an invite through the site ..."
                />
            </div>
        </div>
    );
}

export default Articles;
