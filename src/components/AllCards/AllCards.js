import React, {useState} from 'react';
import SimpleBar from 'simplebar-react';
import { Card } from '../Card';
import { RadioButton } from '../../components/RadioButton';
import 'simplebar-react/dist/simplebar.min.css';
import '../../simplebar.scss';

const AllCards = () => {

    const [selValue, setSelValue] = useState('Value 1');

    const handleRadioChange = (e) => {
        setSelValue(e.target.value);
        console.log(e.target.value);
    }

    return (
        <div className="cards">
            <div className="custom-radio-section custom-radio-inline-section padlttp">
                <RadioButton id="all" name="all" label="All" value="Value 1" checked={selValue === 'Value 1'} onChangeRadio={handleRadioChange} />
                <RadioButton id="ongoing" name="all" label="Ongoing" value="Value 2" checked={selValue === 'Value 2'} onChangeRadio={handleRadioChange} />
                <RadioButton id="upcoming" name="all" label="Upcoming" value="Value 3" checked={selValue === 'Value 3'} onChangeRadio={handleRadioChange} />
            </div>
            <SimpleBar style={{ maxHeight: 452, marginTop: "15px" }} autoHide={true}>
                <Card iconType="warning" title="LULU: Server Down">
                    Bank server is currently down due to planned maintainence. This downtime will last 1 hour from 4:30-5:30 PM (GMT).
                </Card>
                <Card iconType="success" title="WU: Server Back Online">
                    The unplanned outage from WU has been solved. Any pending transactions on 28 Mar 2022 from 5:00 - 7:00 PM (GMT) can now be processed.
                </Card>
                <Card iconType="calendar" title="SEND WAVE: Planned Outage">
                    Server will be down due to planned maintainence. This downtime will last 4 hours from 11:00 AM - 12:30 PM (GMT).
                </Card>
                <Card iconType="warning" title="LULU: Server Down">
                    Bank server is currently down due to planned maintainence. This downtime will last 1 hour from 4:30-5:30 PM (GMT).
                </Card>
                <Card iconType="success" title="WU: Server Back Online">
                    The unplanned outage from WU has been solved. Any pending transactions on 28 Mar 2022 from 5:00 - 7:00 PM (GMT) can now be processed.
                </Card>
                <Card iconType="calendar" title="SEND WAVE: Planned Outage">
                    Server will be down due to planned maintainence. This downtime will last 4 hours from 11:00 AM - 12:30 PM (GMT).
                </Card>
            </SimpleBar>
        </div>
    );
};

export default AllCards;