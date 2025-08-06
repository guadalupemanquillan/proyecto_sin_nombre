const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  nombre: {
    type: String,
  },
  nombreCompleto: {
    type: Number,
  },
  roles: {
    type: String,
    enum: ["usuario", "editor"],
  },
  password: {
    type: String,
  },
});

const User = mongoose.model("User", userSchema);
module.exports = User;
