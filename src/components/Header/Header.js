import React, {useState, useRef, useEffect } from 'react';
import {Link} from 'react-router-dom';
import './Header.scss';

const Header = () => {

    const [menuOpen, setMenuOpen] = useState(false);

    const dropdownMenu = useRef();

    const handleMenuShow = () => {
        setMenuOpen(!menuOpen);
    }
   
    useEffect(() => {
        const handleClickOutside = (event) => {
          if (dropdownMenu.current && !dropdownMenu.current.contains(event.target)) {
            setMenuOpen(false);
          }
        };
        document.addEventListener('click', handleClickOutside, true);
        return () => {
          document.removeEventListener('click', handleClickOutside, true);
        };
      }, []);
    

    return (
        <header className="fixed-top">
        <div className="logo">
            <img src={require('../../assets/logo.png')} alt="Terrapay" />
        </div>
        <ul className="right-nav">
            <li><img src={require('../../assets/search.svg').default} alt="search" /></li>
            <li className="notification"><img src={require('../../assets/notification.svg').default} alt="Notification" /><span className="badge">3</span></li>
            <li><img src={require('../../assets/question.svg').default} alt="Question" width="24" /></li>
            <li className="navlink" ref={dropdownMenu}>
                <div className="dropdown">
                <button className="nav-profile dropdown-toggle" onClick={handleMenuShow}>
                    <img src={require('../../assets/profile-pic.png')} alt="Profile" /> Hi, Approver 
                </button>
                {menuOpen &&
                <div className="profile">
                  <Link className="dropdown-item" to="/">My profile</Link>
                  <Link className="dropdown-item" to="/">Account setting</Link>
                  <Link className="dropdown-item" to="/">Logout</Link>
                </div>}
              </div>
            </li>
        </ul>
    </header>
    );
};

export default Header;