import React, { useState } from "react"
import { Link } from "react-router-dom"
//Iconos
import {RiBarChart2Line, RiBarcodeBoxLine, RiArrowRightSLine, RiUser3Line, RiFileListLine, RiSettings5Line, RiLogoutCircleRLine} from "react-icons/ri"

const Sidebar = () => {
  const [showMenu, setShowMenu] = useState(false)
  const [showSubInventario, setShowSubInventario] = useState(false)
  const [showSubClientes, setShowSubClientes] = useState(false)
  const [showSubInformes, setShowSubInformes] = useState(false)
  const [showConfiguraciones, setShowSubConfiguraciones] = useState(false)
  return(
    <>
      <div className="xl:h-[100vh] overflow-y-scroll fixed bg-primary w-[80%] md:w-[40%] lg:w-[30%] xl:w-auto h-full top-0 xl:static p-4 flex flex-col justify-between z-50">
        <div>
          <h1 className="text-center text-2xl font-bold text-white mb-10">Bibliotek<span className="text-third text-4xl">.</span></h1>
          <ul>
            <li>
              <Link to="/" className="flex items-center gap-4 py-2 px-4 rounded-lg hover:bg-secondary transition-colors text-white">
                <RiBarChart2Line className="text-third"/> Dashboard
              </Link>
            </li>
            <span className="border-b border-gray-400 w-full h-1 my-2 block"></span>
            <li className="mb-2">
              <button 
                onClick={() => setShowSubInventario(!showSubInventario)}
                className="flex items-center justify-between py-2 px-4 rounded-lg hover:bg-secondary transition-colors text-white w-full"
              >
                <span className="flex items-center gap-4">
                  <RiBarcodeBoxLine className="text-white"/> Inventario
                </span>
                <RiArrowRightSLine className={`mt-1 ${showSubInventario && "rotate-90"}`} />
              </button>
              <ul className={`${showSubInventario ? "h-full" : "h-0"} overflow-y-hidden transition-all`}>
                <li>
                  <Link to="/" className="py-2 px-4 border-l text-white border-gray-200 ml-6 block relative before:w-3 before:h-3 before:absolute before:bg-white before:rounded-full before:-left-[6.5px] before:top-1/2 before:-translate-y-1/2 before:border-4 before:border-primary hover:text-white transition-colors">Libros</Link>
                </li>
                <li>
                  <Link to="/" className="py-2 px-4 border-l text-white border-gray-200 ml-6 block relative before:w-3 before:h-3 before:absolute before:bg-white before:rounded-full before:-left-[6.5px] before:top-1/2 before:-translate-y-1/2 before:border-4 before:border-primary hover:text-white transition-colors">Proveedores</Link>
                </li>
                <li>
                  <Link to="/" className="py-2 px-4 border-l text-white border-gray-200 ml-6 block relative before:w-3 before:h-3 before:absolute before:bg-white before:rounded-full before:-left-[6.5px] before:top-1/2 before:-translate-y-1/2 before:border-4 before:border-primary hover:text-white transition-colors">Cargue Masivo</Link>
                </li>
              </ul>
            </li>
            <li className="mb-2">
              <button 
                onClick={() => setShowSubClientes(!showSubClientes)}
                className="flex items-center justify-between py-2 px-4 rounded-lg hover:bg-secondary transition-colors text-white w-full"
              >
                <span className="flex items-center gap-4">
                  <RiUser3Line className="text-white"/> Clientes
                </span>
                <RiArrowRightSLine className={`mt-1 ${showSubClientes && "rotate-90"}`} />
              </button>
              <ul className={`${showSubClientes ? "h-full" : "h-0"} overflow-y-hidden transition-all`}>
                <li>
                  <Link to="/" className="py-2 px-4 border-l text-white border-gray-200 ml-6 block relative before:w-3 before:h-3 before:absolute before:bg-white before:rounded-full before:-left-[6.5px] before:top-1/2 before:-translate-y-1/2 before:border-4 before:border-primary hover:text-white transition-colors">Clientes</Link>
                </li>
                <li>
                  <Link to="/" className="py-2 px-4 border-l text-white border-gray-200 ml-6 block relative before:w-3 before:h-3 before:absolute before:bg-white before:rounded-full before:-left-[6.5px] before:top-1/2 before:-translate-y-1/2 before:border-4 before:border-primary hover:text-white transition-colors">Clientes Premiun</Link>
                </li>
                <li>
                  <Link to="/" className="py-2 px-4 border-l text-white border-gray-200 ml-6 block relative before:w-3 before:h-3 before:absolute before:bg-white before:rounded-full before:-left-[6.5px] before:top-1/2 before:-translate-y-1/2 before:border-4 before:border-primary hover:text-white transition-colors">Métricas</Link>
                </li>
              </ul>
            </li>
            <li className="mb-2">
              <button 
                onClick={() => setShowSubInformes(!showSubInformes)}
                className="flex items-center justify-between py-2 px-4 rounded-lg hover:bg-secondary transition-colors text-white w-full"
              >
                <span className="flex items-center gap-4">
                  <RiFileListLine className="text-white"/> Informes
                </span>
                <RiArrowRightSLine className={`mt-1 ${showSubInformes && "rotate-90"}`} />
              </button>
              <ul className={`${showSubInformes ? "h-full" : "h-0"} overflow-y-hidden transition-all`}>
                <li>
                  <Link to="/" className="py-2 px-4 border-l text-white border-gray-200 ml-6 block relative before:w-3 before:h-3 before:absolute before:bg-white before:rounded-full before:-left-[6.5px] before:top-1/2 before:-translate-y-1/2 before:border-4 before:border-primary hover:text-white transition-colors">Clientes</Link>
                </li>
                <li>
                  <Link to="/" className="py-2 px-4 border-l text-white border-gray-200 ml-6 block relative before:w-3 before:h-3 before:absolute before:bg-white before:rounded-full before:-left-[6.5px] before:top-1/2 before:-translate-y-1/2 before:border-4 before:border-primary hover:text-white transition-colors">Libros</Link>
                </li>
                <li>
                  <Link to="/" className="py-2 px-4 border-l text-white border-gray-200 ml-6 block relative before:w-3 before:h-3 before:absolute before:bg-white before:rounded-full before:-left-[6.5px] before:top-1/2 before:-translate-y-1/2 before:border-4 before:border-primary hover:text-white transition-colors">Movimiento Inventario</Link>
                </li>
              </ul>
            </li>
            <li className="mb-2">
              <button 
                onClick={() => setShowSubConfiguraciones(!showConfiguraciones)}
                className="flex items-center justify-between py-2 px-4 rounded-lg hover:bg-secondary transition-colors text-white w-full"
              >
                <span className="flex items-center gap-4">
                  <RiSettings5Line className="text-white"/> Ajustes
                </span>
                <RiArrowRightSLine className={`mt-1 ${showConfiguraciones && "rotate-90"}`} />
              </button>
              <ul className={`${showConfiguraciones ? "h-full" : "h-0"} overflow-y-hidden transition-all`}>
                <li>
                  <Link to="/" className="py-2 px-4 border-l text-white border-gray-200 ml-6 block relative before:w-3 before:h-3 before:absolute before:bg-white before:rounded-full before:-left-[6.5px] before:top-1/2 before:-translate-y-1/2 before:border-4 before:border-primary hover:text-white transition-colors">Usuarios</Link>
                </li>
                <li>
                  <Link to="/" className="py-2 px-4 border-l text-white border-gray-200 ml-6 block relative before:w-3 before:h-3 before:absolute before:bg-white before:rounded-full before:-left-[6.5px] before:top-1/2 before:-translate-y-1/2 before:border-4 before:border-primary hover:text-white transition-colors">Perfiles</Link>
                </li>
                <li>
                  <Link to="/" className="py-2 px-4 border-l text-white border-gray-200 ml-6 block relative before:w-3 before:h-3 before:absolute before:bg-white before:rounded-full before:-left-[6.5px] before:top-1/2 before:-translate-y-1/2 before:border-4 before:border-primary hover:text-white transition-colors">Parametros</Link>
                </li>
              </ul>
            </li>
          </ul>
          <span className="border-b border-gray-400 w-full h-1 my-2 block"></span>
        </div>
        <nav>
          <Link to="/" className="flex items-center gap-4 py-2 px-4 rounded-lg hover:bg-primary bg-secondary transition-colors text-black">
            <RiLogoutCircleRLine className="text-black" /> Cerrar Sesión
          </Link>
        </nav>
      </div>
      
    </>
  )
}

export default Sidebar