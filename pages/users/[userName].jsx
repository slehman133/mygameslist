import Image from "next/image"

export async function getServerSideProps(context) {
    const userName = context.params.userName
    return { props: { userName } }
}


const UserPage = (props) => {
    return (
        <>
            <div className="flex items-center">
                <div className="p-10">
                    <Image className="border border-black rounded-full mx-auto" src="/img/default_profile.jpg" width={200} height={200} />
                    <h1 className="font-bold text-7xl">{props.userName}</h1>
                    <div className="mx-auto">
                        <button>Add as a friend</button>
                    </div>
                </div>
                <div>
                    <h3 className="font-semibold text-3xl">
                        {props.userName}'s Games List
                    </h3>
                </div>
            </div>
        </>
    )
}

export default UserPage