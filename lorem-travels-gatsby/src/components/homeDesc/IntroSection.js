import React from "react"
import { makeStyles } from "@material-ui/core/styles"
import styled from "styled-components"

const useStyles = makeStyles({
  introSection: {
    backgroundColor: "#FEF5DD",
  },
})

// 1. Gatsby styled component plugin seems to have a problem
// with Typography and other material-ui components
const IntroText = styled.h2`
  padding: 150px 0px 0px 80px;
  font-size: 3rem;
  font-weight: 700;
  color: #04295c;
  flex: 50%;
  padding-top: 50px;
  @media screen and (max-width: 820px) {
    padding-left: 10px;
  }
  @media screen and (min-width: 1920px) {
    font-size: 5rem;
  }
`

const IntroSectionContainer = styled.section`
  background-color: #fef5dd;
  display: flex;
  padding-bottom: 40px;
  padding-top: 20px;
  @media screen and (max-width: 780px) {
    display: flex;
    flex-direction: column;
    padding: 10px;
  }
`

const IntroSecondaryText = styled.p`
  flex: 50%;
  padding: 70px 10px;
  font-family: "Poppins";
  color: #04295c;
  font-weight: 600;

  @media screen and (min-width: 1920px) {
    font-size: 2rem;
  }
`

function IntroSection({ title, text }) {
  const classes = useStyles()
  return (
    <IntroSectionContainer className={classes.introSection}>
      <IntroText>{title}</IntroText>
      <IntroSecondaryText>{text}</IntroSecondaryText>
    </IntroSectionContainer>
  )
}

export default IntroSection
