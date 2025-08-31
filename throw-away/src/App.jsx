//import { useState } from 'react'
//import reactLogo from './assets/react.svg'
//import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './components/Navbar'
import Home from './components/Home'
import Sidebar from "./components/Sidebar"
import { SidebarItem } from "./components/Sidebar"
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


export default function App() {
  

  return (
    <>
      <div className="page-container">
        <header className="header">
          <Navbar />
          <Sidebar>
            <SidebarItem icon={<LayoutDashboard size={20}/>} text="Dashboard" alert></SidebarItem>
            <SidebarItem icon={<BarChart3 size={20}/>} text="Statistics" active></SidebarItem>
            <SidebarItem icon={<Boxes size={20}/>} text="Inventory"></SidebarItem>
            <SidebarItem icon={<Package size={20}/>} text="Orders"></SidebarItem>
            <hr className="my-3"/>
            <SidebarItem icon={<UserCircle size={20}/>} text="Users" alert></SidebarItem>
            <SidebarItem icon={<Receipt size={20}/>} text="Billings"></SidebarItem>
            <SidebarItem icon={<Settings size={20}/>} text="Settings"></SidebarItem>
            <SidebarItem icon={<LifeBuoy />} text="Help"></SidebarItem>
          </Sidebar>
        </header>
        <main>
          <Home />
        </main>
      </div>
    </>
  )
}

