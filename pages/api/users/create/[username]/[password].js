import prisma from "../../../../../lib/prisma"

export default async function handler(req, res) {
    const { username, password } = req.query
    const user = await prisma.user.create({
        data: {
            username,
            password
        }
    })

    res.status(200).json(user)
}