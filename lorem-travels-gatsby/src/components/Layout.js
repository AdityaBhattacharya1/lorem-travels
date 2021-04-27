import React from "react"
import Navbar from "./nav/Navbar"
import Footer from "./Footer"
import Helmet from "react-helmet"

function Layout({ children }) {
  return (
    <>
      <Helmet>
        <meta
          name="description"
          content="Lorem Travels - A fake travel agency"
        />
        <meta
          name="keywords"
          content="lorem, travels, lorem travels, fake travel agency"
        />
        <meta name="author" content="Aditya Bhattacharya" />
        <meta
          property="og:title"
          content="Lorem Travels - A fake travel agency"
        />
        {/* <meta property="og:image" content="" />
        <meta property="twitter:site" content="" /> */}
        <meta
          property="twitter:description"
          content="Lorem Travels - A fake travel agency"
        />
        <meta
          property="twitter:title"
          content="Lorem Travels - A fake travel agency"
        />
        {/* <meta property="twitter:image" content="" />
        <meta name="twitter:card" content="" /> */}
        <meta
          property="twitter:image:alt"
          content="Lorem Travels - A fake travel agency"
        />
        <title>Lorem Travels</title>
      </Helmet>
      <Navbar />
      {children}
      <Footer />
    </>
  )
}

export default Layout
