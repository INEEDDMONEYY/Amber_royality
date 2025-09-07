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
//Axios is used to import data over from the backend in to the frontend
//import axios from "axios"
//USeEffect And useState are used for setting state of data.
//import { useEffect, useState } from "react"
//import Home from '../components/Home'
import Location from '../components/LocationSetter'


export default function HomePage(){
    //Using backend post data & displaying it on the front end.
    /*const [posts, setPosts] = useState([])
    
        const fetchPosts = async() => {
            const { data } = await axios.get('/api/posts')
            setPosts(data)
            console.log(posts);
        }
        
        useEffect(() => {
            fetchPosts();
        }, []);*/
        //Backend post function not being rendered due to posts bug in post api, this is just for style purpose only DB will be implemented.

        //Current Datw function
        function CurrentDate() {
            const date = new Date();
            const formattedDate = date.toDateString();
            return formattedDate;
        }


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
                <div className="bg-gray-200 w-full rounded-sm bg-container">
                    <div className="content-container p-2">
                        <div className="top-page-content flex justify-between">
                            <h2 className="page-title text-pink-600 text-lg underline">Home</h2>
                            <div className="location-dropdown-container">
                                <Location />
                            </div>
                            <p className="text-pink-600 text-[1.4rem]">{CurrentDate()}</p>
                        </div>
                        <div className="grid text-pink-600 gap-4 m-10">
                            <div className="card-post-container">
                                <h3 className="page-subtitle mb-1 text-pink-600 font-bold">Recent Posts</h3>
                                <div className="card-display-container bg-gray-100 w-auto h-full rounded-sm p-3 shadow-md">
                                    <div className="card-display bg-white p-3 rounded-sm h-full content-center shadow-md overflow-hidden">
                                        <p></p>
                                    </div>
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
                        </div>
                    </div>
                </div>
            </div>
        </main>
        </>
    )
}
