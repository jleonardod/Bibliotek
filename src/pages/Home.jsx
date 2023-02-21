import React, {Component} from "react"
import Cookies from 'universal-cookie'

const cookies = new Cookies()

class Home extends Component {
  cerrarSesion = () => {
    cookies.remove('id', {path:"/"})
    cookies.remove('username', {path:"/"})

    window.location.href="./"
  }

  componentDidMount(){
    if(!cookies.get('id')){
      window.location.href = './'
    }
  }

  render(){
    return(
      <div>
        Home

        <br />

        <button className='border-black-500 border-2' onClick={()=>this.cerrarSesion()}>Cerrar Sesión</button>
      </div>
    )
  }
}

export default Home