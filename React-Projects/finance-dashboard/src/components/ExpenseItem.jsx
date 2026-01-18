function ExpenseItem(props) {
  return (
    <li>
      {props.title} - ${props.amount}
    </li>
  );
}

export default ExpenseItem;
