import ExpenseItem from "./ExpenseItem";

function ExpenseList(props) {
  if (props.expenses.length === 0) {
    return <p>No expenses found!Add your first expense.</p>;
  }
  return (
    <div>
      <h3>Expenses</h3>
      <ul>
        <li
          style={{
            listStyle: "none",
            background: "#ffffff",
            padding: "12px 16px",
            borderRadius: "6px",
            marginBottom: "10px",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            boxShadow: "0 2px 6px rgba(0,0,0,0.04)",
          }}
        >
          {props.expenses.map((expense) => (
            <ExpenseItem
              key={expense.id}
              title={expense.title}
              amount={expense.amount}
            />
          ))}
        </li>
      </ul>
    </div>
  );
}

export default ExpenseList;
