import React from "react";
import { render, screen } from "@testing-library/react";
import { App } from "./App";

test("renders impressum link", () => {
  render(<App />);
  const linkElement = screen.getByText(/impressum/i);
  expect(linkElement).toBeInTheDocument();
});
