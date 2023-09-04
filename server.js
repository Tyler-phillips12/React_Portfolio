const express = require("express");
const bodyParser = require("body-parser");

const app = express();
const port = process.env.PORT || 3000;

app.use(bodyParser.json());

app.post("/send-message", (req, res) => {
  const { name, email, message } = req.body;

  // Do something with the user's message, e.g., log it or store it in a database
  console.log("Received message from:", name);
  console.log("Email:", email);
  console.log("Message:", message);

  res.status(200).send("Message received successfully.");
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

