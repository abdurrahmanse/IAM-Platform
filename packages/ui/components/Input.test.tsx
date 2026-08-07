import * as React from "react"
import { render, screen } from "@testing-library/react"
import { describe, it, expect } from "vitest"
import { Input } from "./Input"

describe("Input component", () => {
  it("renders correctly with default props", () => {
    render(<Input placeholder="Enter text" />)
    const input = screen.getByPlaceholderText("Enter text")
    expect(input).toBeInTheDocument()
    expect(input).toHaveClass("flex", "h-12", "w-full", "rounded-xl") // verify core classes exist
  })

  it("passes standard HTML attributes like type and disabled", () => {
    render(<Input type="password" disabled data-testid="password-input" />)
    const input = screen.getByTestId("password-input")
    expect(input).toBeDisabled()
    expect(input).toHaveAttribute("type", "password")
  })

  it("merges custom classNames correctly", () => {
    render(<Input className="custom-class" data-testid="custom-input" />)
    const input = screen.getByTestId("custom-input")
    expect(input).toHaveClass("custom-class")
    expect(input).toHaveClass("flex") // retains default classes
  })
})
