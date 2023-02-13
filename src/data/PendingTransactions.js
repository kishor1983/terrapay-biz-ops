export const balanceDataColumn = [
    {
        name: 'Receiver Partner',
        selector: row => row.receiver_partner,
        width: "140px"
    },
    {
        name: 'Instrument',
        selector: row => row.instrument,
        sortable: true
    },
    {
        name: 'Partner Error Msg.',
        cell:(row) =>(
            <div className="table_custom">
                <span>{row.partner_error_msg}</span>
                {row.error === "1"  && <div className="warning_msg">
                   <img src={require('../assets/warning.png')} alt="" width="10" /> Error not defined in system
                </div>}
                {row.error === "1" ? <button className="btn normal f12">Propose SOP</button> : <button className="btn normal f12">View SOP</button>}
            </div>
        ),
        width: "300px"
    },
    {
        name: '',
        cell: (row) => (
            <button className="btn normal f12">View Tickets</button>
        )
    },
    {
        name: '',
        cell: (row) => (
            <button className="btn normal f12">View Transactions</button>
        )
    }
];