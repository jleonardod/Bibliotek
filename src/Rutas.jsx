import { BrowserRouter, Routes, Route } from "react-router-dom"
import Login from "./pages/Login.jsx"
import Home from "./pages/Home"
import LayoutLogin from "./layouts/LayoutLogin.jsx"
import LayoutAdmin from "./layouts/LayoutAdmin.jsx"


function Rutas() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LayoutLogin/>}>
          <Route index element={<Login />} />
        </Route>
        <Route path="/Inicio" element={<LayoutAdmin/>}>
          <Route index element={<Home />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default Rutas
