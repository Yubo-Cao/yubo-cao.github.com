import Link from 'next/link'
import Nav from '../components/Nav'

export default function Home() {
  return (
    <div>
      <Nav />
      Hello World. <Link href="/about">About</Link>
    </div>
  )
}
