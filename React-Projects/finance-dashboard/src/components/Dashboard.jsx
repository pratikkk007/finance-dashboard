import { useState, useEffect } from "react";
import AddExpense from "./AddExpense";
import ExpenseList from "./ExpenseList";

function Dashboard() {
  // 1. State
  const [expenses, setExpenses] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  // 2. Effects
  useEffect(() => {
    setTimeout(() => {
      setExpenses([
        { id: 1, title: "Food", amount: 250 },
        { id: 2, title: "Travel", amount: 120 },
      ]);
      setIsLoading(false);
    }, 1000);
  }, []);

  // 3. Handlers
  function addExpenseHandler(expense) {
    setExpenses((prevExpenses) => [expense, ...prevExpenses]);
  }

  // 4. Conditional UI
  if (isLoading) {
    return <p>Loading expenses...</p>;
  }

  // 5. JSX
  return (
    <div>
      <h2>
        {expenses.length > 0 ? "Your Expenses" : "Start Tracking Expenses"}
      </h2>

      <AddExpense onAddExpense={addExpenseHandler} />
      <ExpenseList expenses={expenses} />
    </div>
  );
}

export default Dashboard;
