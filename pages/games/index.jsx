import GameCard from "../../components/games/gameCard"
import Head from "next/head"
import GameCarousel from "../../components/games/gameCarousel"


export async function getServerSideProps(context) {
    const games = await fetch("http://localhost:3000/api/games")
        .then((res => res.json()))
    return {
        props: {
            games
        }
    }
}

const Games = (props) => {
    const recentlyAdded = props.games.slice(0, props.games.length).reverse().slice(0, 6)
    return (
        <>
            <Head>
                <title>Games on MyGamesList</title>
            </Head>
            <div className="m-5 mx-12">
                <h1 className="font-bold text-4xl ml-5">Featured Games</h1>
                <GameCarousel games={props.games.slice(0, 3)} />
            </div>
            <div className="m-5 mx-12">
                <h1 className="font-bold text-4xl ml-5">Recently Added Games</h1>
                <div className="flex flex-wrap">
                    {recentlyAdded.map((game) =>
                        <GameCard
                            key={game.id}
                            name={game.name}
                            cover={game.cover}
                            slug={game.slug}
                            summary={game.summary} />)}
                </div>
            </div>
            <div className="m-5 mx-12">
                <h1 className="font-bold text-4xl ml-5">All Games</h1>
                <div className="flex flex-wrap">
                    {props.games.map((game) =>
                        <GameCard
                            key={game.id}
                            name={game.name}
                            cover={game.cover}
                            slug={game.slug}
                            summary={game.summary} />)}
                </div>
            </div>
        </>
    )
}

export default Games