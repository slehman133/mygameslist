const Login = () => {
    return (
        <div className="grid grid-cols-9">
            <div className="col-span-3"></div>
            <div className="border-black border-2 col-span-3 text-center">
                <h1>Login</h1>
                <form className="flex flex-col" action="">
                    <input type="text" placeholder="Username" />
                    <input type="password" placeholder="Password" />
                </form>
            </div>
        </div>
    )
}

export default Login