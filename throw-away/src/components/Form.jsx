import { Link } from 'react-router'

export default function Form() {
    return(
        <>
        <form action="" method="post" className="flex flex-col w-96">
            <input type="text" name="email" placeholder="Email" className="border-2 border-pink-600 m-2 px-1 text-[1.5rem]" id="email"/>
            <input type="text" name="password" placeholder="Password" className="border-2 border-pink-600 m-2 px-1 text-[1.5rem]" id="password"/>
            <div>
                <button name="submit-btn" type="submit" className="border-2 border-white m-1 px-1 text-black text-[1.3rem] rounded-md">Sign In</button>
            </div>
            <div>
                {/**Import link from react router & link sign up to it's link */}
                <h3 className="text-black text-[1rem] underline">Don't have an account yet? Sign Up</h3>
                <Link to="/home"><p className="underline text-black">Return home</p></Link>
            </div>
        </form>
        </>
    )
}