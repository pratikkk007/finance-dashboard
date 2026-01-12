import ExpenseList from "./ExpenseList";
import { useState } from "react";
import AddExpense from "./AddExpense";

function Dashboard() {
  const [expenses, setExpenses] = useState([
    { id: "e1", title: "Toilet Paper", amount: 94.12 },
    { id: "e2", title: "New TV", amount: 799.49 },
    { id: "e3", title: "Car Insurance", amount: 294.67 },
    { id: "e4", title: "New Desk (Wooden)", amount: 450 },
  ]);

  function addExpenseHandler(expense) {
    setExpenses((prevExpenses) => {
      return [expense, ...prevExpenses];
    });
  }

  return (
    <div>
      <AddExpense onAddExpense={addExpenseHandler} />
      <ExpenseList expenses={expenses} />
    </div>
  );
}

export default Dashboard;
