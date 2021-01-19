import React from 'react';
import './style.css';
import '../../styles/btn.css'

import logo from '../../images/logo-white.svg';
import { ReactComponent as YoutubeIcon } from "../../images/icon-youtube.svg";
import { ReactComponent as FacebookIcon } from "../../images/icon-facebook.svg";
import { ReactComponent as TwitterICon } from "../../images/icon-twitter.svg";
import { ReactComponent as PinterestIcon } from "../../images/icon-pinterest.svg";
import { ReactComponent as InstagramIcon } from "../../images/icon-instagram.svg";

const Footer = () => {
    return (
        <footer className="footer-container">
            <div className="footer-icons">
                <img src={logo} alt="logo" />
                <ul className="footer-icon-social">
                    <li><FacebookIcon /></li>
                    <li><YoutubeIcon /></li>
                    <li><TwitterICon /></li>
                    <li><PinterestIcon /></li>
                    <li><InstagramIcon /></li>
                </ul>
            </div>
            <ul className="footer-list">
                <li>About Us</li>
                <li>Carrers</li>
                <li>Contact</li>
                <li>Support</li>
                <li>Blog</li>
                <li>Privacy Policy</li>
            </ul>
            <div className="btn-copyright">
                <button className="btn-main btn-footer">Request Invite</button>
                <p>© Easybank. All Rights Reserved</p>
            </div>
        </footer>
    );
}

export default Footer;
