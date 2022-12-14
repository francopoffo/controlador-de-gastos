import React from "react";
import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";
import { useState } from "react";

const initialExpenses = [
  {
    id: "e1",
    title: "Ração do gato",
    amount: 45.23,
    date: new Date(2022, 7, 14),
  },
  {
    id: "e2",
    title: "Diarista",
    amount: 110.0,
    date: new Date(2022, 2, 12),
  },
  {
    id: "e3",
    title: "Notebook",
    amount: 4750.0,
    date: new Date(2022, 12, 28),
  },
  {
    id: "e4",
    title: "Conta de luz",
    amount: 150,
    date: new Date(2023, 1, 12),
  },
];

function App() {
  const [expenses, setExpenses] = useState(initialExpenses);

  const addExpenseHandler = (expense) => {
    setExpenses((prevExpenses) => {
      return [expense, ...prevExpenses];
    });
  };

  return (
    <div className="App">
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses items={expenses} />
    </div>
  );
}

export default App;
