import prisma from "../../../lib/prisma"

export default async function handler(req, res) {
    const { id } = req.query
    const games = await prisma.game.findUnique({
        where: {
            id: Number(id)
        }
    })

    const usersWithGameInList = await prisma.gamesListEntry.findMany({
        where: {
            gameId: Number(id)
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

    games.usersWithGameInList = users

    res.status(200).json(games)
}
