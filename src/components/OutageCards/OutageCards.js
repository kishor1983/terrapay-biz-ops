import React from 'react';
import { Card } from '../Card';

const OutageCards = () => {
    return (
        <div className="tab-space cards">
            <Card iconType="warning" title="LULU: Server Down">
                Bank server is currently down due to planned maintainence. This downtime will last 1 hour from 4:30-5:30 PM (GMT).
            </Card>
            <Card iconType="success" title="WU: Server Back Online">
                The unplanned outage from WU has been solved. Any pending transactions on 28 Mar 2022 from 5:00 - 7:00 PM (GMT) can now be processed.
            </Card>
            <Card iconType="calendar" title="SEND WAVE: Planned Outage">
                Server will be down due to planned maintainence. This downtime will last 4 hours from 11:00 AM - 12:30 PM (GMT).
            </Card>
        </div>
    );
};

export default OutageCards;