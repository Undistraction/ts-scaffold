// @vitest-environment jsdom
import { render, screen } from '@testing-library/react'
import Home from './page'

vi.mock(`@/components/ping-button`, () => ({
  PingButton: () => <button>Ping server</button>,
}))

describe(`Home`, () => {
  it(`should render the heading`, () => {
    render(<Home />)
    expect(screen.getByRole(`heading`)).toHaveTextContent(`Scaffold`)
  })

  it(`should render the ping button`, () => {
    render(<Home />)
    expect(screen.getByRole(`button`, { name: `Ping server` })).toBeVisible()
  })
})
