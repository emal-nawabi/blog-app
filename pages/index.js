import Head from 'next/head'
import Link from 'next/link'
import Router from 'next/router'

export default function Home() {
  return (
    <div className='card-bodys'>
      <div>
        <Link href='/about'>
          <a>About</a>
        </Link>
      </div>

      <Link href='/contact'>
        <a>contact</a>
      </Link>
    </div>
  )
}
