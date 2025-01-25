import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  test:{
    globals: true, // Allows the use of describe, expect, etc without importing them
    environment: 'jsdom', // Tests will run in a JSDOM environment
    setupFiles: './src/setupTest.js', // A file that will be executed before running tests
  }
})
