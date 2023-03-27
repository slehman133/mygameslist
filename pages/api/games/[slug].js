import prisma from "../../../lib/prisma"

export default async function handler(req, res) {
    const { slug } = req.query
    console.log(slug)
    const games = await prisma.game.findUnique()
    res.status(200).json(games)
}