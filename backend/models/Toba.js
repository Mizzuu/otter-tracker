const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const tobaSchema = new Schema({
    name: { type: String, required: true, maxLength: 30 },
    age: { type: Number },
    gender: { type: String, required: true },
    description: { type: String, required: true },
    img: { type: String, required: true },
});

const Toba = mongoose.model("Toba", tobaSchema);
module.exports = Toba;
