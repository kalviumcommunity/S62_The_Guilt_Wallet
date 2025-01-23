import React from 'react';
// import './App.css'; // Optional external CSS if you prefer keeping additional styles organized
import ExpenseCard from './components/ExpenseCard';

function App() {
  return (
    <div style={{ padding: '20px', fontFamily: 'Arial, sans-serif', backgroundColor: '#f7f9fc' }}>
      <header style={{ textAlign: 'center', padding: '40px', backgroundColor: '#3498db', color: '#fff', borderRadius: '10px' }}>
        <h1 style={{ fontSize: '3rem', margin: '0' }}>Welcome to The Guilt Wallet</h1>
        <p style={{ fontSize: '1.2rem', marginTop: '10px' }}>Track your expenses and get sarcastic feedback!</p>
      </header>

      <div style={{ display: 'flex', justifyContent: 'space-around', marginTop: '30px' }}>
        <ExpenseCard />
        <ExpenseCard />
        <ExpenseCard />
      </div>
    </div>
  );
}

export default App;
