import Stripe from 'stripe'
import * as dotenv from 'dotenv'
dotenv.config()

const secretKey = process.env.STRIPE_SECRET_KEY as string

const stripe = new Stripe(secretKey, {
    apiVersion: '2022-11-15',
})


export { stripe }
