import prisma from "../../lib/prisma"

export default async function handler(req, res) {
    // const games = await prisma.game.findFirst({
    //     where: {
    //         id: Number(2155)
    //     },
    //     include: {
    //         reviews: true,
    //         user: true,
    //     }
    // })
    // res.status(200).json(games)

    const usersWithGameInList = await prisma.gamesListEntry.findMany({
        where: {
            gameId: Number(2155)
        },
        include: {
            GamesList: {
                select: {
                    username: true
                }
            }
        }
    })

    const users = usersWithGameInList.map((e) => e.GamesList.username)

    console.log(users)

    res.status(200).json(null)
}
