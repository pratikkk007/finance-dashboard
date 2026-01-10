import ExpenseList from "./ExpenseList";

function Dashboard() {
  const expenses = [
    { id: "e1", title: "Toilet Paper", amount: 94.12 },
    { id: "e2", title: "New TV", amount: 799.49 },
    { id: "e3", title: "Car Insurance", amount: 294.67 },
    { id: "e4", title: "New Desk (Wooden)", amount: 450 },
  ];

  return (
    <div>
      <ExpenseList expenses={expenses} />
    </div>
  );
}

export default Dashboard;
