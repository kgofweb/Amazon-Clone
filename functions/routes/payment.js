const express = require('express')
const stripe = require('stripe')('sk_test_51Jn788DCsK0UZi0XVvRbcCvdHPKUnrewiWqFEyymoIOqCZ3Sw9BLLJ3zMfQoa0bETEopwy2Zcr3zy75NmZTls3dQ00HXTXOdTh')
const router = express.Router()

router.post('/payments/create', async (req, res) => {
  // total
  const total = req.query.total;

  console.log("Payment Request Recieved BOOM!!! for this amount >>> ", total)
  
  // Wait for confirmation of payment
  const paymentIntent = await stripe.paymentIntents.create({
    amount: total,
    currency: 'usd'
  })

  res.status(201).send({
    clientSecret: paymentIntent.client_secret,
  })
})

module.exports = router