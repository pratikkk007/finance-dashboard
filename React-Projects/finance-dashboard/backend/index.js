const express = require("express");
const cors = require("cors");
const db = require("./db");
const authRoutes = require("./auth");
const authMiddleware = require("./middleware/authMiddleware");
const aiRoutes = require("./ai");

const app = express();
const PORT = 5000;

app.use(cors());
app.use(express.json());
app.use("/auth", authRoutes);
const aiRoutes = require("./ai");


app.get("/expenses", authMiddleware, (req, res) => {
  db.all("SELECT * FROM expenses ORDER BY id DESC", [], (err, rows) => {
    if (err) {
      console.error("DB error:", err);
      return res.status(500).json({ error: "Failed to fetch expenses" });
    }
    res.json(rows);
  });
});

/**
 * POST /expenses
 * Validate input and insert expense into SQLite DB
 */
app.post("/expenses", authMiddleware, (req, res) => {
  const { title, amount } = req.body;
  const parsedAmount = Number(amount);

  // Validation
  if (!title || typeof title !== "string" || title.trim() === "") {
    return res.status(400).json({ error: "Title is required" });
  }

  if (isNaN(parsedAmount) || parsedAmount <= 0) {
    return res.status(400).json({ error: "Amount must be a positive number" });
  }

  // Insert into DB
  db.run(
    "INSERT INTO expenses (title, amount) VALUES (?, ?)",
    [title.trim(), parsedAmount],
    function (err) {
      if (err) {
        console.error("DB insert error:", err);
        return res.status(500).json({ error: "Failed to add expense" });
      }

      // Respond with newly created expense
      res.status(201).json({
        id: this.lastID,
        title: title.trim(),
        amount: parsedAmount,
      });
    },
  );
});

/**
 * START SERVER
 */
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
