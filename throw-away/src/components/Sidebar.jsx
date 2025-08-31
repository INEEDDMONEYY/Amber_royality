import Logo from  "../assets/MMLogo.jpg"
import { ChevronFirst } from "lucide-react"
import { ChevronLast } from "lucide-react"
import { MoreVertical } from "lucide-react"
import { useState } from 'react'



export default function Sidebar({children}) {
    const [expaned, setExpaned] = useState(true)
    return(
        <aside className="h-screen">
            <nav className="h-full flex flex-col bg-white border-r shadow-sm">
                <div className="p-4 pb-3 flex justify-between items-center">
                    <img src={Logo} alt="" className={`overflow-hidden transition-all ${expaned ? "w-32" : "w-0" }`}/>
                    <button className="p-1.5 rounded-lg bg-gray-50 hiver:bg-gray-100" onClick={() => setExpaned(curr => !curr)}>
                        {expaned? <ChevronFirst /> : <ChevronLast />}  
                    </button>
                </div>

                <ul className="flex-1 px-3">{ children }</ul>

                <div className="border-t flex p-3">
                    <img src="https://avatar.iran.liara.run/public" alt="" className={`overflow-hidden transition-all ${expaned ? "w-32" : "w-0" }`} />
                    <div className={`flex justify-between items-center w-52 ml-3`}>
                        <div className="leading-4">
                            <h4 className="font-semibold">John Doe</h4>
                            <span className="text-xs text-gray-600">JohnDoe@gmail.com</span>
                        </div>
                        <MoreVertical size={20}/>
                    </div>
                </div>
            </nav>
        </aside>
    )
}

export function SidebarItem({icon, text, active, alert}) {
    return(
        <li className={`relative flex items-center py-2 px-3 my-1 font-medium rounded-md cursor-pointer transition-colors${active ? "bg-gradient-to-tr from-indigo-200 to-indigo-100 text-indigo-800" : "hover:bg-indigo-50 text-gray-600"}`}>
            {icon}
            <span className="w-52 ml-3">{text}</span>
            {alert && <div className={`absolute right-2 w-2 h-2 rounded bg-indigo-400 `}/>}
        </li>
    )
}