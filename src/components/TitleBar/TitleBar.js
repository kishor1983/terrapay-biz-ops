import React from 'react';
import './TitleBar.scss';

const TitleBar = ({title, description}) => {
    return (
        <div className="hdtitle">
            <h1>{title}</h1>
            <div className="details">{description}</div>
        </div>
    );
};

export default TitleBar;