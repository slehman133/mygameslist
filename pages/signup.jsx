import { useState } from "react"

const SignUp = () => {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')
    return (
        <div className="grid grid-cols-3">
            <div className="border-black border-2 col-start-2 
            text-center p-12 m-40 shadow-xl overflow-hidden max-w-fit">
                <h1 className="font-bold m-10 text-2xl text-ellipsis resize-none">{
                    (username === '') ? "SignUp" : `Hello, ${username}`
                }</h1>
                <form className="flex flex-col gap-10" onSubmit={(e) => {
                    e.preventDefault()
                    console.log()
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
    )
}

export default SignUp