const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const { allData, post } = require("../Controller/inputController.js");

const app = express();
//Middleware
app.use(express.json());
app.use(cors());


app.get("/alldata", allData);
app.post("/upload", post);

module.exports = app;