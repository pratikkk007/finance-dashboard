import { useState, useEffect } from "react";
import AddExpense from "./AddExpense";
import ExpenseList from "./ExpenseList";
import { jwtDecode } from "jwt-decode";

function Dashboard({ token, onLogout }) {
  // 1. State
  const [expenses, setExpenses] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  let user = null;

  try {
    user = jwtDecode(token);
  } catch (err) {
    console.error("Invalid token");
  }

  // 2. Fetch expenses (JWT protected)
  useEffect(() => {
    fetch("http://localhost:5000/expenses", {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
      .then((res) => {
        if (!res.ok) {
          throw new Error("Unauthorized or failed to fetch");
        }
        return res.json();
      })
      .then((data) => {
        setExpenses(data);
        setIsLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching expenses:", error);
        setIsLoading(false);
      });
  }, [token]);

  // 3. Add expense (JWT protected)
  function addExpenseHandler(expense) {
    fetch("http://localhost:5000/expenses", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
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

  // 4. Loading state
  if (isLoading) {
    return <p>Loading expenses...</p>;
  }

  // 5. UI
  return (
    <div
      style={{
        maxWidth: "900px",
        margin: "40px auto",
        padding: "24px",
        backgroundColor: "#f8fafc",
        borderRadius: "10px",
        boxShadow: "0 10px 20px rgba(0,0,0,0.05)",
        fontFamily: "system-ui, sans-serif",
      }}
    >
      <header
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          marginBottom: "24px",
        }}
      >
        <div>
          <h2 style={{ margin: 0 }}>
            {expenses.length > 0 ? "Your Expenses" : "Start Tracking Expenses"}
          </h2>
          <p style={{ margin: 0, fontSize: "14px", color: "#64748b" }}>
            Logged in as {user.email}
          </p>
        </div>
        <button
          onClick={onLogout}
          style={{
            padding: "8px 14px",
            backgroundColor: "#ef4444",
            color: "#fff",
            border: "none",
            borderRadius: "6px",
            cursor: "pointer",
          }}
        >
          Logout
        </button>
      </header>
      {user?.role === "admin" && (
        <div
          style={{
            background: "#eef2ff",
            padding: "12px",
            borderRadius: "6px",
            marginBottom: "20px",
            color: "#3730a3",
            fontSize: "14px",
          }}
        >
          Admin access enabled
        </div>
      )}
      <AddExpense onAddExpense={addExpenseHandler} />
      {expenses.length === 0 && (
        <p style={{ color: "#64748b", marginTop: "12px" }}>
          No expenses yet. Start by adding one above.
        </p>
      )}

      <ExpenseList expenses={expenses} />
    </div>
  );
}

export default Dashboard;
