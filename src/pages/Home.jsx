import React, {Component} from "react"
import Cookies from 'universal-cookie'

const cookies = new Cookies()

class Home extends Component {
  render(){
    console.log(cookies.get('id'))
    console.log(cookies.get('username'))
    return(
      <div>
        Home
      </div>
    )
  }
}

export default Home