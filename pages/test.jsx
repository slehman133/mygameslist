import { getGameInfo } from "../lib/game-info"

export async function getServerSideProps(context) {
    const gameInfo = await getGameInfo("dark-souls")

    return {
        props: { gameInfo }
    }
}

const Test = (props) => {

    console.log(props.gameInfo)
    return (
        <>
            <h1>Test Page</h1>
        </>
    )
}

export default Test