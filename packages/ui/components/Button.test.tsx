import * as React from "react"
import { render, screen } from "@testing-library/react"
import { describe, it, expect, vi } from "vitest"
import { Button } from "./Button"

describe("Button component", () => {
  it("renders correctly with default props", () => {
    render(<Button>Click me</Button>)
    const button = screen.getByRole("button", { name: /click me/i })
    expect(button).toBeInTheDocument()
    expect(button).toHaveClass("bg-brand-600") // default variant
    expect(button).toHaveClass("h-9") // default size
  })

  it("applies the destructive variant classes", () => {
    render(<Button variant="destructive">Delete</Button>)
    const button = screen.getByRole("button", { name: /delete/i })
    expect(button).toHaveClass("bg-red-500")
  })

  it("applies the sm size classes", () => {
    render(<Button size="sm">Small</Button>)
    const button = screen.getByRole("button", { name: /small/i })
    expect(button).toHaveClass("h-8")
  })

  it("passes standard HTML attributes", () => {
    render(<Button disabled data-testid="custom-btn">Disabled</Button>)
    const button = screen.getByTestId("custom-btn")
    expect(button).toBeDisabled()
  })

  it("renders as a different element when asChild is true", () => {
    render(
      <Button asChild>
        <a href="/test">Link Button</a>
      </Button>
    )
    const link = screen.getByRole("link", { name: /link button/i })
    expect(link).toBeInTheDocument()
    expect(link).toHaveAttribute("href", "/test")
    expect(link).toHaveClass("bg-brand-600") // button classes should be merged onto the child
  })
})
