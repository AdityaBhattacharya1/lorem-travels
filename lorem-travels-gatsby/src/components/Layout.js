import React from "react"
import Navbar from "./nav/Navbar"

function Layout({ children }) {
  return (
    <>
      <Navbar />
      {children}
    </>
  )
}

export default Layout
