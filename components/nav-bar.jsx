import Link from 'next/link'
import { signOut, useSession } from 'next-auth/react'
import { GetServerSideProps } from 'next'


const NavBar = () => {
    const { data, status } = useSession()
    return (
        <nav className='bg-black text-white'>
            {/* logo */}
            <div className="flex justify-between p-5 items-center">
                <div>
                    <Link className="font-bold"
                        href="/">
                        <img className='h-20'
                            src="/img/mygameslist-logo.png"
                            alt="Logo for MyGamesList" />
                    </Link>
                </div>
                {/* nav items */}
                <div className="flex items-center space-x-5 text-xl font-semibold">
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
                        {status === 'authenticated' ?
                            <>
                                <div className=''>
                                    <Link href={`/users/${data.user.username}`} >
                                        My Profile
                                    </Link>
                                </div>
                                <div className='hover:cursor-pointer'>
                                    <div onClick={signOut} >
                                        Sign Out
                                    </div>
                                </div>
                            </>
                            :
                            <>
                                <div className=''>
                                    <Link href="/api/auth/signin">
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
        </nav >

    )
}

export default NavBar