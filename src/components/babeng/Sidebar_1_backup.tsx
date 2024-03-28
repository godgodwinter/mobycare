
import { useContext, createContext, useState } from "react"
import { LuArrowLeftToLine, LuArrowRightFromLine } from "react-icons/lu"
// import { LuAperture, LuAppWindow, LuApple, LuBadgeAlert } from "react-icons/lu";
// import Snaplet from "@/assets/snaplet.svg";
//@ts-ignore
const SidebarContext = createContext()
//@ts-ignore
export default function Sidebar_1({ children }) {
    const [expanded, setExpanded] = useState(true)
    
    return (
      <aside className={`h-screen  ${
        expanded ? "w-60 md:w-52" : "w-20"
      }`}>
        <nav className="h-full flex flex-col  border-r shadow-sm">
          <div className="p-4 pb-2 flex justify-between items-center">
                  {/* <img src={Snaplet} alt="Snaplet Logo" 
              className={`overflow-hidden transition-all ${
                expanded ? "w-32" : "w-0"
              }`} /> */}
            {/* <img
              src="https://img.logoipsum.com/243.svg"
              className={`overflow-hidden transition-all ${
                expanded ? "w-32" : "w-0"
              }`}
              alt=""
            /> */}
            {/* <label className="opacity-0">MENU</label> */}
            {/* <li
        className={`
          relative flex items-center py-2 px-3 my-1
           rounded-md cursor-pointer
          transition-colors group text-sm
         
      `}
      >
        <LuAppWindow/>
        <span
          className={`overflow-hidden transition-all ${
            expanded ? "w-52 ml-3" : "w-0"
          }`}
        >
          Beranda
        </span>
  
        {!expanded && (
          <div
            className={`
            absolute left-full rounded-md px-2 py-1 ml-6
            bg-indigo-100 text-indigo-800 text-sm
            invisible opacity-20 -translate-x-3 transition-all
            group-hover:visible group-hover:opacity-100 group-hover:translate-x-0
        `}
          >
            Beranda
          </div>
        )}
      </li> */}
            <button
              onClick={() => setExpanded((curr) => !curr)}
              className="p-1.5 rounded-lg bg-gray-50 hover:bg-gray-100 shadow-md"
            >
              {expanded ? <LuArrowLeftToLine /> : <LuArrowRightFromLine />}
            </button>
          </div>
  
          <SidebarContext.Provider value={{ expanded }}>
            <ul className="flex-1 px-3">{children}</ul>
          </SidebarContext.Provider>
  
          {/* <div className="border-t flex p-3">
            <img
              src="https://ui-avatars.com/api/?background=c7d2fe&color=3730a3&bold=true"
              alt=""
              className="w-10 h-10 rounded-md"
            />
            <div
              className={`
                flex justify-between items-center
                overflow-hidden transition-all ${expanded ? "w-52 ml-3" : "w-0"}
            `}
            >
              <div className="leading-4">
                <h4 className="font-semibold">John Doe</h4>
                <span className="text-xs text-gray-600">johndoe@gmail.com</span>
              </div>
              AA
            </div>
          </div> */}
        </nav>
      </aside>
    )
  }

  //@ts-ignore
export function SidebarItem({ icon, text, active, alert }) {
  //@ts-ignore
    const { expanded } = useContext(SidebarContext)
    
    return (
      <li
        className={`
          relative flex items-center py-2 px-3 my-1
           rounded-md cursor-pointer
          transition-colors group text-sm
         
      `}
      >
        {/* aa
          ${
            active
              ? "bg-gradient-to-tr from-indigo-200 to-indigo-100 text-indigo-800"
              : "hover:bg-indigo-50 text-gray-600"
          }
      `} */}
        {icon}
        <span
          className={`overflow-hidden transition-all ${
            expanded ? "w-52 ml-3" : "w-0"
          }`}
        >
          {text}
        </span>
        {alert && (
          <div
            className={`absolute right-2 w-2 h-2 rounded bg-indigo-400 ${
              expanded ? "" : "top-2"
            }`}
          />
        )}
  
        {!expanded && (
          <div
            className={`
            absolute left-full rounded-md px-2 py-1 ml-6
            bg-indigo-100 text-indigo-800 text-sm
            invisible opacity-20 -translate-x-3 transition-all
            group-hover:visible group-hover:opacity-100 group-hover:translate-x-0
        `}
          >
            {text}
          </div>
        )}
      </li>
    )
  }

  
  //@ts-ignore
export function SidebarLabel({  text }) {
    //@ts-ignore
      const { expanded } = useContext(SidebarContext)
      
      return (
        <div 
        className={`divider divider-start divider-success ${
            expanded ? " font-bold text-sm" : "font-bold text-xs"
          }`}
       >
        {/* {text} */}
       {expanded?text:""}</div>
      )
    }