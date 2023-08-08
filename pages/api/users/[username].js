import prisma from "../../../lib/prisma"

export default async function handler(req, res) {
    const { username } = req.query
    const user = await prisma.user.findFirst({
        where: {
            username
        },
        include: {
            gamesList: {
                include: {
                    entries: {
                        include: {
                            game: true
                        }
                    }
                }
            }
        }
    })

    res.status(200).json(user)
}
