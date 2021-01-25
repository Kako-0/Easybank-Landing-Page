import React, { useEffect,useState} from 'react';
import './style.css';
import '../../styles/btn.css';
import hamburguer from '../../images/icon-hamburger.svg';
import close from '../../images/icon-close.svg';
import { ReactComponent as Logo } from '../../images/logo.svg';

const List = () => {
    return(
    <ul className="content-header">
        <li>Home</li>
        <li>About</li>
        <li>Contact</li>
        <li>Blog</li>
        <li>Careers</li>
    </ul>
)}

const DesktopNav = () => {
    return(
    <>
        <List />
        <button className="btn-main btn-header"> Request Invite</button>
    </>
)}

const MobileList = () => {
    return(
        <div className="mobile-list-container">
            <div className="mobile-list-content"> <List /> </div>
        </div>
    )
}

const MobileNav= () => {
    const [isActive, setisActive] = useState(false);
    return(
    <>
        <img className="options-header" src={isActive ? close : hamburguer} alt="navegation" 
            onClick={()=>{
                setisActive(!isActive);
            }}
        />
        {isActive && <MobileList />}
    </>
)}

const Header = () => {
    const [isMobile, setisMobile] = useState(window.matchMedia('(max-width:420px)').matches);
    useEffect(()=>{
        window.addEventListener("resize", ()=>{
            setisMobile(window.matchMedia('(max-width:420px)').matches)
        })
    })
    return (
        <nav className="container-header">
            <a href="./" className="logo"> <Logo /></a>
            
            {isMobile ? <MobileNav /> : <DesktopNav />}
        </nav>
    );
}

export default Header;
