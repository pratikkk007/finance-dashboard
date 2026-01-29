const express = require("express");
const router = express.Router();
const authMiddleware = require("./middleware/authMiddleware");

// TEMP AI LOGIC (can be replaced with OpenAI later)
router.post("/insights", authMiddleware, (req, res) => {
  const { expenses } = req.body;

  if (!expenses || expenses.length === 0) {
    return res.json({ insight: "No expenses to analyze yet." });
  }

  const total = expenses.reduce((sum, e) => sum + e.amount, 0);

  const insight = `
You have spent a total of $${total}.
Your highest spending category appears to be ${
    expenses.sort((a, b) => b.amount - a.amount)[0].title
  }.
Consider reviewing discretionary expenses to improve savings.
`;

  res.json({ insight });
});

module.exports = router;
