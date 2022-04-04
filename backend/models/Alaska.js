const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const alaskaSchema = new Schema({
    name: { type: String, required: true, maxLength: 30 },
    age: { type: Number },
    gender: { type: String, required: true },
    description: { type: String, required: true, maxLength: 256 },
    img: { type: String, required: true },
});

const Alaska = mongoose.model("Alaska", alaskaSchema);
module.exports = Alaska;
