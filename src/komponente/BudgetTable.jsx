import React, { useState } from 'react';
import './BudgetTable.css';
import TableRow from './TableRow';
import Navbar from './Navbar';

const BudgetTable = ({transactions, setTransactions}) => {
    const [searchText, setSearchText] = useState('');
    const [sortOrder, setSortOrder] = useState('asc');
    const handleSearchChange = (e) => {
        setSearchText(e.target.value.toLowerCase());
    };

    const filteredTransactions = transactions.filter(transaction => 
        transaction.name.toLowerCase().includes(searchText) ||
        transaction.description.toLowerCase().includes(searchText)
    );

    const toggleSortOrder = () => {
        setSortOrder(sortOrder === 'asc' ? 'desc' : 'asc');
    };
    
    const sortedTransactions = filteredTransactions.sort((a, b) => {
        if (sortOrder === 'asc') {
            return a.amount - b.amount; // Za rastuće sortiranje
        } else {
            return b.amount - a.amount; // Za opadajuće sortiranje
        }
    });

    const deleteTransaction = (id) => {
        
        setTransactions(transactions.filter(transaction => transaction.id !== id));
    };
    const incomeRows = sortedTransactions
    .filter(t => t.type === 'income')
    .map(transaction => (
        <TableRow key={transaction.id} transaction={transaction} onDelete={deleteTransaction} />
    ));

    const expenseRows = sortedTransactions
        .filter(t => t.type === 'expense')
        .map(transaction => (
            <TableRow key={transaction.id} transaction={transaction} onDelete={deleteTransaction} />
        ));



        const calculateTotal = (type) => {
            return transactions
                .filter(transaction => transaction.type === type)
                .reduce((acc, transaction) => acc + Number(transaction.amount), 0);
        };
        
        const totalIncome = calculateTotal('income');
        const totalExpense = calculateTotal('expense');
        const balance = totalIncome - totalExpense;
        
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
            <button onClick={toggleSortOrder} className="sort-button">
                Sortiraj {sortOrder === 'asc' ? '↓' : '↑'}
            </button>
        </div>
        <div className="totals-container">
            <div className="total-income">Ukupni prihodi: {totalIncome} RSD</div>
            <div className="total-expense">Ukupni rashodi: {totalExpense} RSD</div>
            <div className={`balance ${balance < 0 ? 'negative' : ''}`}>
                Saldo: {balance} RSD
            </div>
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
