const express = require("express");
const app = express();
require("dotenv").config();
require("./db/index.js");

const loadMiddleware = require("./middleware/index.js");
const loadErrorHandling = require("./error-handling/error.handling.index.js");
const loadRoutes = require("./routes/index.routes.js");

loadMiddleware(app);
loadRoutes(app);
loadErrorHandling(app);

module.exports = app;
