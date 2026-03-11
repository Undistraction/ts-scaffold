'use client'

import { Button } from '@/components/ui/button'
import { Show, SignInButton, SignUpButton, UserButton } from '@clerk/nextjs'

const Auth = () => {
  return (
    <nav aria-label="Authentication" className="flex items-center gap-2">
      <Show when="signed-out">
        <SignInButton>
          <Button variant="ghost">Sign in</Button>
        </SignInButton>
        <SignUpButton>
          <Button>Sign up</Button>
        </SignUpButton>
      </Show>
      <Show when="signed-in">
        <UserButton />
      </Show>
    </nav>
  )
}

export { Auth }
