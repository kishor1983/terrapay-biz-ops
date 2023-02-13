import React, {useState, useRef, useEffect} from 'react';
import DataTable from 'react-data-table-component';
import {If, Then, Else} from 'react-if';
import {Link} from 'react-router-dom';
import { Dropdown } from '../../components/Dropdown';
import { ViewAll } from '../../components/ViewAll';
import axios from 'axios';
import {balanceDataColumn } from '../../data/PendingTransactions';


const dataReceivePartner = [
    { id: 0, label: "Western Union", value: "Western Union" },
    { id: 1, label: "AUB", value: "AUB" }
];

const dataInstruments = [
    { id: 0, label: "All", value: "" },
    { id: 1, label: "Wallet", value: "Wallet" },
    { id: 2, label: "Bank", value: "Bank" }
];

const PendingTransactions = () => {

    const [filteredData, setFilteredData] = useState([]);
    const [popup, setPopup] = useState(null);
    const [loading, setLoading] = useState(true);

    const closeDropdownFromTable = useRef();

    const pendingTransactionAction = [
        ...balanceDataColumn,
        {
            name: '',
            cell: (row) => (
                <div className='moreBtn' style={{width: '100%', textAlign: 'right'}}>
                    <img className='threedot' src={require("../../assets/three-dots-vertical.svg").default} alt="" onClick={() => handleOpenPopup(row.id)} />
                    {popup === row.id &&
                    <div className={`dropdown-menu show`} ref={closeDropdownFromTable}>
                        <Link to="/" className="dropdown-item" href="#">Option 1</Link>
                        <Link to="/" className="dropdown-item" href="#">Option 2</Link>
                    </div>}
                </div>
            ),
            width: "30px"
        }
    ];

    const handleOpenPopup = (id) => {
        setPopup(id);
    }

    const handleSearchFilter = (val) => {
        console.log(val);
        let searchQuery = val.value.toLowerCase();
        let filteredResults = filteredData.filter((obj) => 
            Object.values(obj).some((val) =>
            val.toString().toLowerCase().includes(searchQuery.toLowerCase())
        ));
        setFilteredData(filteredResults);
    };

    useEffect(() => {
        const handleClickOutside = (event) => {
          if (closeDropdownFromTable.current && !closeDropdownFromTable.current.contains(event.target)) {
            setPopup(null);
          }
        };
        document.addEventListener('click', handleClickOutside, true);
        return () => {
          document.removeEventListener('click', handleClickOutside, true);
        };
    }, []);

    const getPendingTransaction  = async () =>  {
        try {
          const response = await axios.get('http://git.zeuxinnovation.in/terrapay-data/pendingtransactions');
          setFilteredData(response.data);
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
                        <label>Showing pending txn. for</label>
                        <Dropdown data={dataReceivePartner} id="receive-partner" defaultValueText="Receiver Partners (341)" onChange={handleSearchFilter} />
                    </div>
                    <div className='form-group'>
                        <label>Partner Name</label>
                        <Dropdown data={dataInstruments} id="" defaultValueText="All" onChange={handleSearchFilter} />
                    </div>
                    <div className='form-group'>
                        <label>Instrument Type</label>
                        <Dropdown data={dataInstruments} id="" defaultValueText="All" onChange={handleSearchFilter} />
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
                            columns={pendingTransactionAction} 
                            data={filteredData} 
                            sortIcon={<img src={require('../../assets/sort.svg').default} alt="" className='sorticon' />}
                        />
                    </Else>
                </If>
            </div>
            {!loading && <ViewAll text="View All Transactions" path="/" />}
        </>
    );
};

export default PendingTransactions;