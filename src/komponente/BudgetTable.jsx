import React, { useState } from 'react';
import './BudgetTable.css';
import TableRow from './TableRow';
import Navbar from './Navbar';

const BudgetTable = ({transactions, setTransactions}) => {
    const [searchText, setSearchText] = useState('');

    const handleSearchChange = (e) => {
        setSearchText(e.target.value.toLowerCase());
    };

    const filteredTransactions = transactions.filter(transaction => 
        transaction.name.toLowerCase().includes(searchText) ||
        transaction.description.toLowerCase().includes(searchText)
    );

    const incomeRows = filteredTransactions
        .filter(t => t.type === 'income')
        .map(transaction => <TableRow key={transaction.id} transaction={transaction} />);

    const expenseRows = filteredTransactions
        .filter(t => t.type === 'expense')
        .map(transaction => <TableRow key={transaction.id} transaction={transaction} />);

    return (
        <>
        <Navbar />
        <div className="search-container">
            <input 
                type="text" 
                placeholder="Pretraži po nazivu ili opisu" 
                value={searchText}
                onChange={handleSearchChange}
                className="search-input"
            />
        </div>
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
        </div>
        </>
    );
};

export default BudgetTable;
