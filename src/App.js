import logo from './logo.svg';
import './App.css';
import BudgetTable from './komponente/BudgetTable';
import { useState } from 'react';
import Dodaj from './komponente/Dodaj';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
function App() {
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
  return (
    <Router>
    <div className="App">
      <Routes>
        <Route path="/" element={<BudgetTable transactions={transactions} setTransactions={setTransactions} />} />
        <Route path="/dodaj" element={<Dodaj transactions={transactions} setTransactions={setTransactions} />} />
      </Routes>
    </div>
  </Router>
  );
}

export default App;
