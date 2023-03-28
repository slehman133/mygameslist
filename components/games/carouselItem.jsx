import Link from "next/link"


function CarouselItem(props) {
    const { slug, name, summary, cover } = props
    return (
        <>
            <div>
                <Link href={`/games/${slug}`}>
                    <div className="grid grid-col-3 max-w-4xl min-w-4xl
                    max-h-96 min-h-96 shadow-2xl">
                        <div className="col-start-1 col-span-2 p-5">
                            <h1 className="text-4xl font-bold py-2">{name}</h1>
                            <p className="text-2xl text-ellipsis max-h-48 overflow-hidden">{summary}</p>
                        </div>
                        <div className="col-start-3 max-w-xl  min-w-xl">
                            <img
                                src={cover}
                                alt={`Art for the game ${name}`}
                            />
                        </div>
                    </div>
                </Link>
            </div>
        </>
    )
}

export default CarouselItem