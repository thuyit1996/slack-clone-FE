import React, { ReactNode } from "react"
import Header from "@/presentation/components/Header/Header"
import SideNav from "@/presentation/components/SideNav/SideNav"

interface Props {
  children: ReactNode
}

export default function MainLayout(props: Props) {
  const { children } = props
  return (
    <div className="app-layout">
      <Header />
      <main className="app-layout__container">
        <SideNav />
        <div className="content">{children}</div>
      </main>
    </div>
  )
}
