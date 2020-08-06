const express = require("express");

const app = express();

app.use(express.json());

const projects = [];

app.get("/projects", (req, res) => {
  //
});

app.post("/projects", (req, res) => {
  //
});

module.exports = app;
