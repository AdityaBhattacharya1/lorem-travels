import React from "react"
import styled from "styled-components"
import Burger from "./Burger"
import { Link } from "gatsby"
import { Typography } from "@material-ui/core"

const Nav = styled.nav`
  width: 100%;
  height: 55px;
  background: #fff;
  border-bottom: 2px solid #a08a83;
  z-index: 10;
  padding: 10px 20px;
  display: flex;
  justify-content: space-between;
  .logo {
    padding: 7px 0 0 15px;
    font-weight: 1000;
    font-size: 3vh;
  }
  position: fixed;
  top: 0;
  text-decoration: none;
  .logo-text {
    font-family: "Poppins", sans-serif;
    font-weight: 1000;
    color: #a08a83;
  }
`

const Navbar = () => {
  return (
    <Nav role="navigation">
      <div className="logo">
        <Link to="/">
          <Typography className="logo-text" gutterBottom paragraph={true}>
            Lorem Travels.
          </Typography>
        </Link>
      </div>
      <Burger />
    </Nav>
  )
}

export default Navbar
