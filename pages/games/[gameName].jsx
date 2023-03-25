import Head from "next/head";
import Image from "next/image";
import { getGameInfo } from "../../lib/game-info";
import UserControls from "../../components/[gameName]/user-controls";
import { useState } from "react";


export async function getServerSideProps(context) {
    const slug = String(context.params.gameName).toLowerCase().replaceAll(" ", "-")
    const game = await getGameInfo(slug)

    return {
        props: {
            cover: `https://${game.cover}`,
            name: game.name,
            summary: game.summary,
        },
    };
}

const GamePage = (props) => {

    const [reviews, setReviews] = useState([])

    return (
        <>
            <Head>
                <title>{props.name}</title>
            </Head>
            <div className="flex ml-[15%]">
                <div className="py-20 px-auto m-0 items-center mt-20">
                    <Image
                        className="aspect-[3/4] min-w-[100] mx-auto"
                        src={props.cover}
                        alt={`Art for the game ${props.name}`}
                        width={215}
                        height={304}
                        priority={true} />
                    <UserControls />
                </div>
                <div className=" mx-20 w-[50%] py-20">
                    <div className="">
                        <h1 className="text-5xl m-10 ml-0 font-bold shadow-lg">
                            {props.name}
                        </h1>
                    </div>
                    <p className="text-lg">{props.summary}</p>
                    <div className="my-20">
                        <h3 className="text-3xl font-semibold">User Reviews</h3>
                        {reviews.length == 0 ?
                            <h4 className="text-center m-20 text-xl">
                                No reviews for this game yet :(
                            </h4>
                            : reviews.map((e) => <p>{e}</p>)}
                    </div>
                </div>
            </div>
        </>
    );
}

export default GamePage