import React from "react"
import { RiSearchLine, RiNotification2Line, RiMessage3Line } from "react-icons/ri"

const Header = () => {
  return(
    <header className="h-[7vh] md:h-[10vh] border-b border-primary p-2 flex justify-between align-items-center ">
      <div className="relative w-[30%] ml-4">
        <RiSearchLine className="absolute top-1/2 -translate-y-1/2 left-2 border-r text-xl border-gray-400 pr-1"  />
        <input type="text" placeholder="Buscar" className=" bg-fourth w-full pl-9 text-xl outline-none py-3" />
      </div>
      <div className="">
        <div className="flex justify-between items-center h-full gap-4">
          <div className="bg-white rounded-full p-2">
            <RiNotification2Line className="text-2xl" />
          </div>
          <div className="bg-white rounded-full p-2">
            <RiMessage3Line className="text-2xl" />
          </div>
          <img 
            src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=580&q=80"
            className="object-cover w-full h-full rounded-full p-1"
          />
        </div>
      </div>
    </header>
  )
}

export default Header