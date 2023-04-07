import prisma from "../../../lib/prisma"

export default async function handler(req, res) {
    const { username } = req.query
    const user = await prisma.user.findFirst({
        where: {
            username
        }
    })
    res.status(200).json(user)
}