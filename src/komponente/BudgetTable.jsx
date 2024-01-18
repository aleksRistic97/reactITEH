import React, { useState } from 'react';
import './BudgetTable.css';

const BudgetTable = () => {
    const [transactions, setTransactions] = useState([
        { id: 1, name: 'Plata', date: '2024-01-10', description: 'Mesečna plata', type: 'income' },
        { id: 2, name: 'Račun za struju', date: '2024-01-15', description: 'Januarski račun', type: 'expense' },
        { id: 3, name: 'Plata', date: '2024-01-10', description: 'Mesečna plata', type: 'income' },
        { id: 4, name: 'Račun za struju', date: '2024-01-15', description: 'Januarski račun', type: 'expense' },
        { id: 5, name: 'Plata', date: '2024-01-10', description: 'Mesečna plata', type: 'income' },
        { id:6, name: 'Račun za struju', date: '2024-01-15', description: 'Januarski račun', type: 'expense' },
        { id: 7, name: 'Plata', date: '2024-01-10', description: 'Mesečna plata', type: 'income' },
        { id: 8, name: 'Račun za struju', date: '2024-01-15', description: 'Januarski račun', type: 'expense' },
        { id: 9, name: 'Plata', date: '2024-01-10', description: 'Mesečna plata', type: 'income' },
        { id: 10, name: 'Račun za struju', date: '2024-01-15', description: 'Januarski račun', type: 'expense' },
        { id: 11, name: 'Plata', date: '2024-01-10', description: 'Mesečna plata', type: 'income' },
        { id: 12, name: 'Račun za struju', date: '2024-01-15', description: 'Januarski račun', type: 'expense' },
    ]);

    const incomeRows = transactions.filter(t => t.type === 'income').map((transaction, index) => (
        <tr key={transaction.id}>
            <td>{transaction.name}</td>
            <td>{transaction.date}</td>
            <td>{transaction.description}</td>
        </tr>
    ));

    const expenseRows = transactions.filter(t => t.type === 'expense').map((transaction, index) => (
        <tr key={transaction.id}>
            <td>{transaction.name}</td>
            <td>{transaction.date}</td>
            <td>{transaction.description}</td>
        </tr>
    ));

    return (
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
    );
};

export default BudgetTable;
