import React from 'react';
import { CompletedRequest } from '../CompletedRequest';
import {boardData1} from '../../data/boardData';

const TransactionBoard = () => {
    return (
        <CompletedRequest
            data={boardData1}
            imageComponent={<img src={require('../../assets/completed-request.png')} alt="" />}
            title="Shobhna’s Board"
            subtitle="This board will show status till your cut off time (3:00 PM, GMT)"
        />
    );
};

export default TransactionBoard;