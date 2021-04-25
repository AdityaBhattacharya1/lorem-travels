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
    </section>
  )
}

export default IntroSection
