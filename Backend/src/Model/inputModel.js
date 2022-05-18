const mongoose = require("mongoose");

const inputSchema = new mongoose.Schema({
  string: {
    type: "string",
    required: true,
  },
});

module.exports = mongoose.model("string", inputSchema);