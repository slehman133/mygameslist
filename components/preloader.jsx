const Preloader = () => {
    return (
        <div className="h-screen w-screen text-center grid grid-cols-3 grid-rows-3">
            <div className="mx-auto col-start-2 row-start-2">
                <img src="/img/loading.gif" alt="" />
            </div>
        </div>
    )
}

export default Preloader