
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
})
