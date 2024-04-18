import Image from 'next/image'
import Link from 'next/link'

import { Shell } from '@/components/shell'
import { Button } from '@/components/ui/button'

export default function Home() {
  return (
    <Shell>
      <div className="grid grid-cols-2 gap-40 pt-28">
        <div>
          <span className="text-2xl font-bold">👏 Hey, welcome</span>
          <h1 className="mb-6 mt-10 text-7xl font-black">
            News about the <strong className="text-cyan-400">React</strong>{' '}
            world
          </h1>
          <p className="text-2xl">
            Get access to all the publications <br />
            <span className="font-bold text-cyan-400">for $9,90 month</span>
          </p>
          <Button
            asChild
            className="mt-10 h-16 w-64 rounded-full text-xl font-bold"
          >
            <Link href="#">Subscribe now</Link>
          </Button>
        </div>
        <Image
          src="/images/mulher.svg"
          alt="Desenho de uma mulher usando um notebook"
          width={334}
          height={520}
          className="object-cover"
          priority
        />
      </div>
    </Shell>
  )
}
