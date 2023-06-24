const express = require("express");
const https = require("https");
const http = require("http");
const fs = require("fs");

const app = express();

// serve your css as static
app.use(express.static(__dirname));

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/index.html");
});

// for SSL
const options = {
  key: fs.readFileSync("./certs/server.key"),
  cert: fs.readFileSync("./certs/server.pem"),
};
  
// Creating https server by passing
// options and app object
http.createServer(app)
.listen(4099, function (req, res) {
  console.log("Server started at port 3200");
});
