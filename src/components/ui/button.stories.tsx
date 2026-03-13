import type { Meta, StoryObj } from '@storybook/react'

import { Button } from './button'

const meta = {
  title: 'Components/Button',
  component: Button,
  tags: ['autodocs'],
} satisfies Meta<typeof Button>

export default meta

type Story = StoryObj<typeof meta>

/** Interactive playground — use the controls panel to explore every prop. */
export const Playground: Story = {
  args: {
    children: 'Button',
  },
  argTypes: {
    variant: {
      control: 'select',
      options: [
        'default',
        'outline',
        'secondary',
        'ghost',
        'destructive',
        'link',
      ],
    },
    size: {
      control: 'select',
      options: [
        'default',
        'xs',
        'sm',
        'lg',
        'icon',
        'icon-xs',
        'icon-sm',
        'icon-lg',
      ],
    },
    disabled: { control: 'boolean' },
  },
}

// ---------------------------------------------------------------------------
// Variants
// ---------------------------------------------------------------------------

const variants = [
  'default',
  'outline',
  'secondary',
  'ghost',
  'destructive',
  'link',
] as const

/** Every variant with its default and disabled states. */
export const Variants: Story = {
  parameters: { controls: { disable: true } },
  render: () => (
    <>
      {/* Stacked layout (mobile) */}
      <div className="flex flex-col gap-4 md:hidden">
        {variants.map((v) => (
          <div key={v} className="flex flex-col items-start gap-2">
            <span className="text-muted-foreground text-xs font-medium">
              {v}
            </span>
            <div className="flex items-center gap-3">
              <Button variant={v}>Click me</Button>
              <Button variant={v} disabled>
                Click me
              </Button>
            </div>
          </div>
        ))}
      </div>

      {/* Grid layout (md+) */}
      <div className="hidden md:grid md:grid-cols-[4rem_repeat(6,6rem)] md:items-center md:justify-items-center md:gap-x-4 md:gap-y-3">
        <span />
        {variants.map((v) => (
          <span key={v} className="text-muted-foreground text-xs font-medium">
            {v}
          </span>
        ))}

        <span className="text-muted-foreground justify-self-end text-xs font-medium">
          default
        </span>
        {variants.map((v) => (
          <Button key={v} variant={v}>
            Click me
          </Button>
        ))}

        <span className="text-muted-foreground justify-self-end text-xs font-medium">
          disabled
        </span>
        {variants.map((v) => (
          <Button key={v} variant={v} disabled>
            Click me
          </Button>
        ))}
      </div>
    </>
  ),
}

// ---------------------------------------------------------------------------
// Sizes
// ---------------------------------------------------------------------------

const textSizes = ['xs', 'sm', 'default', 'lg'] as const
const iconSizes = ['icon-xs', 'icon-sm', 'icon', 'icon-lg'] as const

const PlaceholderIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth={2}
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M5 12h14" />
    <path d="M12 5v14" />
  </svg>
)

/** Text sizes from xs to lg. */
export const Sizes: Story = {
  parameters: { controls: { disable: true } },
  render: () => (
    <>
      <div className="flex flex-col gap-4 md:hidden">
        {textSizes.map((s) => (
          <div key={s} className="flex flex-col items-start gap-2">
            <span className="text-muted-foreground text-xs font-medium">
              {s}
            </span>
            <div className="flex items-center gap-3">
              <Button size={s}>Click me</Button>
              <Button size={s} disabled>
                Click me
              </Button>
            </div>
          </div>
        ))}
      </div>

      <div className="hidden md:grid md:grid-cols-[4rem_repeat(4,6rem)] md:items-center md:justify-items-center md:gap-x-4 md:gap-y-3">
        <span />
        {textSizes.map((s) => (
          <span key={s} className="text-muted-foreground text-xs font-medium">
            {s}
          </span>
        ))}

        <span className="text-muted-foreground justify-self-end text-xs font-medium">
          default
        </span>
        {textSizes.map((s) => (
          <Button key={s} size={s}>
            Click me
          </Button>
        ))}

        <span className="text-muted-foreground justify-self-end text-xs font-medium">
          disabled
        </span>
        {textSizes.map((s) => (
          <Button key={s} size={s} disabled>
            Click me
          </Button>
        ))}
      </div>
    </>
  ),
}

/** Icon-only sizes with a placeholder icon. */
export const IconSizes: Story = {
  parameters: { controls: { disable: true } },
  render: () => (
    <>
      <div className="flex flex-col gap-4 md:hidden">
        {iconSizes.map((s) => (
          <div key={s} className="flex flex-col items-start gap-2">
            <span className="text-muted-foreground text-xs font-medium">
              {s}
            </span>
            <div className="flex items-center gap-3">
              <Button size={s} aria-label="Add item">
                <PlaceholderIcon />
              </Button>
              <Button size={s} aria-label="Add item" disabled>
                <PlaceholderIcon />
              </Button>
            </div>
          </div>
        ))}
      </div>

      <div className="hidden md:grid md:grid-cols-[4rem_repeat(4,4rem)] md:items-center md:justify-items-center md:gap-x-4 md:gap-y-3">
        <span />
        {iconSizes.map((s) => (
          <span key={s} className="text-muted-foreground text-xs font-medium">
            {s}
          </span>
        ))}

        <span className="text-muted-foreground justify-self-end text-xs font-medium">
          default
        </span>
        {iconSizes.map((s) => (
          <Button key={s} size={s} aria-label="Add item">
            <PlaceholderIcon />
          </Button>
        ))}

        <span className="text-muted-foreground justify-self-end text-xs font-medium">
          disabled
        </span>
        {iconSizes.map((s) => (
          <Button key={s} size={s} aria-label="Add item" disabled>
            <PlaceholderIcon />
          </Button>
        ))}
      </div>
    </>
  ),
}
