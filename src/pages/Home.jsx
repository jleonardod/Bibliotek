import React, { Component } from "react"
import { RiCalendarEventFill, RiUser3Line, RiStarFill, RiBook2Line, RiBookMarkLine, RiHandCoinLine, RiStarHalfFill, RiStarLine } from "react-icons/ri"
import axios from 'axios'
import Cookies from 'universal-cookie'

const baseUrl = "http://localhost:3001/"
const cookies = new Cookies()
const urlPrestamos = baseUrl+"prestamos"
const urlUsuarios = baseUrl+"usuarios"
const urlLibros = baseUrl+"libros"
const urlDinero = baseUrl+"dinero"
const urlCalificacion = baseUrl+"calificacion"

class Home extends Component {

  state = {
    cantidadPrestamos: 0,
    cantidadUsuarios: 0,
    cantidadLibros: 0,
    cantidadDinero: 0,
    calificacion: 0
  }

  componentDidMount(){
    if(!cookies.get('id')){
      window.location.href = './'
    }
    axios.get(urlPrestamos, {params: {id: "1"}})
    .then(response=>{
      return response.data
    })
    .then(
      (response) => {
        var respuesta = response[0]
        this.setState({
          cantidadPrestamos: respuesta.cantidad
        });
      },
      (error) => {
        console.log(error)
      }
    )
    axios.get(urlUsuarios, {params: {id: "1"}})
    .then(response=>{
      return response.data
    })
    .then(
      (response) => {
        var respuesta = response[0]
        
        this.setState({
          cantidadUsuarios: respuesta.cantidad
        });
      },
      (error) => {
        console.log(error)
      }
    )
    axios.get(urlLibros, {params: {id: "1"}})
    .then(response=>{
      return response.data
    })
    .then(
      (response) => {
        var respuesta = response[0]
        
        this.setState({
          cantidadLibros: respuesta.cantidad
        });
      },
      (error) => {
        console.log(error)
      }
    )
    axios.get(urlDinero, {params: {id: "1"}})
    .then(response=>{
      return response.data
    })
    .then(
      (response) => {
        var respuesta = response[0]
        
        this.setState({
          cantidadDinero: respuesta.cantidad
        });
      },
      (error) => {
        console.log(error)
      }
    )


    axios.get(urlCalificacion, {params: {id: "1"}})
    .then(response=>{
      return response.data
    })
    .then(
      (response) => {
        var respuesta = response[0]
        
        this.setState({
          calificacion: respuesta.promedio
        });
        console.log(this.state.calificacion)
      },
      (error) => {
        console.log(error)
      }
    )
  }
  
  render(){
    return(
      <div  className="grid md:grid-cols-8 grid-cols-1 gap-4">
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
          abdambdfamfbadfbsdbc.sbdv.,
        </div>
        <div className="md:col-span-4 grid grid-cols-2 gap-2">
          <div className="shadow-lg md:col-span-1 rounded-lg p-1 bg-white">
            <h1 className="bg-[#F2668B] rounded-lg p-1">
              <RiBook2Line className="text-white text-xl" />
            </h1>
            <div className="text-center py-3 text-gray-600">
              <span className="font-bold text-2xl text-black">{this.state.cantidadPrestamos}</span> 
              <p className="text-left ml-4">Prestamos realizados</p>
            </div>
          </div>
          <div className="shadow-lg md:col-span-1 rounded-lg p-1 bg-white">
            <h1 className="bg-third rounded-lg p-1">
              <RiUser3Line className="text-white text-xl" />
            </h1>
            <div className="text-center py-3 text-gray-600">
              <span className="font-bold text-2xl text-black">{this.state.cantidadUsuarios}</span> 
              <p className="text-left ml-4">Usuarios Registrados</p>
            </div>
          </div>
          <div className="shadow-lg md:col-span-1 rounded-lg p-1 bg-white">
            <h1 className="bg-primary rounded-lg p-1">
              <RiBookMarkLine className="text-white text-xl" />
            </h1>
            <div className="text-center py-3 text-gray-600">
              <span className="font-bold text-2xl text-black">{this.state.cantidadLibros}</span> 
              <p className="text-left ml-4">Libros Registrados</p>
            </div>
          </div>
          <div className="shadow-lg md:col-span-1 rounded-lg p-1 bg-white">
            <h1 className="bg-secondary rounded-lg p-1">
              <RiHandCoinLine className="text-white text-xl" />
            </h1>
            <div className="text-center py-3 text-gray-600">
              <span className="font-bold text-2xl text-black">{this.state.cantidadDinero}</span> 
              <p className="text-left ml-4">Transacciones registradas</p>
            </div>
          </div>
          <div className="bg-third md:col-span-2 col-span-2 p-2 shadow-lg rounded-lg">
            <h1 className="text-white font-bold">Calificación Promedio del servicio</h1>
            <div className="mt-2 flex text-2xl justify-center text-yellow-300">
              {this.state.calificacion > 0 ? <RiStarFill /> : <RiStarLine />}
              {this.state.calificacion > 1 ? <RiStarFill /> : <RiStarLine />}
              {this.state.calificacion > 2 ? <RiStarFill /> : <RiStarLine />}
              {this.state.calificacion > 3 ? <RiStarFill /> : <RiStarLine />}
              {this.state.calificacion > 4 ? <RiStarFill /> : <RiStarLine />}
              
            </div>
          </div>
        </div>
        <div className="md:col-span-10 col-span-1 flex flex-items justify-between bg-third">
          <div className="grid md:grid-cols-4 grid-cols-1 gap-4 w-full py-2 px-4">
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
  
}

export default Home