import prisma from "../../../../lib/prisma"

export default async function handler(req, res) {
    const { gameId, author } = req.query

    if (req.method === 'POST') {
        const review = await prisma.review.create({
            data: {
                authorName: author,
                gameId: Number(gameId),
                body: req.body,
            }
        })
        res.status(200).json(review)
    }

}