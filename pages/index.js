import Head from 'next/head'
import Link from 'next/link'
import Router from 'next/router'

export default function Home() {
  return (
    <div className='card-bodys'>
      <div>
        <Link href='/about'>about</Link>
      </div>

      <div>
        <Link href='/contact'>contact</Link>
      </div>
    </div>
  )
}
