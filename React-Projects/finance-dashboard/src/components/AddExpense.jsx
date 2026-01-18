import { useState } from "react";

function AddExpense(props) {
  const [title, setTitle] = useState("");
  const [amount, setAmount] = useState("");
  const [error, setError] = useState("");

  function submitHandler(e) {
    e.preventDefault();

    if(title.trim() === '' || amount.trim() === ''){
        setError('Enter the valid title and amount')
        return
    }

    const newExpense = {
      id: Math.random(),
      title,
      amount,
    };

    props.onAddExpense(newExpense);
    setTitle("");
    setAmount("");
    setError("");
  }

  return (
    <div>
        {error && <p style={{color:'red'}}>{error}</p>}
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
    </div>
  );
}

export default AddExpense;
