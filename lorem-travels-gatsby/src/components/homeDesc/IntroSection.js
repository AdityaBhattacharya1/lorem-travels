import { Typography } from "@material-ui/core"
import React from "react"
import { makeStyles } from "@material-ui/core/styles"

const useStyles = makeStyles({
  introText: {
    padding: "150px 0px 0px 80px",
    fontSize: "3rem",
    fontWeight: 700,
    fontFamily: "Merriweather",
    color: "#04295C",
  },
  introSection: {
    backgroundColor: "#FEF5DD",
  },
})

function IntroSection() {
  const classes = useStyles()
  return (
    <section className={classes.introSection}>
      <Typography className={classes.introText}>Our Speciality</Typography>
      <Typography
        style={{
          display: "flex",
          alignContent: "center",
          justifyContent: "center",
        }}
      >
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Consectetur
        excepturi modi, magnam deleniti recusandae distinctio optio magni
        architecto ad neque. Ex laborum quas obcaecati mollitia aliquam
        doloremque alias! Quasi, dolor.
      </Typography>
    </section>
  )
}

export default IntroSection
