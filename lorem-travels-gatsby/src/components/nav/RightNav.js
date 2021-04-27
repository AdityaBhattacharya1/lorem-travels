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
  @media screen and (min-height: 1000px) {
    height: 100%;
  }
`

const RightNav = ({ open }) => {
  return (
    <Ul open={open}>
      <li>
        <AniLink cover direction="left" bg="#A08A83" duration={2} to="/">
          Home
        </AniLink>
      </li>
      <li>
        <Link to="/#how-it-works">How it works</Link>
      </li>
      <li>
        <AniLink cover direction="left" bg="#A08A83" duration={2} to="/pricing">
          Packages & Pricing
        </AniLink>
      </li>
      <li>
        <Link to="/pricing/#testimonials">Testimonials</Link>
      </li>
    </Ul>
  )
}

export default RightNav
