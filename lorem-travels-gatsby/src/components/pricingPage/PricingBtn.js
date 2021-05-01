import React, { useState } from "react"
import getStripe from "../../utils/stripejs"
import { Button } from "@material-ui/core"

function PricingBtn({ priceURL, price, size, variant, icon }) {
  const [loading, setLoading] = useState(false)
  const CustomHeader = `h${size}`

  const redirectToCheckout = async event => {
    event.preventDefault()
    setLoading(true)

    const stripe = await getStripe()
    const { error } = await stripe.redirectToCheckout({
      mode: "payment",
      lineItems: [{ price: priceURL, quantity: 1 }],
      successUrl: process.env.SUCCESS_URL || `https://lorem-travels.vercel.app`, // If there exist no SUCCESS_URL, redirect to default
      cancelUrl:
        process.env.CANCEL_URL || `https://lorem-travels.vercel.app/pricing`,
    })

    if (error) {
      console.warn("Error:", error)
      setLoading(false)
    }
  }

  return (
    <Button
      size="small"
      color="primary"
      variant={variant}
      disabled={loading}
      style={{ fontWeight: 600 }}
      onClick={redirectToCheckout}
      startIcon={icon}
    >
      <CustomHeader>{price} - Purchase</CustomHeader>
    </Button>
  )
}

export default PricingBtn
