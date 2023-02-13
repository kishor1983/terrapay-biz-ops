export const approvalsDataColumn = [
    {
        name: 'Timestamp',
        selector: row => row.timestamp,
    },
    {
        name: 'Transaction ID',
        selector: row => row.transaction_id,
        width: "180px"
    },
	{
        name: 'Reversal Reason',
        selector: (row) => row.reversal_reason,
        width: "150px"
    },
	{
        name: 'Created by',
		selector: (row) => row.created_by
    },
	{
        name: 'Last Handled',
		cell: (row) => (
			<div>
				{row.last_handled}
				<div className="grey_msg">{row.last_handled_msg}</div>
			</div>
		),
        width: "100px"
    },
    {
        name: '',
        cell: (row) => (
            <button className="btn normal f12">View Tickets</button>
        ),
        width: "90px"
    },
    {
        name: '',
        cell: (row) => (
            <button className="btn normal f12">View Details</button>
        ),
        width: "80px"
    },
    {
        name: '',
        cell: (row) => (
            <div style={{width: '100%', textAlign: 'right'}}>
                <img className="threedot" src={require("../assets/three-dots-vertical.svg").default} alt="" onClick={() => console.log(row)} />
            </div>
        ),
        width: "40px"
    }
];