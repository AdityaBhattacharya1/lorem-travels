import React from "react"
import { useMediaQuery } from "react-responsive"
import { StaticImage } from "gatsby-plugin-image"

function ImageContainer() {
  const isTabletOrMobile = useMediaQuery({ query: "(max-width: 1279px)" })
  return (
    <aside>
      {/* 
          Since the static image takes up space and prevents heading and the section container from sticking together,
          we return an empty div. If null, react fragment or undefined is returned, then there would be no component
          to style and the two sections would clash on smaller screens.
      */}

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
    </aside>
  )
}

export default ImageContainer
