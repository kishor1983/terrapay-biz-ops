import React from 'react';
import PropTypes from 'prop-types';
import { If, Then, Else } from 'react-if';
import './CompletedRequest.scss';
import { Dropdown } from '../../components/Dropdown';

const dataweekly = [
    {id: 0, label: 'Today', value: 'Today'},
    {id: 1, label: 'Yesterday', value: 'Yesterday'},
    {id: 2, label: 'Two days ago', value: 'Two days ago'},
]

const CompletedRequest = ({imageComponent, title, subtitle, horizontal, data}) => {
    return (
        <div className='completed-request'>
            {imageComponent}
            <div className='dropdown-cont'>
                <Dropdown data={dataweekly} id="test" onChange={(value) => console.log(value)} />
            </div>
            <div className='details'>
                <If condition={horizontal}>
                    <Then>
                        <div className="textcont">
                            <h3>{title}</h3>
                            <span>{subtitle}</span>
                        </div>
                    </Then>
                    <Else>
                        <h3>{title}</h3>
                        <div className='desc'>{subtitle}</div>
                    </Else>
                </If>
                
                <div className="board-summary">
                    {data.map((res, index) => {
                        return(
                            <div key={index}>
                                <div className='number'>{res.count}</div>
                                <span>{res.label}</span>
                            </div>
                        );
                    })}
                </div>
                <img className="icon" src={require('../../assets/left-arrow.svg').default} alt="" />
            </div>
        </div>
    );
};

CompletedRequest.propTypes = {
    imageComponent: PropTypes.node,
}

CompletedRequest.defaultProps = {
    imageComponent: undefined, 
}

export default CompletedRequest;