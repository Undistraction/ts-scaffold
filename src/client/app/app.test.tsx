// @vitest-environment jsdom
import { render, screen } from '@testing-library/react'
import { App } from './app'

describe(`App`, () => {
  it(`should render the heading`, () => {
    render(<App />)
    expect(screen.getByRole(`heading`)).toHaveTextContent(`Scaffold`)
  })
})
