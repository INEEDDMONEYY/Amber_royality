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
                <div className="w-full rounded-sm bg-container">
                    <div className="home-bg bg-white m-3 p-10 align-center">
                        <div className="flex flex-col">
                            <div>
                                <h2 className="page-title text-pink-600 underline">Home</h2>
                            </div>
                            <div>
                                <Location />
                            </div>
                            <div className="mt-3">
                                <h3 className="text-[1.2rem]">Welcome back, Jane Doe </h3>
                                <p className="text-pink-600 text-[1rem]">{CurrentDate()}</p>
                            </div>
                        </div>
                        <hr className="border-1 border-pink-500"/>
                        <div className="grid text-pink-600 gap-10 m-10">
                            <div className="card-display-container">
                                <h3 className="page-subtitle mb-1 text-pink-600">Top Ads</h3>
                                <div className="card-display bg-white p-3 rounded-sm h-full content-center shadow-md snap-x snap-start" id="ad-posts top-ad"></div>
                                <hr className="border-1 border-pink-500"/>
                            </div>
                            <div className="card-display-container">
                                <h3 className="page-subtitle mb-1 text-pink-600">Promotional Ads</h3>
                                <div className="card-display bg-white p-3 rounded-sm h-full content-center shadow-md" id="ad-posts promo-ad"></div>
                                <hr className="border-1 border-pink-500"/>
                            </div>
                            <div className="card-display-container">
                                <h3 className="page-subtitle mb-1 text-pink-600">Festish Rooms</h3>
                                <div className="card-display bg-white p-3 rounded-sm h-full content-center shadow-md" id="ad-posts fetish-ad"></div>
                                <hr className="border-1 border-pink-500"/>
                            </div>
                            <div className="card-display-container">
                                <h3 className="page-subtitle mb-1 text-pink-600">Recent Posts</h3>
                                <div className="card-display bg-white p-3 rounded-sm h-full content-center shadow-md" id="ad-posts recent-ad"></div>
                                <hr className="border-1 border-pink-500"/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </main>
        </>
    )
}
