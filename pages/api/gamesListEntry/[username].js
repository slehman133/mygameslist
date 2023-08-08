import prisma from "../../../lib/prisma"

export default async function handler(req, res) {
    const { username } = req.query
    if (req.method === "POST") {
        const { gameId } = JSON.parse(req.body)
        const gamesList = await prisma.gamesList.upsert({
            where: {
                username: username
            },
            create: {
                username: username
            },
            update: {
                username: username
            }
        }) || []
        const user = await prisma.user.update({
            where: {
                username: username
            },
            data: {
                gamesListId: Number(gamesList.id)
            }
        })
        const entry = await prisma.gamesListEntry.create({
            data: {
                gamesListId: Number(gamesList.id),
                gameId: Number(gameId),
            }
        }) || []
        res.status(200).json(entry)
    }
    else if (req.method === "GET") {
        const user = await prisma.user.findFirst({
            where: {
                username: username,
            },
            include: {
                gamesList:
                {
                    select: {

                        entries: true
                    }
                }
            }
        }).then(res => res.json()) || []
        console.log(user.gamesList.gamesListEntries)
    }
}
