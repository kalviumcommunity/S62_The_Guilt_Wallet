import React from 'react';

const ExpenseCard = () => {
  const sampleExpense = {
    name: 'Dinner at Olive Garden',
    amount: 800,
    category: 'Food',
    date: 'January 21, 2025',
    feedback: 'Dining out again? Cook a meal and save some bucks!'
  };

  return (
    <div
      style={{
        padding: '15px',
        backgroundColor: '#ffffff',
        borderRadius: '8px',
        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
        margin: '10px',
        width: '30%',
        textAlign: 'center' // Center the text
      }}
    >
      <h2 style={{ color: '#e67e22' }}>{sampleExpense.name}</h2>
      <p>
        <strong>Amount:</strong>{' '}
        <span style={{ color: '#000000' }}>Amount: ${sampleExpense.amount}</span>
      </p>
      <p>
        <strong>Category:</strong>{' '}
        <span style={{ color: '#000000' }}>Category: {sampleExpense.category}</span>
      </p>
      <p>
        <strong>Date:</strong>{' '}
        <span style={{ color: '#000000' }}>Date: {sampleExpense.date}</span>
      </p>
      <p style={{ fontStyle: 'italic', color: '#e74c3c' }}>{sampleExpense.feedback}</p>
    </div>
  );
};

export default ExpenseCard;
