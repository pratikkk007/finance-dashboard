const express = require("express");
const cors = require("cors");

const app = express();
const PORT = 5000;

app.use(cors());
app.use(express.json());

let expenses = [
  { id: 1, title: "Food", amount: 250 },
  { id: 2, title: "Travel", amount: 120 },
];

// GET expenses
app.get("/expenses", (req, res) => {
  try {
    res.json(expenses);
  } catch (error) {
    console.error("Error fetching expenses:", error);
    res.status(500).json({ error: "Failed to fetch expenses" });
  }
});

// POST expense
app.post("/expenses", (req, res) => {
  const { title, amount } = req.body;
  const parsedAmount = Number(amount);

  if (!title || typeof title !== "string" || title.trim() === "") {
    return res.status(400).json({ error: "Title is required" });
  }

  if (isNaN(parsedAmount) || parsedAmount <= 0) {
    return res.status(400).json({ error: "Amount must be a positive number" });
  }

  const newExpense = {
    id: Date.now(),
    title: title.trim(),
    amount: parsedAmount,
  };

  expenses.unshift(newExpense);
  res.status(201).json(newExpense);
});

// START SERVER (MUST BE AT THE END)
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
