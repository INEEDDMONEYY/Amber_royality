import Logo from  "../assets/Logo.png"
import { ChevronFirst } from "lucide-react"
import { ChevronLast } from "lucide-react"
import { MoreVertical } from "lucide-react"
import { useState, createContext, useContext } from 'react'


const SidebarContext = createContext()

export default function Sidebar({children}) {
    const [expanded, setExpaned] = useState(true)
    return(
        <aside className="h-screen">
            <nav className="h-full flex flex-col bg-white border-r shadow-sm rounded-lg">
                <div className="p-4 pb-3 flex justify-between items-center">
                    <img src={Logo} alt="" className={`overflow-hidden transition-all ${expanded ? "w-32" : "w-0" }`}/>
                    <button className="p-1.5 rounded-lg bg-gray-50 hiver:bg-gray-100" onClick={() => setExpaned(curr => !curr)}>
                        {expanded? <ChevronFirst className="bg-red-300 rounded-sm" /> : <ChevronLast className="bg-black rounded-sm" />}  
                    </button>
                </div>

                <SidebarContext.Provider value={{ expanded }}>
                <ul className="flex-1 px-3">{ children }</ul>
                </SidebarContext.Provider>
                <div className="border-t flex p-3">
                    <img src="https://avatar.iran.liara.run/public" alt="" className={`overflow-hidden transition-all ${expanded ? "w-32" : "w-0" }`} />
                    <div className={`flex justify-between items-center w-52 ml-3`}>
                        <div className="leading-4">
                            <h4 className="font-semibold">John Doe</h4>
                            <span className="text-xs text-pink-600">MMansion.com</span>
                        </div>
                        <MoreVertical size={20}/>
                    </div>
                </div>
            </nav>
        </aside>
    )
}

export function SidebarItem({icon, text, active, alert}) {
    const {expanded} = useContext(SidebarContext)
    return(
        <li className={`
            relative flex items-center py-2 px-3 my-1 
            font-medium rounded-md cursor-pointer 
            transition-colors group 
            ${
                active 
                ? "bg-gradient-to-tr from-indigo-200 to-indigo-100 text-indigo-800" 
                : "hover:bg-indigo-50 text-gray-600"
            }
        `}
        >
            {icon}
            <span className={`overflow-hidden transition-all ${expanded ? "w-52 ml-3" : "w-0" }`}>{text}</span>
            {alert && <div className={`absolute right-2 w-2 h-2 rounded bg-red-400 ${expanded ? "":"top-2"}`}/>}
            {expanded && <div className={`
                absolute left-full rounded-md px-2 py-1 ml-6 
                bg-red-100 text-indigo-700 text-sm
                invisible opacity-20 -translate-x-3 transition-all
                group-hover:visiable group-hover:opacity-100 group-hover:translate-x-0
            `}
            >
                {text}
            </div>}
        </li>
    )
}