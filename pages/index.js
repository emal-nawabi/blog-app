import Head from 'next/head'
import Link from 'next/link'
import Router from 'next/router'

export default function Home() {
  return (
    <div className='container'>
      <Head>
        <link rel='icon' href='/favicon.ico' />
        <title>My Blog App</title>
      </Head>
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
