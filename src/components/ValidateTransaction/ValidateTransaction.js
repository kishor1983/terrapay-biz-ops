import React from 'react';

const ValidateTransaction = () => {
    return (
        <div className='tab-space'>
            <div className="row">
                <div className="col-sm-8">
                    <input type="text" className='form-control' placeholder='Validate Transaction ID' />
                </div>
                <div className="col-sm-4">
                    <button className='btn'>Track</button>
                </div>
            </div>
        </div>
    );
};

export default ValidateTransaction;