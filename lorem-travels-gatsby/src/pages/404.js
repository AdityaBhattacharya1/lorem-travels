import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"

const ErrorHeading = styled.main`
  display: flex;
  justify-content: center;
  align-items: center;
  padding-top: 40px;
  font-family: "Poppins", sans-serif;
`

const StyledLink = styled(props => <Link {...props} />)`
  color: black !important;
  text-decoration: underline !important;
  display: flex;
  justify-content: center;
  align-items: center;
  padding-top: 40px;
`

function PageNotFound() {
  return (
    <>
      <ErrorHeading>
        <h1>Oops! Looks like the link you tried to reach does not exist.</h1>
        <br />
      </ErrorHeading>
      <StyledLink to="/">Redirect to homepage</StyledLink>
    </>
  )
}

export default PageNotFound
