import prisma from "../../../../lib/prisma"

export default async function handler(req, res) {
    const { gameId } = req.query
    const reviews = await prisma.review.findMany({
        where: {
            gameId: Number(gameId)
        },
    })

    res.status(200).json(reviews || [])
}