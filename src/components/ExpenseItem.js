import React from "react";
import './ExpenseItem.css';

function ExpenseItem() {
  return (
    <div className="expense-item">
      <div>March 28th</div>
      <div className="expense-item__description">
        <h2>Car</h2>
        <div className="expense-item__price">$99.99</div>
      </div>
    </div>
  );
}

export default ExpenseItem;
