import CarouselItem from "./carouselItem"
import { useEffect, useState } from "react"

const GameCarousel = (props) => {
    const items = props.games.map(e =>
        <CarouselItem
            slug={e.slug}
            name={e.name}
            summary={e.summary}
            cover={e.cover} />
    )

    const [i, setI] = useState(0)


    return (
        <>
            <div>
                <div className="flex items-center justify-evenly p-16 align-middle 
                select-none grow-0 shrink-0 min-h-96 max-h-96">
                    {/* left button */}
                    <div className="text-9xl hover:cursor-pointer text-center"
                        onClick={() => {
                            (i == 0) ? setI(items.length - 1) : setI(i - 1)
                        }}
                    >
                        <h1 className="">
                            &#x2039;
                        </h1>
                    </div>
                    {items[i]}
                    {/* right button */}
                    <div className="text-9xl hover:cursor-pointer"
                        onClick={() => {
                            (i == 2) ? setI(0) : setI(i + 1)
                        }}>
                        <h1>
                            &#x203A;
                        </h1>
                    </div>
                </div>
            </div>
        </>
    )
}

export default GameCarousel