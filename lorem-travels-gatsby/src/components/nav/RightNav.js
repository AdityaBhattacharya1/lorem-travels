import React from "react"
import styled from "styled-components"
import { Link } from "gatsby"
import AniLink from "gatsby-plugin-transition-link/AniLink"

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
  width: 20%;
  padding-top: 3.5rem;
  transition: transform 0.3s ease-in-out;
  li {
    color: #fff;
    display: flex;
    justify-content: center;
    align-content: center;
  }
  z-index: 10 !important;
  @media screen and (min-height: 1000px) {
    height: 100%;
  }
  @media screen and (min-width: 1920px) {
    li {
      font-size: 1.5rem;
      padding: 30px 0px;
    }
  }
`

const RightNav = ({ open }) => {
  return (
    <Ul open={open} role="menu">
      <li role="menuitem">
        <AniLink cover direction="left" bg="#A08A83" duration={2} to="/">
          Home
        </AniLink>
      </li>
      <li role="menuitem">
        <Link to="/#how-it-works">How it works</Link>
      </li>
      <li role="menuitem">
        <AniLink cover direction="left" bg="#A08A83" duration={2} to="/pricing">
          Packages & Pricing
        </AniLink>
      </li>
      <li role="menuitem">
        <Link to="/pricing/#testimonials">Testimonials</Link>
      </li>
    </Ul>
  )
}

export default RightNav
