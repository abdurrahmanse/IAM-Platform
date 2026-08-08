import { render, screen } from "@testing-library/react"
import { describe, it, expect } from "vitest"
import { Input } from "./Input"

describe("Input component", () => {
  it("renders with correct base classes", () => {
    render(<Input placeholder="Enter text" />)
    const input = screen.getByPlaceholderText("Enter text")
    expect(input).toBeInTheDocument()
    expect(input).toHaveClass("h-11", "w-full", "rounded-xl")
  })

  it("renders label when label prop is provided", () => {
    render(<Input label="Email address" placeholder="you@company.com" />)
    expect(screen.getByText("Email address")).toBeInTheDocument()
  })

  it("renders hint text when hint prop is provided", () => {
    render(<Input hint="We'll never share your email." placeholder="email" />)
    expect(screen.getByText("We'll never share your email.")).toBeInTheDocument()
  })

  it("applies error classes when error=true", () => {
    render(<Input error placeholder="Error input" />)
    const input = screen.getByPlaceholderText("Error input")
    expect(input).toHaveAttribute("aria-invalid", "true")
    expect(input).toHaveClass("border-red-400")
  })

  it("passes standard HTML attributes", () => {
    render(<Input type="password" disabled placeholder="Password" />)
    const input = screen.getByPlaceholderText("Password")
    expect(input).toHaveAttribute("type", "password")
    expect(input).toBeDisabled()
  })

  it("merges custom classNames", () => {
    render(<Input className="custom-class" placeholder="Custom" />)
    const input = screen.getByPlaceholderText("Custom")
    expect(input).toHaveClass("custom-class")
  })
})
