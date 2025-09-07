export default function SignIn() {
    return(
        <>
        <div className="flex flex-col signin-bg">
            <h1 className="signin-title">Mystery Mansion</h1>
            <h3 className="signin-subtitle">Sign In</h3>
            <p className="text-black">Sign into your account to please, pleasure, promote your sex lifestyle!</p>
            <form action="get">
                <input type="text" placeholder="Email" />
                <input type="text" placeholder="Password" />
                <div className="submit-btn-container">
                    <button type="submit">Log In</button>
                </div>
            </form>
        </div>
        </>
    )
}