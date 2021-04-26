// TODO: add individual "read more" pages for each package which reads data from a js file

import React from "react"
import {
  makeStyles,
  ThemeProvider,
  createMuiTheme,
} from "@material-ui/core/styles"
import {
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  CardMedia,
  Button,
  Typography,
} from "@material-ui/core"
import { Link } from "gatsby"

const theme = createMuiTheme({
  palette: {
    primary: {
      main: "#04295c",
    },
  },
})

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
    margin: "40px 10px",
    backgroundColor: "#FEF5DD",
    borderRadius: "20px",
  },
  media: {
    height: 250,
  },
})

function PricingCard({ title, details, price, imgLink }) {
  const classes = useStyles()

  return (
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia className={classes.media} image={imgLink} title={title} />
        <CardContent>
          <Typography
            gutterBottom
            variant="h5"
            component="h2"
            style={{ fontFamily: "Poppins", fontWeight: 700, color: "#04295c" }}
          >
            {title}
          </Typography>
          <Typography
            variant="body2"
            color="textSecondary"
            component="p"
            style={{
              color: "#7E7673",
              fontFamily: "Poppins",
              color: "#04295c",
            }}
          >
            {details}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <ThemeProvider theme={theme}>
          <Button size="small" color="primary" style={{ fontWeight: 600 }}>
            {price} - Purchase
          </Button>
          <Button size="small" color="primary">
            <a href={imgLink} style={{ color: "#04295c" }}>
              View Image
            </a>
          </Button>
        </ThemeProvider>
      </CardActions>
    </Card>
  )
}

export default PricingCard
