import React, { useState } from "react"
import AniLink from "gatsby-plugin-transition-link/AniLink"
import getStripe from "../../utils/stripejs"

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

function PricingCard({
  title,
  details,
  price,
  imgLink,
  articleLink,
  priceURL,
}) {
  const classes = useStyles()
  const [loading, setLoading] = useState(false)

  const redirectToCheckout = async event => {
    event.preventDefault()
    setLoading(true)

    const stripe = await getStripe()
    const { error } = await stripe.redirectToCheckout({
      mode: "payment",
      lineItems: [{ price: priceURL, quantity: 1 }],
      successUrl: process.env.SUCCESS_URL,
      cancelUrl: process.env.CANCEL_URL,
    })

    if (error) {
      console.warn("Error:", error)
      setLoading(false)
    }
  }

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
          <Button
            size="small"
            color="primary"
            disabled={loading}
            style={{ fontWeight: 600 }}
            onClick={redirectToCheckout}
          >
            {price} - Purchase
          </Button>
          <Button size="small" color="primary">
            <AniLink
              to={articleLink}
              cover
              direction="left"
              bg="#A08A83"
              duration={1}
              style={{
                color: "#04295c",
                fontFamily: "Poppins",
                fontWeight: 600,
              }}
            >
              Read More
            </AniLink>
          </Button>
        </ThemeProvider>
      </CardActions>
    </Card>
  )
}

export default PricingCard
