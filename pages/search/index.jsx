import { useState } from "react"
import GameCard from "../../components/games/gameCard"

const Search = (props) => {
    const [searchRes, setSearchRes] = useState([])
    const [hasSearched, setHasSearched] = useState(false)
    return (
        <>
            <div className="p-5 m-5 min-h-[75vh]">
                {/* <h1 className="text-5xl font-bold m-5 mt-0">Search</h1> */}
                <div className="py-5 m-5">
                    <form
                        action=""
                        onSubmit={async (e) => {
                            e.preventDefault()
                            const query = document.querySelector("[name=search]").value
                            const res = await fetch(`http://localhost:3000/api/search/${query}`)
                                .then(res => res.json())
                            document.querySelector("[name=search]").value = ""
                            setSearchRes(res)
                            setHasSearched(true)
                        }}>
                        <div className="grid grid-cols-7">
                            <div className="align-center col-start-3 col-span-3 min-w-fit">
                                <input
                                    className="text-3xl p-2 m-0 border-2 rounded-l-full pr-80"
                                    type="text"
                                    name="search"
                                    placeholder="Search for a Game/User"
                                />
                                <input
                                    className="text-3xl bg-black rounded-r-full p-2 hover:cursor-pointer
                                hover:bg-slate-600"
                                    type="submit"
                                    value="&#128270;" />
                            </div>
                        </div>
                    </form>
                </div>
                <div>
                    {searchRes.length > 0 &&
                        <>
                            <h1 className="font-bold text-4xl m-5">Games</h1>
                            <h1 className="font-bold text-3xl m-5">Results found ({searchRes.length})</h1>
                            <div className="flex flex-row flex-wrap">
                                {searchRes.map((game) =>
                                    <GameCard
                                        cover={game.cover}
                                        name={game.name}
                                        slug={game.slug}
                                        summary={game.summary}
                                        id={game.id} />)}
                            </div>
                            <h1 className="font-bold text-4xl m-5">Users</h1>
                        </>
                    }
                    {((hasSearched == true) && searchRes.length == 0) &&
                        <h1 className="m-5 font-bold text-3xl">No results found</h1>}
                </div>
            </div >
        </>
    )
}

export default Search