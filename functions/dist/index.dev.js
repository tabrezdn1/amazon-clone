"use strict";

var functions = require('firebase-functions');

var express = require("express");

var cors = require("cors");

var stripe = require("stripe")("sk_test_51HgEpWLQqQ9kS09vxA0BYust9fstSTEi9uWnOlaUxOIFPPzqnSSwig6FTT5yEMdtaYCH9JQ665HgJAtaiLWX3aqT00iUDZUptk"); // API
// App config


var app = express(); // Middlewares

app.use(cors({
  origin: true
}));
app.use(express.json()); // API routes

app.get("/", function (request, response) {
  return response.status(200).send("hello world");
});
app.post("/payments/create", function _callee(request, response) {
  var total, paymentIntent;
  return regeneratorRuntime.async(function _callee$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          total = request.query.total;
          console.log('Payment request received', total);
          _context.next = 4;
          return regeneratorRuntime.awrap(stripe.paymentIntent.create({
            amount: total,
            current: "inr"
          }));

        case 4:
          paymentIntent = _context.sent;
          // Ok created something so 201
          response.status(201).send({
            clientSecret: paymentIntent.client_secret
          });

        case 6:
        case "end":
          return _context.stop();
      }
    }
  });
});
app.get("/test", function (request, response) {
  return response.status(200).send("API testing");
}); // Listen command

exports.api = functions.https.onRequest(app);