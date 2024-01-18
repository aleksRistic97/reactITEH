 
import { useState } from 'react';

const useTransactionManager = (initialTransactions) => {
    const [transactions, setTransactions] = useState(initialTransactions);

    const addTransaction = (newTransaction) => {
        setTransactions([
            ...transactions,
            { ...newTransaction, id: transactions.length + 1 }
        ]);
    };

    const deleteTransaction = (id) => {
        setTransactions(transactions.filter(transaction => transaction.id !== id));
    };

    const filterTransactions = (searchText) => {
        return transactions.filter(
            transaction => 
            transaction.name.toLowerCase().includes(searchText.toLowerCase()) ||
            transaction.description.toLowerCase().includes(searchText.toLowerCase())
        );
    };

    const calculateTotals = () => {
        const totalIncome = transactions
            .filter(t => t.type === 'income')
            .reduce((sum, transaction) => sum + Number(transaction.amount), 0);
        const totalExpense = transactions
            .filter(t => t.type === 'expense')
            .reduce((sum, transaction) => sum + Number(transaction.amount), 0);
        return {
            totalIncome,
            totalExpense,
            balance: totalIncome - totalExpense
        };
    };

    return {
        transactions,
        setTransactions,
        addTransaction,
        deleteTransaction,
        filterTransactions,
        calculateTotals
    };
};

export default useTransactionManager;
