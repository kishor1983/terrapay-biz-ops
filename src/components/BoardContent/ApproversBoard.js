import React from 'react';
import { CompletedRequest } from '../CompletedRequest';
import {boardData2} from '../../data/boardData';

const ApproversBoard = () => {
    return (
        <CompletedRequest
            data={boardData2}
            imageComponent={<img src={require('../../assets/completed-request.png')} alt="" />}
            title="Team Board"
            subtitle="Approver’s Board"
            horizontal
        />
    );
};

export default ApproversBoard;