import Link from "next/link"

const GameCard = (props) => {
    return (
        <>
            <Link href={`/games/${props.slug}`}>
                <div className="container max-w-[260px] rounded shadow-lg m-5 relative">
                    <div className="">
                        <img className="aspect-[3/4]" src={props.cover}
                            alt={`Cover art for the game ${props.name}`}
                        />
                    </div>
                    <div className="absolute opacity-0 bottom-0 left-0
                    bg-slate-900 text-white bg-opacity-60 p-2 h-56 
                    hover:transition-opacity hover:opacity-100 ease-in-out overflow-hidden">
                        <div className="">
                            <h1 className="text-2xl font-bold text-ellipsis">{props.name}</h1>
                            <p className="text-ellipsis">{props.summary}</p>
                        </div>
                    </div>
                </div>
            </Link>
        </>
    )
}
export default GameCard