import { data } from "autoprefixer"
import Link from "next/link"
import { useState } from "react"

const UserControls = (props) => {
    const [isInGamesList, setIsInGamesList] = useState(props.users.includes(props.data.user.username))
    return (
        <div className="my-10 border-black border-2 p-5 rounded-[5px] mx-auto">
            {props.status === 'authenticated' ?
                isInGamesList === false ?
                    <>
                        <div className="text-center hover:cursor-pointer" onClick={async () => {
                            const entry = await fetch(`http://localhost:3000/api/gamesListEntry/${props.data.user.username}`, {
                                method: "POST",
                                body: JSON.stringify({
                                    gameId: props.gameId
                                })
                            })
                                .then(res => res.json())
                            setIsInGamesList(true)
                        }}>
                            <p>Add to Games List</p>
                        </div>
                    </>
                    :
                    <>
                        <div>
                            <div>
                                <label htmlFor="game-status">Status: </label>
                                <select className="p-1" name="game-status" id="game-status">
                                    <option selected disabled>Select a status</option>
                                    <option className="text-green-500" value="playing">Playing</option>
                                    <option className="text-blue-500" value="finished">Finished</option>
                                    <option className="text-yellow-500" value="plan-to-play">Plan to play</option>
                                    <option className="text-red-500" value="dropped">Dropped</option>
                                </select>
                            </div>
                            <div>
                                <label htmlFor="">Rating: </label>
                                <select name="rating" id="rating">
                                    <option selected disabled>Select a rating </option>
                                    <option value="">10</option>
                                    <option value="">9</option>
                                    <option value="">8</option>
                                    <option value="">7</option>
                                    <option value="">6</option>
                                    <option value="">5</option>
                                    <option value="">4</option>
                                    <option value="">3</option>
                                    <option value="">2</option>
                                    <option value="">1</option>
                                </select>
                            </div>
                        </div>
                    </>
                :
                <>
                    <Link href="/api/auth/signin">
                        <div className=''>
                            <p>Log in to track this game.</p>
                        </div>
                    </Link>
                </>
            }
        </div >
    )

}

export default UserControls