const express = require("express");
const logger = require("morgan");
const cors = require("cors");

module.exports = (app) => {
  app.set("trust proxy", 1);
  app.use(
    cors({
      origin: process.env.ORIGIN || "http://localhost:5173",
      credentials: true,
    })
  );

  app.use(logger("dev"));
  app.use(express.json());
};
