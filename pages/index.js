import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'


export default function Home() {
  return (
    <>
      <Head>
        <title>Welcome to MyGamesList</title>
      </Head>
      <div>
        <h1 className='text-5xl font-bold'>WELCOME TO </h1>
      </div>
      <img src="/img/mygameslist-logo.png" alt=""
        height={400} />
    </>
  )
}
