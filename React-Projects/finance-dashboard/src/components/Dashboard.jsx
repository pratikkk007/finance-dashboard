import { useState, useEffect } from "react";
import AddExpense from "./AddExpense";
import ExpenseList from "./ExpenseList";

function Dashboard() {
  // 1. State
  const [expenses, setExpenses] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  // 2. Effects
  useEffect(() => {
    fetch("http://localhost:5000/expenses")
      .then((res) => res.json())
      .then((data) => {
        setExpenses(data);
        setIsLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching expenses:", error);
        setIsLoading(false);
      });
  }, []);

  // 3. Handlers
  function addExpenseHandler(expense) {
    fetch("http://localhost:5000/expenses", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(expense),
    })
      .then(async (res) => {
        const data = await res.json();

        if (!res.ok) {
          throw new Error(data.error || "Something went wrong");
        }

        return data;
      })
      .then((newExpense) => {
        setExpenses((prevExpenses) => [newExpense, ...prevExpenses]);
      })
      .catch((error) => {
        alert(error.message);
        console.error("Failed to add expense:", error.message);
      });
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
