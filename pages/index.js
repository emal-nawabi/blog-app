import Head from 'next/head'
import Link from 'next/link'
import Router from 'next/router'

export default function Home() {
  return (
    <div>
      <div>
        <Link href='/about'>
          <a className='hover:text-red-700'>About</a>
        </Link>
      </div>

      <Link href='/contact'>
        <a className='hover:text-red-700'>contact</a>
      </Link>
    </div>
  )
}
