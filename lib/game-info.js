import prisma from "./prisma"

const getIGDBGameData = async (slug) => {
    const headers = {
        'Client-ID': `${process.env.IGDB_CLIENT_ID}`,
        'Authorization': `Bearer ${process.env.IGBD_ACCESS_TOKEN}`,
    }
    try {
        const game = await fetch(`https://api.igdb.com/v4/games`, {
            'method': 'POST',
            'headers': headers,
            'body': `where slug =\"${slug}\"; fields *; limit 1;`
        })
            .then(res => res.json())
            .then(data => {
                return data
            })
        const multiquery = await fetch(`https://api.igdb.com/v4/multiquery`, {
            'method': 'POST',
            'headers': headers,
            'body': `query covers "cover" {
                where id = ${game[0].cover};
                        fields *;
                     };
                     `
        }).then(res => res.json())
            .then(data => data)

        const cover = multiquery[0].result[0]

        return {
            cover: cover.url,
            name: game[0].name,
            summary: game[0].summary,
            slug: game[0].slug,
            id: game[0].id,
        }

    } catch (err) {
        console.log(err);
    }
}

const findInDatabase = async (slug) => {
    const game = await prisma.game.findFirst({
        where: {
            slug: `${slug}`
        }
    })
    return game
}

const addToDatabase = async (game) => {
    let { cover, name, summary, slug, id } = game
    cover = cover.replace("t_thumb", "t_cover_big")
    await prisma.game.create({
        data: {
            cover,
            name,
            summary,
            slug,
            id
        }
    })
}

export async function getGameInfo(slug) {
    let result = await findInDatabase(slug)
    if (result == null) {
        result = await getIGDBGameData(slug)
        addToDatabase(result)
    }
    result["cover"] = result["cover"].replace("t_thumb", "t_cover_big")

    return result
}