const Razorpay = require("razorpay");
require("dotenv").config();

var instance = new Razorpay({
  key_id: process.env.YOUR_KEY_ID,
  key_secret: process.env.YOUR_KEY_SECRET,
  headers: { "X-Razorpay-Account": "acc_Ef7ArAsdU5t0XL" },
});
