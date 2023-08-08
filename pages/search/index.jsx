import { useState } from "react"
import GameCard from "../../components/games/gameCard"
import Link from "next/link"
import Head from "next/head"
import UserResult from "../../components/search/userResult"

const Search = (props) => {
    // const [searchRes, setSearchRes] = useState([])
    const [gameRes, setGameRes] = useState([])
    const [userRes, setUserRes] = useState([])
    const [hasSearched, setHasSearched] = useState(false)
    return (
        <>
            <Head>
                <title>Search MyGamesList</title>
            </Head>
            <div className="p-5 m-5 min-h-[75vh]">
                <div className="py-5 m-5">
                    <form
                        action=""
                        onSubmit={async (e) => {
                            e.preventDefault()
                            const query = document.querySelector("[name=search]").value
                            const { games, users } = await fetch(`http://localhost:3000/api/search/${query}`)
                                .then(res => res.json())
                            document.querySelector("[name=search]").value = ""
                            setGameRes(games)
                            setUserRes(users)
                            setHasSearched(true)
                        }}>
                        <div className="grid grid-cols-7">
                            <div className="align-center col-start-3 col-span-3 min-w-fit">
                                <input
                                    className="text-3xl p-2 m-0 border-2 rounded-l-full pr-80"
                                    type="text"
                                    name="search"
                                    placeholder="Search for a game/user..."
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
                    {(gameRes.length > 0 || userRes.length > 0) &&
                        <>
                            <h1 className="font-bold text-4xl m-5">Games</h1>
                            <h1 className="font-bold text-3xl m-5">Results found ({gameRes.length})</h1>
                            <div className="flex flex-row flex-wrap">
                                {gameRes.map((game) =>
                                    <GameCard
                                        cover={game.cover}
                                        name={game.name}
                                        slug={game.slug}
                                        summary={game.summary}
                                        id={game.id} />)}
                            </div>
                            <h1 className="font-bold text-4xl m-5">Users</h1>
                            <h1 className="font-bold text-3xl m-5">Results found ({userRes.length})</h1>
                            <div className="flex flex-row flex-wrap">
                                {userRes.map((user) =>
                                    <UserResult id={user.id} username={user.username} />
                                )}
                            </div>
                        </>
                    }
                    {((hasSearched == true) && (gameRes.length == 0 && userRes.length == 0)) &&
                        <h1 className="m-5 font-bold text-3xl text-center">No results found</h1>}
                </div>
            </div >
        </>
    )
}

export default Search