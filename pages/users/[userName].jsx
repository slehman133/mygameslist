import Head from "next/head"
import Image from "next/image"
import Link from "next/link"
import { useState } from "react"
import GamesListEntry from "../../components/[userName]/gamesListEntry"

export async function getServerSideProps(context) {
    let user = await fetch(`http://localhost:3000/api/users/${context.params.userName}`)
        .then(res => res.json())


    if (!user) {
        return {
            notFound: true
        }
    }

    return { props: { user } }
}


const UserPage = (props) => {
    const [entries, setEntries] = useState(props.user.gamesList === null ? [] : props.user.gamesList.entries)
    return (
        <>
            <Head>
                <title>{`${props.user.username}'s profile on MyGamesList`}</title>
            </Head>
            <div className="flex">
                <div className="p-10 items-center text-center m-10">
                    <Image className="border border-black rounded-full mx-auto" src="/img/default_profile.jpg" width={200} height={200} />
                    <h1 className="font-bold text-7xl">{props.user.username}</h1>

                </div>
                <div className="m-20 p-2 basis-full">
                    <h3 className="font-semibold text-3xl">
                        {props.user.username}'s Games List
                    </h3>
                    <div className="flex flex-col min-h-screen px-24">
                        {entries.length > 0 && entries.map((e) =>
                            <GamesListEntry
                                slug={e.game.slug}
                                name={e.game.name}
                                cover={e.game.cover} />

                        )}
                        {entries.length === 0 &&
                            <>
                                <div className="text-center">
                                    <h1 className="font-semibold text-5xl">No entries in games list</h1>
                                </div>
                            </>}
                    </div>
                </div>
            </div>
        </>
    )
}

export default UserPage