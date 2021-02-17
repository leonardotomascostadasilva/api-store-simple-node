"use strict";

const express = require("express");
const router = express.Router();

const route = router.get("/", (_req, res, next) => {
  res.status(200).send({
    title: "Node Store API",
    version: "0.0.5",
  });
});

module.exports = router;
