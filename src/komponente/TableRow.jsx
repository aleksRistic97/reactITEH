 
import React from 'react';
import { MdDelete } from "react-icons/md";
const TableRow = ({ transaction,onDelete  }) => {
    const { id, name, date, description, type, amount } = transaction;
    const amountStyle = type === 'income' ? { color: 'green' } : { color: 'red' };
    const amountSign = type === 'income' ? '+' : '-';

    return (
        <tr key={id}>
            <td style={amountStyle}>{amountSign}{amount} RSD</td>
            <td>{name}</td>
            <td>{date}</td>
            <td>{description}</td>
            <td>
                <button onClick={() => onDelete(transaction.id)}><MdDelete /></button>
            </td>
        </tr>
    );
};

export default TableRow;
