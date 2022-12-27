import Link from 'next/link'
import Header from '../components/Header'
import Nav from '../components/Nav'

export default function Home() {
  return (
    <>
      <div>
        <Header active="Home"/>
        Hello World. <Link href="/about">About</Link>
      </div>
    </>
  )
}
