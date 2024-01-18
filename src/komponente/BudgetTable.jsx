import React, { useState } from 'react';
import './BudgetTable.css';
import TableRow from './TableRow';
import Navbar from './Navbar';

const BudgetTable = ({transactions, setTransactions}) => {
 

    const incomeRows = transactions
        .filter(t => t.type === 'income')
        .map(transaction => <TableRow key={transaction.id} transaction={transaction} />);

    const expenseRows = transactions
        .filter(t => t.type === 'expense')
        .map(transaction => <TableRow key={transaction.id} transaction={transaction} />);


    return (
        <>
        <Navbar></Navbar>
        <div className="budget-table"> 
            <table>
                <thead>
                    <tr>
                        <th>Prihodi</th>
                        <th>Rashodi</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>
                            <table>{incomeRows}</table>
                        </td>
                        <td>
                            <table>{expenseRows}</table>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div></>
    );
};

export default BudgetTable;
