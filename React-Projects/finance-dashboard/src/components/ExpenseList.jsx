function ExpenseList(props) {
  return (
    <div>
      <h3>Expenses</h3>
      <ul>
        {props.expenses.map((expense) => (
          <li key={expense.id}>
            {expense.title} - ${expense.amount}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ExpenseList;
