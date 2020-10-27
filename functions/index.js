const functions = require('firebase-functions');
const express = require("express");
const cors = require("cors");

const stripe = require("stripe")("sk_test_51HgEpWLQqQ9kS09vxA0BYust9fstSTEi9uWnOlaUxOIFPPzqnSSwig6FTT5yEMdtaYCH9JQ665HgJAtaiLWX3aqT00iUDZUptk")

// API

// App config
const app = express();

// Middlewares
app.use(cors({ origin: true }));
app.use(express.json());

// API routes
app.get("/", (request, response) => response.status(200).send("hello world"))

app.post("/payments/create", async (request, response) => {
    const total = request.query.total;
    console.log('Payment request received', total);

    const paymentIntent = await stripe.paymentIntent.create({
        amount: total,
        current: "inr"
    })

    // Ok created something so 201
    response.status(201).send({
        clientSecret: paymentIntent.client_secret,
    })
})

app.get("/test", (request, response) => response.status(200).send("API testing"))

// Listen command
exports.api = functions.https.onRequest(app);