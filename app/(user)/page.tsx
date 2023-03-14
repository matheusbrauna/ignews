export default function Home() {
  return (
    <main className="grid main-height place-items-center">
      <div className="container">
        <span className="block mb-10 text-xl font-bold leading-8">
          👋🏻 Hey, welcome
        </span>
        <h1 className="font-black text-6xl leading-[4.5rem] mb-6">
          News about the <span className="text-blue-500">React</span> world
        </h1>
        <p className="text-xl leading-9">Get access to all the publications</p>
        <p className="text-xl leading-9 text-blue-500">for $9,90 month</p>
        <button className="h-16 px-16 mt-10 text-xl font-bold text-gray-900 bg-yellow-500 rounded-full">
          Subscribe now
        </button>
      </div>
    </main>
  )
}
