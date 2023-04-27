import Head from 'next/head'
import Link from 'next/link'
import localFont from '@next/font/local'

const blippo = localFont({
  src: [{ path: '../asset/Blippo-Black-Regular/Blippo-Black-Regular.otf' }],
  variable: '--font-blippo-black-regular'
})

const Home = () => {
  return (
    <>
      <Head>
        <title>Welcome to MyGamesList</title>
      </Head>
      <div className='grid grid-cols-8 p-10 bg-none home-container'>
        <div className={`col-start-2 col-span-3 ${blippo.className}`}>
          <div className='bg-black min-w-fit'>
            <h1 className='text-8xl font-bold text-white p-2'>WELCOME</h1>
          </div>
          <div>
            <h1 className='text-8xl font-bold'>TO</h1>
          </div>
          <div className='bg-black min-w-fit'>
            <h1 className={`text-8xl font-bold text-white p-4`}>MyGamesList</h1>
          </div>
          <Link
            className='font-bold text-3xl '
            href="/games">
            <div className='border-black border-2 text-center m-8 
              p-8 overflow-hidden font-sans
              hover:cursor-pointer hover:bg-black hover:text-white'>
              View Our Games
            </div>
          </Link>
        </div>
        <div className='col-start-6'>
          <h3 className='text-7xl font-bold bg-white min-w-fit p-2'>A Place To Track The Games You Love</h3>
        </div>
      </div>
      <div className='p-16'>
        <h1 className='text-6xl font-bold'>What is MyGamesList?</h1>
        <div className='grid grid-cols-2'>
          <div className='p-16 font-semibold text-2xl'>
            <p>MyGamesList is a platform to discover, track, and share your favorite games with your friends.</p>
            <p>Show off the games you've played and loved, or discover new ones.</p>
            <p>Create an account to start.</p>
            <div className='flex p-10 gap-16'>
              <Link href="/signup">
                <div className=' border-black border-2 p-10 w-72 text-center 
            hover:bg-black hover:text-white hover:cursor-pointer'>
                  <h1>Create An Account</h1>
                </div>
              </Link>
              <Link href="/login">
                <div className=' border-black border-2 p-10 w-72 text-center  
            hover:bg-black hover:text-white hover:cursor-pointer'>
                  <h1>Log In</h1>
                </div>
              </Link>
            </div>
          </div>
          <div>
            <img
              src="/img/game_covers.png" alt="A selection of games on MyGamesList" />
          </div>
        </div>
      </div >
    </>
  )
}

export default Home