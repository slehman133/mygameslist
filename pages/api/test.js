import prisma from "../../lib/prisma"

export default async function handler(req, res) {
    const games = await prisma.game.findFirst({
        where: {
            id: Number(2155)
        },
        include: {
            reviews: true,
            user: true,
        }
    })
    res.status(200).json(games)
}
