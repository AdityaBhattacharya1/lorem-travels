import React from "react"
import { AppBar, Container, Toolbar, Typography } from "@material-ui/core"
import { makeStyles, createTheme } from "@material-ui/core/styles"
import styled from "styled-components"

const StyledLink = styled.a`
  border-bottom: 2px dotted white;
`

const theme = createTheme({})

const useStyles = makeStyles({
  footerText: {
    fontFamily: "Poppins",
    [theme.breakpoints.up("xl")]: {
      fontSize: "25px",
    },
    [theme.breakpoints.down("sm")]: {
      fontSize: "15px",
    },
    [theme.breakpoints.down("xs")]: {
      fontSize: "10px",
    },
  },
})

function Footer() {
  const classes = useStyles()
  return (
    <AppBar position="static" style={{ backgroundColor: "#FD951D" }}>
      <Container maxWidth="md">
        <Toolbar>
          <Typography
            variant="body1"
            color="inherit"
            className={classes.footerText}
          >
            &copy; 2021, Lorem Travels -
            <StyledLink
              href="https://github.com/AdityaBhattacharya1"
              target="_blank"
              rel="noopener"
              aria-label="Link to the author's (Aditya Bhattacharya's) Github page"
              role="contentinfo"
            >
              Made by Aditya Bhattacharya
            </StyledLink>
          </Typography>
        </Toolbar>
      </Container>
    </AppBar>
  )
}
export default Footer
