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
        alert(`Bienvenido ${respuesta.username}`)
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
      <div>
        <label>Usuario: </label>
        <br />
        <input type="text" className='border-black-500 border-2' name="username" onChange={this.handleChange}/>
        <br />
        <label>Contraseña: </label>
        <br />
        <input type="password" className='border-black-500 border-2' name="password" onChange={this.handleChange}/>
        <br />
        <button className='border-black-500 border-2' onClick={()=> this.iniciarSesion()}>Iniciar Sesion</button>
      </div>
    )
  }
}

export default Login