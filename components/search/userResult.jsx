import Link from "next/link"

const UserResult = (props) => {
    return (
        <>
            <Link href={`/users/${props.username}`}>
                <div className="text-center p-5 text-2xl m-5" id={props.id}>
                    <div>
                        <img
                            className="rounded-full"
                            src="/img/default_profile.jpg"
                            alt="" />
                    </div>
                    <div>
                        <h1 className="font-semibold">{props.username}</h1>
                    </div>
                </div>
            </Link>
        </>
    )
}

export default UserResult