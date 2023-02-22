import React, {Component} from 'react'
import axios from 'axios'
import md5 from 'md5'
import Cookies from 'universal-cookie'

const baseUrl="http://localhost:3001/usuarios"
const cookies = new Cookies()

class Login extends Component {
  state={
    form:{
      username: '',
      password: ''
    }
  }

  handleChange= async e=>{
    await this.setState({
      form:{
        ...this.state.form,
        [e.target.name]: e.target.value
      }
    })
  }

  iniciarSesion=async()=>{
    await axios.get(baseUrl, {params: {username: this.state.form.username, password: md5(this.state.form.password)}})
    .then(response=>{
      return response.data
    })
    .then(response=>{
      if(response.length>0){
        var respuesta=response[0]
        cookies.set('id', respuesta.id, {path: "/"})
        cookies.set('username', respuesta.username, {path: "/"})
        window.location.href="./Home"
      }else{
        alert("El usuario o contraseña no son correctos")
      }
    })
    .catch(error=>{
      console.log(error);
    })
  }

  componentDidMount(){
    if(cookies.get('id')){
      window.location.href = './Home'
    }
  }

  render(){
    return(
      <div className='grid grid-cols-1 absolute gap-0 w-full h-full'>
        <div className='grid grid-cols-5 relative gap-0 '>
          <div 
            className="
              md:col-span-3 
              bg-gradient-to-r from-blue-500 to-green-500
              bg-no-repeat
              bg-cover
              text-center
              pt-48"
          >
            <h1 className='font-bold text-white text-8xl underline'>Bibliotek</h1>
            <h3 className='text-white font-bold mt-4 text-2xl'>Nuestros libros, nuestro mundo</h3>
          </div>
          <div className='md:col-span-2 items-center justify-center bg-gray-800 back p-16'>
            <div className='rounded-md bg-gradient-to-r from-blue-500 via-green-500 to-green-500 p-1 mt-24'>
              <div className='items-center justify-center bg-gray-800 back p-8'>
                <div className='mb-4'>
                  <label class="block text-gray-100 text-sm font-bold mb-2" for="username">
                    Nombre de Usuario
                  </label>
                  <input 
                    type="text" 
                    className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline' 
                    name="username" 
                    id="username"
                    placeholder='Nombre de Usuario'
                    onChange={this.handleChange}/>
                </div>
                <div className='mb-4'>
                  <label class="block text-gray-100 text-sm font-bold mb-2" for="password">Contraseña: </label>
                  <input 
                    type="password" 
                    className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline' 
                    name="password" 
                    id="password"
                    placeholder='******************'
                    onChange={this.handleChange}/>
                </div>
                <div class="flex items-center justify-between">
                  <button 
                    className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline' 
                    onClick={()=> this.iniciarSesion()}
                    type="button"
                  >
                    Iniciar Sesion
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Login