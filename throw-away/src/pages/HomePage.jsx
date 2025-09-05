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
                    <div className="content-container p-10">
                        <h2 className="page-title text-pink-600 text-lg">Home</h2>
                        <div className="p-2 grid text-black gap-4">
                            <div>
                                <h3>Recent Posts</h3>
                            </div>
                            <div>
                                <h3>Ads</h3>
                            </div>
                            <div>
                                <h3>Rewards</h3>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </main>
        </>
    )
}