import React from "react"
import {
  makeStyles,
  ThemeProvider,
  createMuiTheme,
} from "@material-ui/core/styles"
import { Typography, Button } from "@material-ui/core"
import { headerData } from "../data/introData"
import { navigate } from "gatsby"

const theme = createMuiTheme({
  palette: {
    primary: {
      main: "#FD951D",
    },
  },
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 960,
      lg: 1260,
      xl: 1860,
    },
  },
})

const useStyles = makeStyles({
  heading: {
    padding: "150px 10px 0px 80px",
    marginRight: "400px",
    fontWeight: 700,
    fontFamily: "Merriweather",
    [theme.breakpoints.up("xl")]: {
      fontSize: "10rem",
      padding: "120px 1000px 0px 50px",
      marginRight: "1000px",
    },
    [theme.breakpoints.down("xl")]: {
      fontSize: "7rem",
      padding: "120px 0px 0px 50px",
    },
    [theme.breakpoints.down("md")]: {
      fontSize: "4rem",
      padding: "100px 0px 0px 20px",
      marginRight: 0,
    },
    [theme.breakpoints.down("sm")]: {
      fontSize: "4rem",
      padding: "90px 0px 0px 20px",
      marginRight: 0,
    },
    [theme.breakpoints.down("xs")]: {
      fontSize: "3rem",
      padding: "90px 0px 0px 20px",
      marginRight: 0,
    },
    wordBreak: "break-word",
  },
  intro: {
    paddingLeft: "80px",
    paddingRight: "10px",
    color: "#665D59",
    width: "650px",
    [theme.breakpoints.up("xl")]: {
      paddingLeft: "50px",
      marginRight: "50%",
      width: "inherit",
      fontSize: "2.5rem",
    },
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
    [theme.breakpoints.up("xl")]: {
      marginLeft: "50px",
      fontSize: "2rem",
    },
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
          onClick={_ => navigate("/pricing")}
        >
          Tour Packages
        </Button>
      </ThemeProvider>
    </>
  )
}

export default Heading
