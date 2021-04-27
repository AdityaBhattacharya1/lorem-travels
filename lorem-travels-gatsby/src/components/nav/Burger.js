import React, { useState } from "react"
import styled from "styled-components"
import RightNav from "./RightNav"

const StyledBurger = styled.div`
  width: 2rem;
  height: 2rem;
  position: fixed;
  top: 10px;
  right: 20px;
  z-index: 20;
  display: flex;
  justify-content: space-around;
  flex-flow: column nowrap;
  cursor: pointer;

  div {
    width: 2rem;
    height: 0.23rem;
    background-color: ${({ open }) => (open ? "#fff" : "#a08a83")};
    border-radius: 25%;
    transform-origin: 1px;
    transition: all 0.3s linear;

    &:nth-child(1) {
      transform: ${({ open }) => (open ? "rotate(35deg)" : "rotate(0)")};
    }

    &:nth-child(2) {
      transform: ${({ open }) => (open ? "rotate(-35deg)" : "rotate(0)")};
    }
  }
`

const Burger = () => {
  const [open, setOpen] = useState(false)

  return (
    <>
      <StyledBurger open={open} onClick={() => setOpen(!open)}>
        <div />
        <div />
      </StyledBurger>
      <RightNav open={open} />
    </>
  )
}
export default Burger
