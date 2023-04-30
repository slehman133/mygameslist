import Head from "next/head"
import { useState } from "react"
import Router from "next/router"

const SignUp = () => {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')
    return (<>
        <Head>
            <title>Create an account on MyGamesList</title>
        </Head>
        <div className="grid grid-cols-3">
            <div className="border-black border-2 col-start-2 
            text-center p-12 m-40 shadow-xl overflow-hidden mx-32 min-w-fit">
                <h1 className="font-bold m-10 text-2xl text-ellipsis resize-none">
                    Create An Account
                </h1>
                <form className="flex flex-col gap-10" onSubmit={async (e) => {
                    e.preventDefault()
                    if (password == confirmPassword) {
                        const userCheck = await fetch(`http://localhost:3000/api/users/${username}`)
                            .then(res => res.json())
                        if (userCheck == null) {
                            const newUser = await fetch(`http://localhost:3000/api/users/create/${username}/${password}`)
                                .then(res => res.json())
                            Router.push("/")
                        }
                    }
                    setUsername("")
                    setPassword("")
                    setConfirmPassword("")
                }}>
                    <input className="border-black border-2 p-2 rounded-xl" type="text" placeholder="Username"
                        value={username} onChange={(e) => setUsername(e.target.value)} />
                    <input className="border-black border-2 p-2 rounded-xl" type="password" placeholder="Password"
                        value={password} onChange={(e) => setPassword(e.target.value)} />
                    <input className="border-black border-2 p-2 rounded-xl" type="password" placeholder="Confirm Password"
                        value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} />
                    <input className="border-black border-2 p-2
                    hover:bg-black hover:text-white hover:cursor-pointer" type="submit" />
                </form>
            </div>
        </div>
    </>
    )
}

export default SignUp