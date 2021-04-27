import React from "react"
import {
  makeStyles,
  ThemeProvider,
  createMuiTheme,
} from "@material-ui/core/styles"
import { Typography, Button } from "@material-ui/core"
import { Link } from "gatsby"
import { headerData } from "../data/introData"

const theme = createMuiTheme({
  palette: {
    primary: {
      main: "#FD951D",
    },
  },
})

const useStyles = makeStyles({
  heading: {
    padding: "150px 0px 0px 80px",
    fontWeight: 700,
    fontFamily: "Merriweather",
    [theme.breakpoints.down("md")]: {
      fontSize: "5rem",
      padding: "100px 0px 0px 20px",
    },
    [theme.breakpoints.down("sm")]: {
      fontSize: "2rem",
      padding: "90px 0px 0px 20px",
    },
    wordBreak: "break-word",
  },
  intro: {
    paddingLeft: "80px",
    paddingRight: "10px",
    color: "#665D59",
    width: "650px",
    [theme.breakpoints.down("md")]: {
      paddingLeft: "20px",
      width: "inherit",
    },
    [theme.breakpoints.down("sm")]: {
      paddingLeft: "20px",
    },
  },
  heroBtn: {
    margin: "50px 80px",
    padding: "20px 45px",
    color: "#fff",
    borderRadius: "13px",
    fontFamily: "Poppins",
    [theme.breakpoints.down("md")]: {
      margin: "50px 20px",
    },
  },
})

function Heading() {
  const classes = useStyles()
  return (
    <>
      <Typography
        variant="h1"
        gutterBottom
        align="left"
        className={classes.heading}
      >
        {headerData.title}
      </Typography>

      <Typography variant="h6" className={classes.intro}>
        {headerData.desc}
      </Typography>
      <ThemeProvider theme={theme}>
        <Button
          className={classes.heroBtn}
          variant="contained"
          color="primary"
          size="large"
        >
          <Link style={{ fontSize: 12 }} to="/pricing">
            Tour Packages
          </Link>
        </Button>
      </ThemeProvider>
    </>
  )
}

export default Heading
