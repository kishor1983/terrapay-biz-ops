import React, {useState} from 'react';

const TrackTransaction = () => {

    const [trackid, setTrackId] = useState('');

    const handleChange = (e) => {
        setTrackId(e.target.value);
        console.log(e.target.value);
    }

    const handleTrackId = () => {
        if(trackid === '') return false;
        alert(trackid);
    }

    return (
        <div className='tab-space'>
            <div className="row">
                <div className="col-sm-8">
                    <input type="text" value={trackid} className='form-control' placeholder='Enter Transaction ID' onChange={handleChange} />
                </div>
                <div className="col-sm-4">
                    <button className='btn' onClick={handleTrackId}>Track</button>
                </div>
            </div>
        </div>
    );
};

export default TrackTransaction;