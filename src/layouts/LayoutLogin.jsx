import React from "react"
import { Outlet } from "react-router-dom"

const LayoutLogin = () => {
  return(
    <div>
      <Outlet />
    </div>
  )
}

export default LayoutLogin