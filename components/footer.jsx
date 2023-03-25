const Footer = () => {
    return (
        <>
            <footer>
                <div className="bg-black flex text-white p-10 items-center">
                    <div className="text-center">
                        <img width={200} src="/img/mygameslist-logo.png" alt="" />
                        <div className="">
                            <a href="https://www.igdb.com/">Powered by IGDB</a>
                        </div>
                        <div className="">
                            <a href="https://github.com/slehman133/mygameslist">Github</a>
                            <p> Samuel Lehman &#169; 2023</p>
                        </div>
                    </div>
                </div>
            </footer >
        </>
    )
}

export default Footer