import React, { useState } from 'react';
import './Sidebar.scss';

const Sidebar = () => {

    const [expandMenu, setExpandMenu] = useState(false);
    const [menuText, setMenuText] = useState(false);

    const handleMenuExpand = () => {
        setExpandMenu(true);

        setTimeout(() => {
            setMenuText(true);
        }, 150);
    }

    const handleMenuCollapse = () => {
        setExpandMenu(false);
        setMenuText(false);
    }

    return (
        <aside className={`sidebar ${expandMenu ? 'open-sidebar' : ''}`} onMouseEnter={handleMenuExpand} onMouseLeave={handleMenuCollapse} >
            <ul>
                <li><a href="#" className='active'><img src={require('../../assets/dashboard.svg').default} alt="Dashboard" /> <span className={`${menuText ? 'show' : ''}`}>Dashboard</span></a></li>
                <li><a href="#"><img src={require('../../assets/worldwide.svg').default} alt="Worldwide" /> <span className={`${menuText ? 'show' : ''}`}>TrackPay</span></a></li>
                <li><a href="#"><img src={require('../../assets/people.svg').default} alt="Accounts" /> <span className={`${menuText ? 'show' : ''}`}>Accounts</span></a></li>
                <li><a href="#"><img src={require('../../assets/transaction.svg').default} alt="Transaction" /> <span className={`${menuText ? 'show' : ''}`}>Transaction Lookup</span></a></li>
                <li><a href="#"><img src={require('../../assets/reports.svg').default} alt="Reports" /> <span className={`${menuText ? 'show' : ''}`}>Reports</span></a></li>
                <li><a href="#"><img src={require('../../assets/work.svg').default} alt="Work" /> <span className={`${menuText ? 'show' : ''}`}>Works</span></a></li>
                <li><a href="#"><img src={require('../../assets/setting.svg').default} alt="Setting" /> <span className={`${menuText ? 'show' : ''}`}>Settings</span></a></li>
            </ul>
        </aside>
    );
};

export default Sidebar;