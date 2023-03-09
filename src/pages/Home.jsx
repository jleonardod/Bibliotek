import React from "react"
import { RiCalendarEventFill, RiUser3Line, RiStarFill } from "react-icons/ri"

const Home = () => {
  return(
    <div  className="grid grid-cols-8 gap-4">
      <div className="md:col-span-10 flex flex-items justify-between">
        <div>
          <h1 className="text-3xl font-bold">Dashboard</h1>
          <span className="text-gray-500 text-sm">Tablero Analytics</span>
        </div>
        <div className="">
          <span className="flex items-center gap-4 text-sm mt-5 text-gray-500">
            <RiCalendarEventFill /> 9 Marzo - 2023
          </span>
        </div>
      </div>
      <div className="md:col-span-6 bg-white shadow-lg rounded-lg py-6 px-4">
        <h1 className="font-bold text-2xl">Prestamos</h1>
        abdambdfamfbadfbsdbc.sbdv.,svff.dfkjkdbfshjsabdambdfamfbadfbsdbc.sbdv.,svff.dfkjkdbfshjs
        abdambdfamfbadfbsdbc.sbdv.,svff.dfkjkdbfshjsabdambdfamfbadfbsdbc.sbdv.,svff.dfkjkdbfshjs
        abdambdfamfbadfbsdbc.sbdv.,svff.dfkjkdbfshjsabdambdfamfbadfbsdbc.sbdv.,svff.dfkjkdbfshjs
        abdambdfamfbadfbsdbc.sbdv.,svff.dfkjkdbfshjsabdambdfamfbadfbsdbc.sbdv.,svff.dfkjkdbfshjs
      </div>
      <div className="md:col-span-4 grid grid-cols-2 gap-2">
        <div className="shadow-lg md:col-span-1 rounded-lg p-1 bg-white">
          <h1 className="bg-[#F2668B] rounded-lg p-1">
            <RiUser3Line className="text-white text-xl" />
          </h1>
          <div className="text-center py-3 text-gray-600">
            <span className="font-bold text-2xl text-black">6402</span> 
            <p className="text-left ml-4">Usuarios Registrados</p>
          </div>
        </div>
        <div className="shadow-lg md:col-span-1 rounded-lg p-1 bg-white">
          <h1 className="bg-third rounded-lg p-1">
            <RiUser3Line className="text-white text-xl" />
          </h1>
          <div className="text-center py-3 text-gray-600">
            <span className="font-bold text-2xl text-black">6402</span> 
            <p className="text-left ml-4">Usuarios Registrados</p>
          </div>
        </div>
        <div className="shadow-lg md:col-span-1 rounded-lg p-1 bg-white">
          <h1 className="bg-primary rounded-lg p-1">
            <RiUser3Line className="text-white text-xl" />
          </h1>
          <div className="text-center py-3 text-gray-600">
            <span className="font-bold text-2xl text-black">6402</span> 
            <p className="text-left ml-4">Usuarios Registrados</p>
          </div>
        </div>
        <div className="shadow-lg md:col-span-1 rounded-lg p-1 bg-white">
          <h1 className="bg-secondary rounded-lg p-1">
            <RiUser3Line className="text-white text-xl" />
          </h1>
          <div className="text-center py-3 text-gray-600">
            <span className="font-bold text-2xl text-black">6402</span> 
            <p className="text-left ml-4">Usuarios Registrados</p>
          </div>
        </div>
        <div className="bg-third md:col-span-2 p-2 shadow-lg rounded-lg">
          <h1 className="text-white font-bold">Calificación Promedio del servicio</h1>
          <div className="mt-2 flex text-2xl justify-center text-yellow-300">
            <RiStarFill />
            <RiStarFill />
            <RiStarFill />
            <RiStarFill />
            <RiStarFill />
          </div>
        </div>
      </div>
      <div className="md:col-span-10 flex flex-items justify-between bg-third">
        <div className="grid grid-cols-4 gap-4 w-full py-2 px-4">
          <div className="md:col-span-1 text-center">
            <h1 className="text-sm font-bold text-white">Total Prestamos</h1>
            <span className="text-5xl mt-2 font-bold text-white">6402</span>
            <p className="text-xs text-white mt-2">Cambio en numeros</p>
          </div>
          <div className="md:col-span-1 text-center">
            <h1 className="text-sm font-bold text-white">Total Prestamos</h1>
            <span className="text-5xl mt-2 font-bold text-white">6402</span>
            <p className="text-xs text-white mt-2">Cambio en numeros</p>
          </div>
          <div className="md:col-span-1 text-center">
            <h1 className="text-sm font-bold text-white">Total Prestamos</h1>
            <span className="text-5xl mt-2 font-bold text-white">6402</span>
            <p className="text-xs text-white mt-2">Cambio en numeros</p>
          </div>
          <div className="md:col-span-1 text-center">
            <h1 className="text-sm font-bold text-white">Total Prestamos</h1>
            <span className="text-5xl mt-2 font-bold text-white">6402</span>
            <p className="text-xs text-white mt-2">Cambio en numeros</p>
          </div>
        </div>
      </div>
    </div>
    
  )
  
}

export default Home