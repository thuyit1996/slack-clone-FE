import React, { useEffect } from "react"
import { connect, ConnectedProps } from "react-redux"
import { useHistory } from "react-router-dom"
import { LogoutIcon } from "./Header.styles"
import { PATH } from "@/shared/constants/paths"
import HeaderSearchBar from "../HeaderSearchBar"
import HeaderUserProfile from "../HeaderUserProfile"

const mapStateToProps = state => ({})

const mapDispatchToProps = {
}

const connector = connect(mapStateToProps, mapDispatchToProps)

interface Props extends ConnectedProps<typeof connector> { }

const Header = (props: Props) => {
  // const { logout, toggleSideNav } = props
  const history = useHistory()
  const handleLogout = () => {
    // logout()
    history.push(PATH.LOGIN)
  }
  useEffect(() => { }, [history])

  return (
    <header className="app-header">
      <HeaderSearchBar />
      <HeaderUserProfile />
    </header>
  )
}

export default connector(Header)
