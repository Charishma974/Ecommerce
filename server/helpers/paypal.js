const paypal = require("paypal-rest-sdk");

paypal.configure({
  mode: "sandbox", // or "live"
  client_id: "your-client-id",
  client_secret: "your-client-secret",
});

module.exports = paypal;
