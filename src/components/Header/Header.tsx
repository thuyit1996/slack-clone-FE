import React, { useEffect } from "react"
import { connect, ConnectedProps } from "react-redux"
import { logout, toggleSideNav } from "@/App/App.actions"
import { useHistory } from "react-router-dom"
import { LogoutIcon } from "./Header.styles"
import { PATH } from "@/constants/paths"
import HeaderSearchBar from "../HeaderSearchBar"
import HeaderUserProfile from "../HeaderUserProfile"

const mapStateToProps = state => ({})

const mapDispatchToProps = {
  logout,
  toggleSideNav
}

const connector = connect(mapStateToProps, mapDispatchToProps)

interface Props extends ConnectedProps<typeof connector> {}

const Header = (props: Props) => {
  const { logout, toggleSideNav } = props
  const history = useHistory()
  const handleLogout = () => {
    logout()
    history.push(PATH.LOGIN)
  }
  useEffect(() => {}, [history])

  return (
    <header className="app-header">
      <HeaderSearchBar />
      <HeaderUserProfile />
    </header>
  )
}

export default connector(Header)
