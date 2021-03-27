import React from 'react'
import { render, screen } from '@testing-library/react'
import App from './App'

test('render loading', () => {
  render(<App />)
  expect(screen.getByRole('status')).toHaveTextContent(/loading/i)
})