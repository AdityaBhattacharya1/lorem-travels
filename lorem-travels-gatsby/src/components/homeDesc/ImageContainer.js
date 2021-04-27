import React from "react"
import { useMediaQuery } from "react-responsive"
import { StaticImage } from "gatsby-plugin-image"

function ImageContainer() {
  const isTabletOrMobile = useMediaQuery({ query: "(max-width: 1279px)" })
  return (
    <div>
      {!isTabletOrMobile ? (
        <StaticImage
          src="../../images/house-img.webp"
          alt="Home image"
          style={{
            maxHeight: "100%",
            maxWidth: "100%",
            position: "absolute",
            top: "10%",
            right: "0%",
            zIndex: -1,
            opacity: 1,
            paddingBottom: "10px",
          }}
        />
      ) : (
        <div></div>
      )}
    </div>
  )
}

export default ImageContainer
