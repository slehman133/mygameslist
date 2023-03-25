import Link from 'next/link'
import styles from './nav-bar.module.css'
import { useState } from 'react'


const NavBar = () => {
    const [isLoggedIn, setLoggedIn] = useState(false)
    return (
        <nav className='bg-black text-white'>
            {/* logo */}
            <div className="flex justify-between p-5 items-center">
                <div>
                    <Link className="font-bold"
                        href="/">
                        {/* <h1>MyGamesList</h1> */}
                        <img className='h-20'
                            src="/img/mygameslist-logo.png"
                            alt="Logo for MyGamesList" />
                    </Link>
                </div>
                {/* nav items */}
                <div className="flex items-center space-x-5 text-2xl font-semibold">
                    <div className='invisible flex items-center space-x-5 md:visible'>
                        <div>
                            <Link
                                href="/">
                                Home
                            </Link>
                        </div>
                        <div>
                            <Link href="/search">
                                Search
                            </Link>
                        </div>
                        <div>
                            <Link href="/games">
                                Games
                            </Link>
                        </div>
                        {isLoggedIn ?
                            <>
                                <div className=''>
                                    <Link href="/users/TestUser">
                                        My Profile
                                    </Link>
                                </div>
                            </>
                            :
                            <>
                                <div className=''>
                                    <Link href="/login">
                                        Login
                                    </Link>
                                </div>
                                <div className=''>
                                    <Link href="/users/TestUser">
                                        Sign Up
                                    </Link>
                                </div>
                            </>
                        }
                    </div>
                    {/* nav burger menu*/}
                    <div>
                        <button className='md:invisible text-3xl'>&#9776;</button>
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default NavBar