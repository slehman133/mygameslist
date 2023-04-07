import { useState } from "react"


const UserControls = () => {
    const [isLoggedIn, setLoggedIn] = useState(false)
    const [isFavorite, setFavorite] = useState(false)

    return (
        <div className="my-10 border-black border-2 p-5 rounded-[5px] mx-auto">
            {isLoggedIn ?
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
                    <div className='' onClick={() => setLoggedIn(true)}>
                        <p>Log in to track this game.</p>
                    </div>
                </>
            }
        </div >
    )

}

export default UserControls