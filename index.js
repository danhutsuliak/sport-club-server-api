const dotenv = require("dotenv");
dotenv.config();
const express = require("express");
const cors = require("cors")
const http = require('http');
const helmet = require("helmet");
const compression = require("compression")
const { config } = require('process');
const { port, allowedDomains } = require("./config");
const data = require("./data");

const app = express();

app.use(cors({ origin: allowedDomains }))

app.use(helmet())

app.use(compression())

const server = http.createServer(app);

app.get("/api", (req, res) => {
  res.json(data);
});

server.listen(port, () => {
  console.log(`Server listening on ${port}`);
});