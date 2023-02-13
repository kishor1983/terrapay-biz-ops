import React from 'react';
import {If, Then } from 'react-if';
import './Card.scss';

const Card = ({iconType, title, children}) => {
    return (
        <div className='card-wrap'>
            <div className={`head ${(iconType === 'warning' && 'warning') || (iconType === 'success' && 'success') || (iconType === 'calendar' && 'calendar')}`}>
                <If condition={iconType === 'warning'}>
                    <Then>
                        <img src={require('../../assets/warning.svg').default} alt="warning" />
                    </Then>
                </If>
                <If condition={iconType === 'success'}>
                    <Then>
                        <img src={require('../../assets/circle_check.svg').default} alt="Success" />
                    </Then>
                </If>
                <If condition={iconType === 'calendar'}>
                    <Then>
                        <img src={require('../../assets/calendar.svg').default} alt="Success" />
                    </Then>
                </If>
                 {title}
                <img src={require('../../assets/three-dots-vertical.svg').default} alt="menu" className='menu' />
            </div>
            {children && <div className='content'>{children}</div>}
        </div>
    );
};

export default Card;