import { render, screen } from "@testing-library/react";
import Dashboard from "../components/Dashboard";

test("renders expense heading", () => {
  render(<Dashboard />);
  const heading = screen.getByText(/Expenses/i);
  expect(heading).toBeInTheDocument();
});
