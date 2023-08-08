import Link from "next/link"

const GamesListEntry = (props) => {
    return (
        <>
            <Link href={`/games/${props.slug}`}>
                <div className="flex flex-row justify-between h-24 my-2 text-center items-center rounded-r-full
                                        transform transition duration-100">
                    <div className="flex flex-row items-center space-x-10">
                        <img className="h-24" src={props.cover} />
                        <p className="text-3xl font-semibold">{props.name}</p>
                    </div>
                    <div className="bg-blue-900 h-24 rounded-r-full max-w-[7rem] min-w-[7rem]">
                        <p className="text-white font-bold text-5xl p-5">{10}</p>
                    </div>
                </div>
            </Link>
        </>
    )
}
export default GamesListEntry