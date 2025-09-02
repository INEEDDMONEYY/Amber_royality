//Using logic code for a export default function className={``} are need. Use ?: alternative for (If else).
import Logo from "../assets/Logo2.png"

export default function Navbar() {

return(
    <>
    <div className="navbar-bg-container bg-pink-200 flex justify-between w-full mb-3">
            <div className="logo-div">
                <img src={Logo} alt="" className="logo"/>
            </div>
            <div className="nav-items-bg self-center">
                <ul className="nav-items flex gap-2 m-3 ">
                    <button className="contact-btn bg-pink-600 p-1 rounded-full hover:bg-pink-400">Contact us</button>
                    <button className="sign-in-btn bg-pink-600 p-1 rounded-full hover:bg-pink-400">Sign in</button>
                    <button className="sign-up-btn bg-pink-600 p-1 rounded-full hover:bg-pink-400">Sign up</button>
                </ul>
            </div>
        </div>
    </>
)
}

//Export logic function
