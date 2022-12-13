import React, { useState, useRef } from "react";
import "./ExpenseForm.css";

const ExpenseForm = (props) => {
  const [enteredTitle, setEnteredTitle] = useState("");
  const [enteredAmount, setEnteredAmount] = useState("");
  const [enteredDate, setEnteredDate] = useState("");

  const titleChangeHandler = (event) => {
    setEnteredTitle(event.target.value);
  };
  const amountChangeHandler = (event) => {
    setEnteredAmount(event.target.value);
  };
  const dateChangeHandler = (event) => {
    setEnteredDate(event.target.value);
  };

  const submitHandler = (event) => {
    event.preventDefault();

    const enteredData = {
      title: enteredTitle,
      amount: +enteredAmount,
      date: new Date(enteredDate),
    };

    props.onSaveExpenseData(enteredData);

    setEnteredTitle("");
    setEnteredAmount("");
    setEnteredDate("");
  };

  const divRef = useRef();
  const formRef = useRef();

  const formHandler = () => {
    divRef.current.classList.toggle("none");
    formRef.current.classList.toggle("none");
  };

  return (
    <div className="new-expense__actions center">
      <div ref={divRef}>
        <button type="submit" onClick={formHandler}>
          Adicionar gasto
        </button>
      </div>

      <form ref={formRef} className="none" onSubmit={submitHandler}>
        <div className="new-expense__controls">
          <div className="new-expense__control">
            <label>Descrição</label>
            <input
              type="text"
              value={enteredTitle}
              onChange={titleChangeHandler}
            />
          </div>
          <div className="new-expense__control">
            <label>Valor</label>
            <input
              type="number"
              value={enteredAmount}
              min="0.01"
              step="0.01"
              onChange={amountChangeHandler}
            />
          </div>
          <div className="new-expense__control">
            <label>Data</label>
            <input
              type="date"
              value={enteredDate}
              onChange={dateChangeHandler}
            />
          </div>
        </div>
        <div className="new-expense__actions">
          <button onClick={formHandler}>Cancelar</button>
          <button type="submit">Adicionar gasto</button>
        </div>
      </form>
    </div>
  );
};

export default ExpenseForm;
