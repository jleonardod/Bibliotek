import { BrowserRouter, Routes, Route } from "react-router-dom"
import Login from "./pages/Login.jsx"
import Home from "./pages/Home"


function Rutas() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login/>}/>
        <Route exact path="/Home" element={<Home/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default Rutas
