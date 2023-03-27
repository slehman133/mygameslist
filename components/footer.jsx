import Link from "next/link"

const Footer = () => {
    return (
        <>
            <footer>
                <div className="bg-black text-white p-10 grid grid-cols-3 align-middle gap-10">
                    <div className="col-start-2 flex flex-col text-center items-center place">
                        <Link href="/">
                            <img width={200} src="/img/mygameslist-logo.png" alt="" />
                        </Link>
                        <a href="https://github.com/slehman133/mygameslist">GitHub</a>
                        <a href="https://www.igdb.com/">Powered by IGDB</a>
                        <p> Samuel Lehman &#169; 2023</p>
                    </div>
                </div>
            </footer >
        </>
    )
}

export default Footer