import { PingButton } from '@/components/ping-button'

const Home = () => {
  return (
    <main>
      <header className="flex flex-col items-center gap-4 border-b border-neutral-500 p-4">
        <h1>Scaffold</h1>
        <PingButton />
      </header>
    </main>
  )
}

export default Home
