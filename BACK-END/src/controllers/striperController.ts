import { Request, Response } from 'express'
import Stripe from 'stripe'
import { stripe } from '../stripe'

class StripeController {

    async list(request: Request, response: Response) {
        try {

            const products = await stripe.products.list({
                ids: ['prod_MzHw2CnxnhLPfj'],
                expand: ['data.default_price']
            })

            const data = products.data[0]
            const price = products.data[0].default_price as Stripe.Price

            const product = {
                id: data.id,
                name: data.name,
                price_id: price.id,
                price: Number(price.unit_amount) / 100,
                image: data.images[0]
            }
            return response.status(200).json(product)
        }
        catch (err) {
            console.log(err)
            response.sendStatus(500)
        }

    }

    async checkout(request: Request, response: Response) {
        const { price_id, amount } = request.body


        try {
            const checkout = await stripe.checkout.sessions.create({

                cancel_url: 'http://localhost:5173/',
                success_url: 'http://localhost:5173/',
                mode : 'payment',
                line_items: [{
                    price: price_id,
                    quantity: Number(amount)
                }]
            })

            const checkoutURL = checkout.url

            return response.status(201).json({ checkoutURL })

        } catch (err) {
            console.log(err)
            response.sendStatus(500)
        }

    }
}

const striperController = new StripeController()

export { striperController }
