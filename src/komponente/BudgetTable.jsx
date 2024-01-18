import React, { useState } from 'react';
import './BudgetTable.css';

const BudgetTable = () => {
    const [transactions, setTransactions] = useState([
        { id: 1, name: 'Plata', date: '2024-01-10', description: 'Mesečna plata', type: 'income', amount: 50000 },
        { id: 2, name: 'Račun za struju', date: '2024-01-15', description: 'Januarski račun', type: 'expense', amount: 5500 },
        { id: 3, name: 'Plata', date: '2024-01-10', description: 'Mesečna plata', type: 'income', amount: 50000 },
        { id: 4, name: 'Račun za vodu', date: '2024-01-20', description: 'Januarski račun', type: 'expense', amount: 3500 },
        { id: 5, name: 'Plata', date: '2024-01-10', description: 'Mesečna plata', type: 'income', amount: 50000 },
        { id: 6, name: 'Internet', date: '2024-01-25', description: 'Januarski račun', type: 'expense', amount: 2500 },
        { id: 7, name: 'Plata', date: '2024-01-10', description: 'Mesečna plata', type: 'income', amount: 50000 },
        { id: 8, name: 'Mobilni telefon', date: '2024-01-18', description: 'Januarski račun', type: 'expense', amount: 1500 },
        { id: 9, name: 'Plata', date: '2024-01-10', description: 'Mesečna plata', type: 'income', amount: 50000 },
        { id: 10, name: 'Grejanje', date: '2024-01-22', description: 'Januarski račun', type: 'expense', amount: 6000 },
        { id: 11, name: 'Plata', date: '2024-01-10', description: 'Mesečna plata', type: 'income', amount: 50000 },
        { id: 12, name: 'Osiguranje', date: '2024-01-30', description: 'Januarski račun', type: 'expense', amount: 8000 },
    ]);
    

    const incomeRows = transactions.filter(t => t.type === 'income').map((transaction, index) => (
        <tr key={transaction.id}>
          <td style={{ color: 'green' }}>+{transaction.amount} RSD</td>
            <td>{transaction.name}</td>
            <td>{transaction.date}</td>
            <td>{transaction.description}</td>
        </tr>
    ));

    const expenseRows = transactions.filter(t => t.type === 'expense').map((transaction, index) => (
        <tr key={transaction.id}>
             <td style={{ color: 'red' }}>-{transaction.amount} RSD</td>
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
