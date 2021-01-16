import React from 'react';
import './style.css';
import '../../styles/btn.css'


import Background from "../../images/bg-intro-desktop.svg";
import Mockups from '../../images/image-mockups.png';

const Home = () => {
    return (
        <div className="container-home">
            <div className="text-home">
                <h1> 
                    Next generation <br/> 
                    digital banking
                </h1>
                <p>
                    Take your financial life online. Your Easybank account <br/> 
                    will be a one-stop-shop for spending, saving, <br/> 
                    budgeting, investing, and much more.
                </p>
                <button className="btn-main">Request Invite</button>
            </div>
            <div className="photos-home">
                <img className="background-home" src={Background} alt="background"/>
                <div className="mockup-home"> <img  src={Mockups} alt="mockups" /></div>
                
            </div>
        </div>
    );
}

export default Home;
