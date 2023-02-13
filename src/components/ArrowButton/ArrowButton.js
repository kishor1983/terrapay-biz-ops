import React from 'react';
import {Link} from 'react-router-dom';
import './ArrowButton.scss';

const ArrowButton = ({text, path}) => {
    return (
        <>
            {text && <div className="arrow-wrap">
                <Link to={path} title={text}>
                    {text}
                    <img className="icon" src={require('../../assets/left-arrow.svg').default} alt="" />
                </Link>
            </div>}
        </>
    );
};

export default ArrowButton;