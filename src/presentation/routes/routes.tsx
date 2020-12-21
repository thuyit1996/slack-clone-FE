import React, { useEffect } from "react"
import { BrowserRouter } from "react-router-dom"
import ProductRoutes from "./ProductRoutes"
import LoginRoutes from "./LoginRoutes"
import HomeRoutes from "./HomeRoutes"
import { initApp } from "../redux/general/action"
import { connect } from "react-redux"

const mapDispatchToProps = {
  initApp
}

const connector = connect(null, mapDispatchToProps)

const Routes = ({ initApp }) => {
  useEffect(() => {
    initApp()
  }, [initApp])

  return (
    <BrowserRouter>
      <HomeRoutes />
      <ProductRoutes />
      <LoginRoutes />
    </BrowserRouter>
  )
}

export default connector(Routes)