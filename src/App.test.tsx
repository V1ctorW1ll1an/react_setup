import React from "react"
import { render, screen } from "@testing-library/react"
import App from "./App"

test("renders message", () => {
    render(<App />)
    const message_element = screen.getByText(/Setup!/i)
    expect(message_element).toBeInTheDocument()
})
