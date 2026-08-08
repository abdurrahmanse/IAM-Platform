import { render, screen } from "@testing-library/react"
import { describe, it, expect } from "vitest"
import { Button } from "./Button"

describe("Button component", () => {
  it("renders with default variant (solid indigo)", () => {
    render(<Button>Click me</Button>)
    const btn = screen.getByRole("button", { name: /click me/i })
    expect(btn).toBeInTheDocument()
    expect(btn).toHaveClass("bg-indigo-600")
    expect(btn).toHaveClass("text-white")
  })

  it("renders secondary variant with border", () => {
    render(<Button variant="secondary">Secondary</Button>)
    const btn = screen.getByRole("button", { name: /secondary/i })
    expect(btn).toHaveClass("bg-white")
    expect(btn).toHaveClass("border")
  })

  it("renders destructive variant", () => {
    render(<Button variant="destructive">Delete</Button>)
    const btn = screen.getByRole("button", { name: /delete/i })
    expect(btn).toHaveClass("bg-red-600")
  })

  it("renders sm size", () => {
    render(<Button size="sm">Small</Button>)
    const btn = screen.getByRole("button", { name: /small/i })
    expect(btn).toHaveClass("h-9")
    expect(btn).toHaveClass("rounded-lg")
  })

  it("shows loading spinner and disables button when loading=true", () => {
    render(<Button loading>Submit</Button>)
    const btn = screen.getByRole("button")
    expect(btn).toBeDisabled()
    expect(btn).toHaveAttribute("aria-busy", "true")
    expect(screen.getByText("Loading…")).toBeInTheDocument()
  })

  it("renders as child element (asChild)", () => {
    render(
      <Button asChild>
        <a href="/test">Link button</a>
      </Button>
    )
    const link = screen.getByRole("link", { name: /link button/i })
    expect(link).toBeInTheDocument()
    expect(link).toHaveAttribute("href", "/test")
    expect(link).toHaveClass("bg-indigo-600")
  })
})
