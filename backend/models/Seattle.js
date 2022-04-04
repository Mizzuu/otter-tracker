const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const seattleSchema = new Schema({
    name: { type: String, required: true, maxLength: 30 },
    age: { type: Number },
    gender: { type: String, required: true },
    description: { type: String, required: true, maxLength: 256 },
    img: { type: String, required: true },
});

const Seattle = mongoose.model("Seattle", seattleSchema);
module.exports = Seattle;
