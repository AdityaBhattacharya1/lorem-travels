import { loadStripe } from "@stripe/stripe-js"

let stripePromise
const getStripe = () => {
  if (!stripePromise) {
    stripePromise = loadStripe(
      "pk_test_51IlBKHSIQ5tys5IhoScOGrH9q4lN3TaYHDzrAMis9wGOdz9Jq673bmVEaDT4gTpK1kAKyTsaG2zOrs0m6X4mN605003N49hEzC"
    )
  }
  return stripePromise
}

export default getStripe
