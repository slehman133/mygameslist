import Head from "next/head"
import Image from "next/image"

export async function getServerSideProps(context) {
    const user = await fetch(`http://localhost:3000/api/users/${context.params.userName}`)
        .then(res => res.json())


    if (!user) {
        return {
            notFound: true
        }
    }

    return { props: { user } }
}


const UserPage = (props) => {
    return (
        <>
            <Head>
                <title>{`${props.user.username}'s profile on MyGamesList`}</title>
            </Head>
            <div className="flex">
                <div className="p-10 items-center text-center">
                    <Image className="border border-black rounded-full mx-auto" src="/img/default_profile.jpg" width={200} height={200} />
                    <h1 className="font-bold text-7xl">{props.user.username}</h1>

                </div>
                <div className="m-20">
                    <h3 className="font-semibold text-3xl">
                        {props.user.username}'s Games List
                    </h3>
                </div>
            </div>
        </>
    )
}

export default UserPage