import prisma from "../../../lib/prisma"

export default async function handler(req, res) {
    const { query } = req.query
    const results = await prisma.game.findMany({
        where: {
            name: {
                contains: `${query}`,
                mode: 'insensitive',
            }
        }
    })
    res.status(200).json(results)
}
