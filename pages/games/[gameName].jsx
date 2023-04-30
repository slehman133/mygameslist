import Head from "next/head";
import Image from "next/image";
import { getGameInfo } from "../../lib/game-info";
import UserControls from "../../components/[gameName]/user-controls";
import { useState } from "react";
import UserReview from "../../components/[gameName]/userReview";
import { useSession } from "next-auth/react";


export async function getServerSideProps(context) {
    const slug = String(context.params.gameName).toLowerCase().replaceAll(" ", "-")
    const game = await getGameInfo(slug)

    if (game == null) {
        return {
            notFound: true
        }
    }

    const reviews = await fetch(`http://localhost:3000/api/games/reviews/${game.id}`)
        .then(res => res.json())

    return {
        props: {
            cover: `https://${game.cover}`,
            name: game.name,
            summary: game.summary,
            slug: game.slug,
            id: game.id,
            reviews
        },
    };
}

const GamePage = (props) => {
    const [reviews, setReviews] = useState(props.reviews)
    const { data, status } = useSession()
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
                    {status === 'authenticated' &&
                        <div className="my-20 ">
                            <h3 className="text-lg font-semibold m-2">Write a review</h3>
                            <form action=""
                                onSubmit={async (e) => {
                                    e.preventDefault()
                                    const review = document.querySelector("[name=review]").value
                                    const result = await fetch(`http://localhost:3000/api/review/${props.id}/${data.user.username}`,
                                        {
                                            method: 'POST',
                                            body: `${review}`,
                                        })
                                        .then(res => res.json())
                                    setReviews([result, ...reviews])
                                    console.log(reviews)
                                    document.querySelector("[name=review]").value = ""
                                }}>
                                <textarea
                                    className="border-2 h-32 min-w-full p-2"
                                    type="text"
                                    name="review"
                                    placeholder="Write a review here." />
                                <div className="flex flex-row-reverse">
                                    <div
                                        className="bg-black p-2 text-white border-black border-2
                                    hover:bg-white hover:text-black">
                                        <input
                                            type="submit"
                                            value="Submit"
                                        />
                                    </div>
                                </div>
                            </form>
                        </div>
                    }
                    <div className="my-20">
                        <h3 className="text-3xl font-semibold mb-5">User Reviews</h3>
                        {reviews.length == 0 ?
                            <h4 className="text-center m-20 text-xl">
                                No reviews for this game yet :(
                            </h4>
                            : <div className="max-h-96 overflow-auto">
                                {reviews.map((e) =>
                                    <UserReview
                                        key={e.id}
                                        body={e.body}
                                        username={e.authorName} />)}
                            </div>
                        }
                    </div>
                </div>
            </div>
        </>
    );
}

export default GamePage