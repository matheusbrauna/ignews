import type { NextPage } from 'next'
import Image from 'next/future/image'

const Home: NextPage = () => {
  return (
    <main className="">
      <div className="container flex flex-col items-center justify-between h-screen lg:flex-row">
        <p>Hello World</p>

        <div className="relative w-[20.875rem] h-[32.5rem]">
          <Image src="/mulher.png" fill alt="Mulher" />
        </div>
      </div>
    </main>
  )
}

export default Home
