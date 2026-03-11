import { PingButton } from '@/components/ping-button'

const Home = () => {
  return (
    <main>
      <header className="flex flex-col items-center gap-4 border-b border-neutral-500 p-4">
        <h1>Scaffold</h1>
      </header>
      <section className="flex flex-col items-center gap-4 p-4">
        <PingButton />
      </section>
    </main>
  )
}

export default Home
