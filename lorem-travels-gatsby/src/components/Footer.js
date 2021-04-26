import React from "react"
import { AppBar, Container, Toolbar, Typography } from "@material-ui/core"

function Footer() {
  return (
    <AppBar position="static" style={{ backgroundColor: "#A08A83" }}>
      <Container maxWidth="md">
        <Toolbar>
          <Typography
            variant="body1"
            color="inherit"
            style={{ fontFamily: "Poppins" }}
          >
            &copy; 2021, Lorem Travels - Made by Aditya Bhattacharya
          </Typography>
        </Toolbar>
      </Container>
    </AppBar>
  )
}
export default Footer
