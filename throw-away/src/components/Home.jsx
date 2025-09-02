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
} from "lucide-react"


function Home() {
    //

    return(
        <>
        <div className="home-bg-container bg-gray-300 p-3 flex gap-3">
            {/**Sidebar Testing, Sidebar placed in home component need to resize the sidebar div to shrink to the left when button is clicked*/}
            <div className="navbar-test">
                <div className="w-48">
                    <Sidebar className="">
                        <SidebarItem icon={<LayoutDashboard size={20}/>} text="Dashboard" alert></SidebarItem>
                        <SidebarItem icon={<BarChart3 size={20}/>} text="Feed" active></SidebarItem>
                        <SidebarItem icon={<Boxes size={20}/>} text="Posts"></SidebarItem>
                        <SidebarItem icon={<Package size={20}/>} text="Reviews"></SidebarItem>
                        <hr className="my-3"/>
                        <SidebarItem icon={<UserCircle size={20}/>} text="Users" alert></SidebarItem>
                        <SidebarItem icon={<Receipt size={20}/>} text="Billings"></SidebarItem>
                        <SidebarItem icon={<Settings size={20}/>} text="Settings"></SidebarItem>
                        <SidebarItem icon={<LifeBuoy />} text="Help"></SidebarItem>
                    </Sidebar>
                </div>
            </div>
            <section>
                {/**Change background to ceertain image I want to use */}
                <div className="bg-pink-600 h-full w-full p-10 rounded-md">
                    <h1>Dashboard</h1>
                </div>
            </section>
        </div>
        </>
    )
}

//Export function
export default Home