import ExpenseItem from "./ExpenseItem";

function ExpenseList(props) {
  if (props.expenses.length === 0) {
    return <p>No expenses found!Add your first expense.</p>;
  }
  return (
    <div>
      <h3>Expenses</h3>
      <ul>
        {props.expenses.map((expense) => (
          <ExpenseItem
            key={expense.id}
            title={expense.title}
            amount={expense.amount}
          />
        ))}
      </ul>
    </div>
  );
}

export default ExpenseList;
