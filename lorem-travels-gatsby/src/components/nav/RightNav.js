import React from "react"
import styled from "styled-components"
import { Link } from "gatsby"

const Ul = styled.ul`
  list-style: none;
  display: flex;
  li {
    padding: 18px 10px;
  }
  flex-flow: column nowrap;
  background-color: #a08a83;
  color: white;
  position: fixed;
  transform: ${({ open }) => (open ? "translateX(0)" : "translateX(100%)")};
  top: 0;
  right: 0;
  height: 1005px;
  width: 300px;
  padding-top: 3.5rem;
  transition: transform 0.3s ease-in-out;
  li {
    color: #fff;
    display: flex;
    justify-content: center;
    align-content: center;
  }
  z-index: 10 !important;
`

const RightNav = ({ open }) => {
  return (
    <Ul open={open}>
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="#how-it-works">How it works</Link>
      </li>
      <li>
        <Link to="/pricing">Packages & Pricing</Link>
      </li>
      <li>
        <Link to="/pricing/#testimonials">Testimonials</Link>
      </li>
    </Ul>
  )
}

export default RightNav
