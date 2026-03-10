import { buttonVariants } from '@/components/ui/button'
import Link from 'next/link'

export default function NotFound() {
  return (
    <main className="flex min-h-[50vh] flex-col items-center justify-center gap-4 p-8 text-center">
      <h1 className="text-2xl font-bold">Page not found</h1>
      <p className="text-muted-foreground max-w-md">
        The page you&apos;re looking for doesn&apos;t exist or has been moved.
      </p>
      <Link href="/" className={buttonVariants({ variant: `outline` })}>
        Go home
      </Link>
    </main>
  )
}
