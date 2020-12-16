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
      <h1 className='text-5xl text-center text-gray-700 dark:text-gray-100'>
        Next.js + Tailwind CSS 2.0
      </h1>
      <div>
        <Link href='/about'>
          <a className='hover:text-red-700 bg-gray-400'>About</a>
        </Link>
      </div>

      <Link href='/contact'>
        <a className='hover:text-red-700'>contact</a>
      </Link>
    </div>
  )
}
