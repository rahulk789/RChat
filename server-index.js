// index.js

const express = require("express")
const helmet = require("helmet")

const PORT = process.env.PORT || 4099

const app = express()

// enabling the Helmet middleware
app.use(helmet())

app.use(express.static(__dirname));
app.get("/", (req, res) => {
  res.sendFile(__dirname + "/index.html");
});

// running the server
app.listen(PORT, () => {
    console.log(`Starting Express server on http://localhost:${PORT}`)
})/*
const express = require("express");
const helmet = require("helmet")

const app = express();
app.use(express.static(__dirname));
app.get("/", (req, res) => {
  res.sendFile(__dirname + "/index.html");
});
const PORT = process.env.PORT || 4099


// Creating https server by passing
app.use(helmet());
app.listen(PORT, function (req, res) {
  console.log("Server started at port 4099");
});
*/
