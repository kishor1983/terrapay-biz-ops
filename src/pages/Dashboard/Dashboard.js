import React, {useState} from 'react';
import { TitleBar } from '../../components/TitleBar';
import { PendingTransactions } from '../../components/PendingTransactions';
import { Tickets } from '../../components/Tickets';
import { Approvals } from '../../components/Approvals';
import { Tabs } from '../../components/Tabs';
import { ArrowButton } from '../../components/ArrowButton';
import { TransactionBoard, ApproversBoard } from '../../components/BoardContent';
import { TrackTransaction } from '../../components/TrackTransaction';
import { ValidateTransaction } from '../../components/ValidateTransaction';
import { AllCards } from '../../components/AllCards';
import { OutageCards } from '../../components/OutageCards';
import { LedgerFundsCards } from '../../components/LedgerFundsCards';
import { EscalationsCards } from '../../components/EscalationsCards';
import { If, Then, Else } from 'react-if';
import './Dashboard.scss';

const Dashboard = () => {

    const [cardDisplay, setCardDisplay] = useState('pending-transctions');

    const showCard = (res) => {
        setCardDisplay(res);
    }

    return (
        <>
           <div className="row">
                <div className="col-md-12">
                    <TitleBar title="Dashboard" description="Last login: 2 April 2022 at 7:00 PM" />
                </div>
            </div>
            <div className="row">
                <div className="col-sm-8">
                    <Tabs onSelect={(res) => showCard(res)}>
                        <Tabs.Tab label={"pending-transctions"} tabName={"Pending Transactions (1000)"}>
                            <PendingTransactions />
                        </Tabs.Tab>
                        <Tabs.Tab label={"tickets"} tabName={"Tickets (500)"}>
                            <Tickets />
                        </Tabs.Tab>
                        <Tabs.Tab label={"approvals"} tabName={"Approvals (10)"}>
                            <Approvals />
                        </Tabs.Tab>
                    </Tabs>
                    <div className="complete-wrap">
                        <If condition={cardDisplay === 'pending-transctions' || cardDisplay === 'tickets'}>
                            <Then>
                                <TransactionBoard />
                            </Then>
                            <Else>
                                <ApproversBoard />
                            </Else>
                        </If>
                    </div>
                </div>
                <div className="col-sm-4">
                    <div className="row mrgbtm">
                        <div className="col-sm-12">
                            <Tabs>
                                <Tabs.Tab label={"track-transction"} tabName={"Track Transaction"}>
                                    <TrackTransaction />
                                </Tabs.Tab>
                                <Tabs.Tab label={"validate-transction"} tabName={"Validate Transaction"}>
                                    <ValidateTransaction />
                                </Tabs.Tab>
                            </Tabs>
                        </div>
                    </div>
                    <div className="alert-section">
                        <h2>Alerts</h2>
                        <Tabs>
                            <Tabs.Tab label={"all"} tabName={"All"} className="minheight">
                                <AllCards />
                            </Tabs.Tab>
                            <Tabs.Tab label={"outage"} tabName={"Outage"} className="minheight">
                                <OutageCards />
                            </Tabs.Tab>
                            <Tabs.Tab label={"ledger-funds"} tabName={"Ledger Funds"} className="minheight">
                                <LedgerFundsCards />
                            </Tabs.Tab>
                            <Tabs.Tab label={"escalations"} tabName={"Escalations"} className="minheight">
                                <EscalationsCards />
                            </Tabs.Tab>
                        </Tabs>
                    </div>
                    <div className='buttons-wrap'>
                        <ArrowButton text="10 Lowest Performing Corridors" path="/" />
                        <ArrowButton text="Delivery Time Analysis" path="/" />
                        <ArrowButton text="Transaction & Ticket Analysis" path="/" />
                    </div>  
                </div>
            </div>
        </>
    );
};

export default Dashboard