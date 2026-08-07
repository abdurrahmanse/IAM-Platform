import { defineConfig } from "vitest/config"

export default defineConfig({
  test: {
    environment: "jsdom",
    globals: true,
    setupFiles: ["./setup-tests.ts"],
    include: ["**/*.test.{ts,tsx}"],
    exclude: ["node_modules", "dist", ".turbo"],
  },
})
