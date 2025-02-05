import { defineConfig } from 'vitest/config'
import react from '@vitejs/plugin-react'
import tsconfigPaths from 'vite-tsconfig-paths'
 
export default defineConfig({
  plugins: [tsconfigPaths(), react()],
  test: {
    globals: true,
    environment: 'jsdom',
    coverage: {
      thresholds: {
        lines: 95,
        branches: 95,
        functions: 95,
        statements: 95
      },
      reporter: ['text', 'json-summary', 'json'],
      reportOnFailure: true,
    }
  },
})