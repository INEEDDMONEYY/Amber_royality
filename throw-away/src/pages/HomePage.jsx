import Navbar from "../components/Navbar"
import Sidebar from "../components/Sidebar"
import { SidebarItem } from "../components/Sidebar"
import {
    LifeBuoy,
    Receipt,
    Boxes,
    Package,
    UserCircle,
    BarChart3,
    LayoutDashboard,
    Settings,
    House,
} from "lucide-react"
import { Link } from "react-router"
//import Home from '../components/Home'


export default function HomePage(){
    return(
        <>
        <nav>
            <Navbar />
        </nav>
        <main>
            <div className="main-bg-container flex gap-3">
                <div className="sidebar-div">
                    <Sidebar className="">
                        <Link to="/home"><SidebarItem icon={<House size={20}/>} text="Home" active></SidebarItem></Link>
                        <Link to="/dashboard"><SidebarItem icon={<LayoutDashboard size={20}/>} text="Dashboard"></SidebarItem></Link>
                        <Link to="/feed"><SidebarItem icon={<BarChart3 size={20}/>} text="Feed" alert></SidebarItem></Link>
                        <Link to="/posts"><SidebarItem icon={<Boxes size={20}/>} text="Posts"></SidebarItem></Link>
                        <Link to="/reviews"><SidebarItem icon={<Package size={20}/>} text="Rewards"></SidebarItem></Link>
                        <hr className="my-3"/>
                        <SidebarItem icon={<UserCircle size={20}/>} text="Reviews" alert></SidebarItem>
                        <SidebarItem icon={<Receipt size={20}/>} text="Billings"></SidebarItem>
                        <SidebarItem icon={<Settings size={20}/>} text="Settings"></SidebarItem>
                        <SidebarItem icon={<LifeBuoy />} text="Help"></SidebarItem>
                    </Sidebar>
                </div>
                <div className="bg-gray-200 w-full rounded-sm">
                    <div className="content-container p-2">
                        <h2 className="page-title text-pink-600 text-lg underline">Home</h2>
                        <div className="grid text-black gap-4 m-1">
                            <div className="card-post-container">
                                <h3 className="page-subtitle mb-1">Recent Posts</h3>
                                <div className="card-display-container bg-gray-100 w-auto h-full rounded-sm p-3 shadow-md">
                                    <div className="card-display bg-white p-3 rounded-sm h-full content-center shadow-md overflow-hidden"></div>
                                </div>
                            </div>
                            <div className="card-post-container w-auto">
                                <h3 className="page-subtitle mb-1">Ads</h3>
                                <div className="card-display-container p-3 bg-gray-100 w-auto h-full rounded-sm p-3 shadow-md">
                                    <div className="card-display bg-white p-3 rounded-sm h-full content-center shadow-md"></div>
                                </div>
                            </div>
                            <div className="card-post-container">
                                <h3 className="page-subtitle mb-1">Rewards</h3>
                                <div className="card-display-container p-3 bg-gray-100 w-auto h-full rounded-sm p-3 shadow-md">
                                    <div className="card-display bg-white p-3 rounded-sm h-full content-center shadow-md"></div>
                                </div>
                            </div>
                            <section>
                                <div className="mt-4">
                                    <div className="page-content-img-container h-full w-auto p-20">
                                        <div className="page-text-container text-center text-white bg-white relative top-[100px] m-10 w-96 rounded-lg">
                                            <h3 className="page-text-title">Some dreams are worth obtaining</h3>
                                        </div>
                                    </div>
                                </div>
                            </section>
                        </div>
                    </div>
                </div>
            </div>
        </main>
        </>
    )
}