export default function Posts() {
    return(
        <>
        <form action="" method="post">
            <input type="file" name="user-img" id="user-post-img" />
            <div className="post-content flex flex-col mt-3">
                <input type="text" placeholder="Alias" id="post-username" name="post-username" className="border-2 border-pink-300 px-1 mt-1 rounded-sm" />
                <input type="text" id="post-description" name="post-description" placeholder="Ad Description" className="border-2 border-pink-300 px-1 mt-1 rounded-sm" />
                <textarea name="post-description" id="post-description" placeholder="Ad Description" className="border-2 border-pink-300 px-1 mt-1 rounded-sm"></textarea>
            </div>
            <div className="submit-btn">
                <button className="border-2 border-pink-300 px-1 mt-1 rounded-sm text-black" id="post-btn">Post</button>
            </div>
        </form>
        </>
    )
}