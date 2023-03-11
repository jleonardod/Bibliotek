import React, {useState } from "react"
import { RiSearchLine, RiNotification2Line, RiMessage3Line, RiSettings5Line, RiUserSettingsLine } from "react-icons/ri"

const Header = () => {
  const[showNotification, setShowNotification] = useState(false)
  const[showMensajes, setShowMensajes] = useState(false)
  const[showUser, setShowUser] = useState(false)

  return(
    <header className="h-[7vh] md:h-[10vh] border-b border-primary p-2 flex justify-between">
      <div className="relative w-[30%] ml-4">
        <RiSearchLine className="absolute top-1/2 -translate-y-1/2 left-2 border-r text-xl border-gray-400 pr-1"  />
        <input type="text" placeholder="Buscar" className=" bg-fourth w-full pl-9 text-xl outline-none py-3" />
      </div>
      <div className="">
        <div className="flex justify-between items-center h-full gap-4">
          <button onClick={() => setShowNotification(!showNotification, setShowMensajes(false), setShowUser(false))} className="bg-white rounded-full p-2 cursor-pointer">
            <RiNotification2Line className="text-2xl" />
          </button>
          <button onClick={() => setShowMensajes(!showMensajes, setShowNotification(false), setShowUser(false))} className="bg-white rounded-full p-2 cursor-pointer">
            <RiMessage3Line className="text-2xl" />
          </button>
          <img 
            src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=580&q=80"
            className="object-cover w-full h-full rounded-full p-1 cursor-pointer"
            onClick={() => setShowUser(!showUser, setShowNotification(false), setShowMensajes(false))}
          />
        </div>
      </div>
      <div className={`${!showNotification ? "hidden" : "absolute" } right-36 top-14 border-gray-500 border-solid border-b border-l border-r border-t md:w-96 w-50 z-20 bg-white`}>
        <h2 className="bg-primary w-full px-4 py-2 font-bold text-white text-2">Notificaciones</h2>
        <div className="ml-2">
          <ul className="py-2">
            <li className="px-2 flex gap-4 mb-2">
              <img 
                src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=580&q=80"
                className="object-cover w-16 h-16 rounded-full p-1 cursor-pointer"
              />
              <div className="pt-1">
                <div>
                  <h2 className="font-bold text-xl">Jefe</h2>
                  <p className="text-gray-500">Notificación 1</p>
                </div>
              </div>
            </li>
            <li className="px-2 flex gap-4 mb-2">
              <img 
                src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80"
                className="object-cover w-16 h-16 rounded-full p-1 cursor-pointer"
              />
              <div className="pt-1">
                <div>
                  <h2 className="font-bold text-xl">Recursos Humanos</h2>
                  <p className="text-gray-500">Notificación 2</p>
                </div>
              </div>
            </li>
            <li className="px-2 flex gap-4 mb-2">
              <img 
                src="https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=580&q=80"
                className="object-cover w-16 h-16 rounded-full p-1 cursor-pointer"
              />
              <div className="pt-1">
                <div>
                  <h2 className="font-bold text-xl">Contabilidad</h2>
                  <p className="text-gray-500">Notificación 3</p>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </div>
      <div className={`${!showMensajes ? "hidden" : "absolute" } right-20 top-14 border-gray-500 border-solid border-b border-l border-r border-t md:w-96 w-50 z-10 bg-white`}>
        <h2 className="bg-primary w-full px-4 py-2 font-bold text-white text-2">Mensajes</h2>
        <div className="ml-2">
          <ul className="py-2">
            <li className="px-2 flex gap-4 mb-2">
              <img 
                src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=580&q=80"
                className="object-cover w-16 h-16 rounded-full p-1 cursor-pointer"
              />
              <div className="pt-1">
                <div>
                  <h2 className="font-bold text-xl">Jefe</h2>
                  <p className="text-gray-500">Mensaje 1</p>
                </div>
              </div>
            </li>
            <li className="px-2 flex gap-4 mb-2">
              <img 
                src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80"
                className="object-cover w-16 h-16 rounded-full p-1 cursor-pointer"
              />
              <div className="pt-1">
                <div>
                  <h2 className="font-bold text-xl">Recursos Humanos</h2>
                  <p className="text-gray-500">Mensaje 2</p>
                </div>
              </div>
            </li>
            <li className="px-2 flex gap-4 mb-2">
              <img 
                src="https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=580&q=80"
                className="object-cover w-16 h-16 rounded-full p-1 cursor-pointer"
              />
              <div className="pt-1">
                <div>
                  <h2 className="font-bold text-xl">Contabilidad</h2>
                  <p className="text-gray-500">Mensaje 3</p>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </div>
      <div className={`${!showUser ? "hidden" : "absolute" } right-4 top-14 border-gray-500 border-solid border-b border-l border-r border-t w-56 z-10 bg-white`}>
        <h2 className="bg-primary w-full px-4 py-2 font-bold text-white text-2">Jorge Leonardo Diaz</h2>
        <div className="ml-2">
          <ul className="py-2">
            <li className="px-2 flex gap-4 mb-2">
              <div className="pt-1">
                <div className="flex flex-items justify-between items-center text-gray-700">
                  <RiSettings5Line className="text-2xl mr-2" /> <span>Configuraciones</span> 
                </div>
              </div>
            </li>
            <li className="px-2 flex gap-4 mb-2">
              <div className="pt-1">
                <div className="flex flex-items justify-between items-center text-gray-700">
                  <RiUserSettingsLine className="text-2xl mr-2" /> <span>Perfil</span> 
                </div>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </header>
  )
}

export default Header