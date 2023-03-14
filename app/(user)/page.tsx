import Image from 'next/image'

export default function Home() {
  return (
    <main className="grid main-height place-items-center">
      <div className="container flex items-center justify-between">
        <div className="flex-[2]">
          <span className="block mb-10 text-xl font-bold leading-8 lg:text-2xl">
            👋🏻 Hey, welcome
          </span>
          <h1 className="font-black text-6xl lg:text-7xl leading-[4.5rem] mb-6">
            News about the <span className="text-blue-500">React</span> world
          </h1>
          <p className="text-xl leading-9 lg:text-2xl">
            Get access to all the publications
          </p>
          <p className="text-xl leading-9 text-blue-500 lg:text-2xl">
            for $9,90 month
          </p>
          <button className="h-16 px-16 mt-10 text-xl font-bold text-gray-900 bg-yellow-500 rounded-full">
            Subscribe now
          </button>
        </div>
        <div className="flex-1 hidden lg:block">
          <Image src="/hero.png" alt="" width={344} height={520} />
        </div>
      </div>
    </main>
  )
}
