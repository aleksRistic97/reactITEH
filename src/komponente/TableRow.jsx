 
import React from 'react';

const TableRow = ({ transaction }) => {
    const { id, name, date, description, type, amount } = transaction;
    const amountStyle = type === 'income' ? { color: 'green' } : { color: 'red' };
    const amountSign = type === 'income' ? '+' : '-';

    return (
        <tr key={id}>
            <td style={amountStyle}>{amountSign}{amount} RSD</td>
            <td>{name}</td>
            <td>{date}</td>
            <td>{description}</td>
        </tr>
    );
};

export default TableRow;
