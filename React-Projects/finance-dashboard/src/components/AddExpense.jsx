import { useState } from "react";

function AddExpense(props) {
  const [title, setTitle] = useState("");
  const [amount, setAmount] = useState("");

  function submitHandler(e) {
    e.preventDefault();

    const newExpense = {
      id: Math.random(),
      title,
      amount,
    };

    props.onAddExpense(newExpense);
    setTitle("");
    setAmount("");
  }

  return (
    <form onSubmit={submitHandler}>
      <input
        type="text"
        placeholder="Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />

      <input
        type="number"
        placeholder="Amount"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
      />

      <button>Add Expense</button>
    </form>
  );
}

export default AddExpense;
