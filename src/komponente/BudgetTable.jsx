 
import React, { useState } from 'react';
import './BudgetTable.css';
import TableRow from './TableRow';
import Navbar from './Navbar';
import useTransactionManager from './useTransactionManager';  

const BudgetTable = ({transactions}) => {
    const [searchText, setSearchText] = useState('');
    const [sortOrder, setSortOrder] = useState('asc');
    
    // Inicijalizujemo kuku sa početnim stanjem transakcija
    const { transakcije, addTransaction, deleteTransaction, filterTransactions, calculateTotals } = useTransactionManager(transactions);

    const handleSearchChange = (e) => {
        setSearchText(e.target.value);
    };

    const toggleSortOrder = () => {
        setSortOrder(sortOrder === 'asc' ? 'desc' : 'asc');
    };

    // Filtriramo i sortiramo transakcije
    const filteredAndSortedTransactions = filterTransactions(searchText).sort((a, b) => {
        if (sortOrder === 'asc') {
            return a.amount - b.amount;
        } else {
            return b.amount - a.amount;
        }
    });

    // Izdvajamo redove za prihode i rashode
    const incomeRows = filteredAndSortedTransactions
        .filter(t => t.type === 'income')
        .map(transaction => (
            <TableRow key={transaction.id} transaction={transaction} onDelete={deleteTransaction} />
        ));

    const expenseRows = filteredAndSortedTransactions
        .filter(t => t.type === 'expense')
        .map(transaction => (
            <TableRow key={transaction.id} transaction={transaction} onDelete={deleteTransaction} />
        ));

    // Izračunavamo ukupne prihode, rashode i saldo
    const { totalIncome, totalExpense, balance } = calculateTotals();

    return (
        <>
            <Navbar />
            <div className="search-and-sort-container">
                <input 
                    type="text" 
                    placeholder="Pretraži po nazivu ili opisu" 
                    value={searchText}
                    onChange={handleSearchChange}
                    className="search-input"
                />
                <button onClick={toggleSortOrder} className="sort-button">
                    Sortiraj {sortOrder === 'desc' ? '↓' : '↑'}
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
