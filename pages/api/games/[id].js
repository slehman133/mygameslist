import prisma from "../../../lib/prisma"

export default async function handler(req, res) {
    const { id } = req.query
    const games = await prisma.game.findUnique({
        where: {
            id: Number(id)
        }
    })
    res.status(200).json(games)
}