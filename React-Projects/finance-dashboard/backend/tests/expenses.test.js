const request = require("supertest");
const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

let expenses = [{ id: 1, title: "Food", amount: 250 }];

// define routes (same as index.js)
app.get("/expenses", (req, res) => {
  res.json(expenses);
});

describe("GET /expenses", () => {
  it("should return list of expenses", async () => {
    const response = await request(app).get("/expenses");

    expect(response.status).toBe(200);
    expect(response.body.length).toBeGreaterThan(0);
    expect(response.body[0]).toHaveProperty("title");
  });
});
