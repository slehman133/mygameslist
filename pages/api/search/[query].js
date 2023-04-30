import prisma from "../../../lib/prisma"

export default async function handler(req, res) {
    const { query } = req.query
    const games = await prisma.game.findMany({
        where: {
            name: {
                contains: `${query}`,
                mode: 'insensitive',
            }
        }
    })

    const users = await prisma.user.findMany({
        where: {
            username: {
                contains: `${query}`,
                mode: 'insensitive',
            }
        }
    })

    const results = { games, users }
    res.status(200).json(results)
}
