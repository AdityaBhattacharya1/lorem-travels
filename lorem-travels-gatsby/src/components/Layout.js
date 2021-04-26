import React from "react"
import Navbar from "./nav/Navbar"
import Footer from "./Footer"

function Layout({ children }) {
  return (
    <>
      <Navbar />
      {children}
      <Footer />
    </>
  )
}

export default Layout
