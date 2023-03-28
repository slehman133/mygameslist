import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Link from 'next/link'


export default function Home() {
  return (
    <>
      <Head>
        <title>Welcome to MyGamesList</title>
      </Head>
      <div className='grid grid-cols-8 p-10 bg-none home-container'>
        <div className='col-start-2 col-span-2'>
          <div className='bg-black min-w-fit'>
            <h1 className='text-8xl font-bold text-white'>WELCOME</h1>
          </div>
          <div>
            <h1 className='text-8xl font-bold'>TO</h1>
          </div>
          <div className='bg-black min-w-fit'>
            <h1 className='text-7xl font-bold text-white'>MyGamesList</h1>
          </div>
          <div className='border-black border-2 text-center m-8 
          p-8 overflow-hidden
          hover:cursor-pointer hover:bg-black hover:text-white
          '>
            <Link
              className='font-bold text-4xl'
              href="/games"> View Our Games</Link>
          </div>
        </div>
        <div className='col-start-6'>
          <h3 className='text-7xl font-bold bg-white min-w-fit'>A Place To Track The Games You Love</h3>
        </div>
      </div>
      <div className='p-16'>
        <h1 className='text-6xl font-bold'>What is MyGamesList?</h1>
        <div className='grid grid-cols-2'>
          <div className='p-16 font-semibold text-2xl'>
            <p>MyGamesList is a platform to track and share your favorite games with your friends.</p>
            <p>Show off the games you've played and loved.</p>
            <div className='flex p-10 gap-20'>
              <Link href="/login">
                <div className=' border-black border-2 p-10 w-30 text-center 
            hover:bg-black hover:text-white hover:cursor-pointer'>
                  <h1>Create an account</h1>
                </div>
              </Link>
              <Link href="/login">
                <div className=' border-black border-2 p-10 w-64 text-center 
            hover:bg-black hover:text-white hover:cursor-pointer'>
                  <h1>Log In</h1>
                </div>
              </Link>
            </div>
          </div>
          <div>
            <img src="/img/game_covers.png" alt="" />
          </div>
        </div>
      </div >
    </>
  )
}
