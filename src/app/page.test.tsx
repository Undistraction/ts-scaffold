// @vitest-environment jsdom
import { render, screen } from '@testing-library/react'
import Home from './page'

describe(`Home`, () => {
  it(`should render the heading`, () => {
    render(<Home />)
    expect(screen.getByRole(`heading`)).toHaveTextContent(`Scaffold`)
  })
})
