import React from 'react';
import './style.css';
import WhyChooseCard from './WhyChooseCard';

import online from "../../images/icon-online.svg";
import budgeting from "../../images/icon-budgeting.svg";
import onboarding from "../../images/icon-onboarding.svg";
import api from "../../images/icon-api.svg";

const WhyChoose = () => {
    return (
        <div className="wce-container">
            <h1>Why choose Easybank?</h1>
            <p>We leverage Open Banking to turn your bank account into your financial hub. <br/>
                Control your finances like never before.</p>
            <div className="wce-list">
                <WhyChooseCard
                    img={online} 
                    title="Online Banking"
                    text="Our modern web and mobile applications allow you to keep track of your finances wherever you are in the world."
                />
                <WhyChooseCard
                    img={budgeting}
                    title="Simple Budgeting"
                    text="See exactly where your money goes each month. Receive notifications when you’re close to hitting your limits."
                />
                <WhyChooseCard
                    img={onboarding}
                    title="Fast Onboarding"
                    text="We don’t do branches. Open your account in minutes online and start taking control of your finances right away."
                />
                <WhyChooseCard
                    img={api}
                    title="Open API"
                    text="Manage your savings, investments, pension, and much more from one account. Tracking your money has never been easier."
                />
            </div>
        </div>
    );
}

export default WhyChoose;
