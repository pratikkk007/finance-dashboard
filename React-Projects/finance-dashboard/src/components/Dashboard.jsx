import ExpenseList from "./ExpenseList";
import { useState, useEffect } from "react";
import AddExpense from "./AddExpense";

function Dashboard() {
  const [expenses, setExpenses] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setExpenses([
        { id: 1, title: "Food", amount: 250 },
        { id: 2, title: "Hotel", amount: 700 },
      ]);
      setIsLoading(false);
    }, 1000);
  }, []);

  function addExpenseHandler(expense) {
    setExpenses((prevExpenses) => {
      return [expense, ...prevExpenses];
    });
  }
  if (isLoading) {
    return <p>Loading...</p>;
  }

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
