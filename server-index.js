const express = require("express");
const https = require("https");
const http = require("http");
const fs = require("fs");
var express_waf_middleware = require('express-waf-middleware');

const app = express();
// serve your css as static
app.use(express.static(__dirname));

var waf_options = {
    url: 1, //detect the url,1:enable,0:disable,below,the same
    id: 1,
    userAgent: 1,   //detect the user-agent
    cookies: 1, //detect the cookies
    body: 1,    //detect the body
    log: 1  //print log informaton
}
app.use(express_waf_middleware(waf_options));
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
  console.log("Server started at port 4099");
});
