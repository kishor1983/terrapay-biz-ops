import React from 'react';
import {Link} from 'react-router-dom';

const ViewAll = ({text, path}) => {
    return (
        <div className="padtb24 bdrtp text-center">
            <Link to={path}><button className="btn normal f14" >{text}</button></Link>
        </div>
    );
};

export default ViewAll;