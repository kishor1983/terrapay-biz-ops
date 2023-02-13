export const ticketsDataColumn = [
    {
        name: 'Sender Partner',
        selector: row => row.ticket_type,
    },
    {
        name: 'Ticket ID',
        selector: row => row.ticket_id,
    },
	{
        name: 'Description',
        cell: (row) => (
			<div>
				{row.status_msg !== "" && (row.status_msg === "New" ? <div className="small_badge grnbg">{row.status_msg}</div> : <div className="small_badge">{row.status_msg}</div>)}
				<p>{row.description}</p>
				<div className="highlight_txt">{row.transaction_id}</div>
			</div>
		),
		width: "230px"
    },
	{
        name: 'Last Handled',
		cell: (row) => (
			<div>
				{row.last_handled}
				<div className="grey_msg">{row.last_handled_msg}</div>
			</div>
		),
    },
	{
        name: 'Due in',
		cell: (row) => (
			<div>
				{row.due_in}
				<div className="grey_msg">{row.due_msg}</div>
			</div>
		),
		width: "80px"
    },
    {
        name: '',
        cell: (row) => (
            <button className="btn normal f12">View Ticket</button>
        )
    },
    {
        name: '',
        cell: (row) => (
            <div style={{width: '100%', textAlign: 'right'}}>
                <img className="threedot" src={require("../assets/three-dots-vertical.svg").default} alt="" onClick={() => console.log(row)} />
            </div>
        ),
        width: "30px"
    }
];