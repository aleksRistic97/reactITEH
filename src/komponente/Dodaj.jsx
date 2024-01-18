 
import React, { useState } from 'react';
import './Dodaj.css';
const Dodaj = ({ transactions, setTransactions }) => {
    const [newTransaction, setNewTransaction] = useState({
        name: '',
        date: '',
        description: '',
        type: 'income', 
        amount: ''
    });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setNewTransaction({ ...newTransaction, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const id = transactions.length + 1; //  ID generator
        setTransactions([...transactions, { ...newTransaction, id }]);
        setNewTransaction({ name: '', date: '', description: '', type: 'income', amount: '' }); // Reset forme
    };
    return (
        <div className="new-transaction-form">
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                name="name"
                value={newTransaction.name}
                onChange={handleInputChange}
                placeholder="Naziv transakcije"
            />
            <input
                type="date"
                name="date"
                value={newTransaction.date}
                onChange={handleInputChange}
            />
            <input
                type="text"
                name="description"
                value={newTransaction.description}
                onChange={handleInputChange}
                placeholder="Opis"
            />
            <select
                name="type"
                value={newTransaction.type}
                onChange={handleInputChange}
            >
                <option value="income">Prihod</option>
                <option value="expense">Rashod</option>
            </select>
            <input
                type="number"
                name="amount"
                value={newTransaction.amount}
                onChange={handleInputChange}
                placeholder="Iznos"
            />
            <button type="submit">Dodaj transakciju</button>
        </form>
    </div>
    );
};

export default Dodaj;
