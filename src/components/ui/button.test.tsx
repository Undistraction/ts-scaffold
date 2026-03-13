// @vitest-environment jsdom
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'

import { Button } from './button'

describe(`Button`, () => {
  it(`calls onClick handler when clicked`, async () => {
    const onClick = vi.fn()
    render(<Button onClick={onClick}>Click me</Button>)
    await userEvent.click(screen.getByRole(`button`))
    expect(onClick).toHaveBeenCalledOnce()
  })

  it(`does not call onClick handler when disabled`, async () => {
    const onClick = vi.fn()
    render(
      <Button onClick={onClick} disabled>
        Click me
      </Button>,
    )
    await userEvent.click(screen.getByRole(`button`))
    expect(onClick).not.toHaveBeenCalled()
  })
})
