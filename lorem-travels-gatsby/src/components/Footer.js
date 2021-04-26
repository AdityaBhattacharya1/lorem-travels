import React from "react"
import { AppBar, Container, Toolbar, Typography } from "@material-ui/core"

function Footer() {
  return (
    <AppBar position="static" style={{ backgroundColor: "#FD951D" }}>
      <Container maxWidth="md">
        <Toolbar>
          <Typography
            variant="body1"
            color="inherit"
            style={{ fontFamily: "Poppins" }}
          >
            &copy; 2021, Lorem Travels -
            <a href="https://github.com/AdityaBhattacharya1">
              Made by Aditya Bhattacharya
            </a>
          </Typography>
        </Toolbar>
      </Container>
    </AppBar>
  )
}
export default Footer
