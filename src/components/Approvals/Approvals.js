import React, {useEffect, useState} from 'react';
import DataTable from 'react-data-table-component';
import {If, Then, Else} from 'react-if';
import {approvalsDataColumn } from '../../data/approvalsData';
import { Dropdown } from '../../components/Dropdown';
import { ViewAll } from '../../components/ViewAll';
import axios from 'axios';

const dataReceivePartner = [
    { id: 0, label: "Western Union", value: "Western Union" },
    { id: 1, label: "AUB", value: "AUB" }
];

const dataInstruments = [
    { id: 0, label: "Wallet", value: "Wallet" },
    { id: 1, label: "Bank", value: "Bank" }
];

const Approvals = () => {

    const [approvalsData, setApprovalsData] = useState([]);
    const [loading, setLoading] = useState(true);

    const getPendingTransaction  = async () =>  {
        try {
          const response = await axios.get('http://git.zeuxinnovation.in/terrapay-data/approvals');
          setApprovalsData(response.data);
          setLoading(false);
        } catch (error) {
          console.error(error);
        }
    }

    useEffect(() => {
        getPendingTransaction();
    },[]);

    return (
        <>
           <div className='tab-space'>
                <div className='toparea'>
                    <div className='form-group'>
                        <label>Approval Type</label>
                        <Dropdown data={dataReceivePartner} id="reversal" defaultValueText="Reversals" />
                    </div>
                    <div className='form-group'>
                        <label>Created By</label>
                        <Dropdown data={dataInstruments} id="" defaultValueText="All" />
                    </div>
                    <div className='search-filter'>
                        <img src={require('../../assets/search-sm.svg').default} alt="" />
                        <img src={require('../../assets/filter.svg').default} alt="" />
                    </div>
                </div>
            </div>
            <div className='DataTable'>
                <If condition={loading}>
                    <Then>
                        <img src={require('../../assets/loading.gif')} width="80" className='d-block m-auto loader' alt="" />
                    </Then>
                    <Else>
                        <DataTable 
                            columns={approvalsDataColumn} 
                            data={approvalsData}
                        />
                    </Else>
                </If>
            </div>
            {!loading && <ViewAll text="View All Requests" path="/" /> }
        </>
    );
};

export default Approvals;