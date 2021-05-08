import React from "react"
import AniLink from "gatsby-plugin-transition-link/AniLink"
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
import PricingBtn from "./PricingBtn"
import ShoppingBasketRoundedIcon from "@material-ui/icons/ShoppingBasketRounded"
import { useMediaQuery } from "react-responsive"

const theme = createMuiTheme({
  palette: {
    primary: {
      main: "#04295c",
    },
  },
  breakpoints: {
    values: {
      sm: 700,
      xl: 1920,
    },
  },
})

const useStyles = makeStyles({
  root: {
    maxWidth: 450,
    margin: "40px 10px",
    backgroundColor: "#FEF5DD",
    borderRadius: "20px",
    [theme.breakpoints.down("sm")]: {
      margin: "40px 0px",
    },
  },
  media: {
    height: 250,
  },
  cardTitle: {
    fontFamily: "Poppins",
    fontWeight: 700,
    color: "#04295c",
    [theme.breakpoints.up("xl")]: {
      fontSize: "1.75rem",
    },
  },
  cardDetails: {
    [theme.breakpoints.up("xl")]: {
      fontSize: "1.5rem",
    },
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
  const isExtraLargeScreen = useMediaQuery({ query: "(min-width: 1920px)" })

  return (
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia className={classes.media} image={imgLink} title={title} />
        <CardContent>
          <Typography
            gutterBottom
            variant="h5"
            component="h2"
            className={classes.cardTitle}
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
            className={classes.cardDetails}
          >
            {details}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <ThemeProvider theme={theme}>
          <PricingBtn
            priceURL={priceURL}
            price={price}
            size={isExtraLargeScreen ? 3 : 4}
            icon={<ShoppingBasketRoundedIcon />}
          />
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
