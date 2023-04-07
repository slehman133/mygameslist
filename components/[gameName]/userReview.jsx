const UserReview = (props) => {
    return (
        <>
            <div className="flex border-2 border-black p-5 m-5 h-64 max-h-64">
                <div className="min-w-fit my-auto">
                    <img
                        className="border border-black rounded-full"
                        src="/img/default_profile.jpg"
                        alt="User profile picture" />
                </div>
                <div className="p-5 overflow-hidden">
                    <h1 className="font-bold text-2xl">{props.username}</h1>
                    <div className="overflow-auto max-h-52">
                        <p className="font-semibold">{props.body}</p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default UserReview