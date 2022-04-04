const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const vancouverSchema = new Schema({
    name: { type: String, required: true, maxLength: 30 },
    age: { type: Number },
    gender: { type: String, required: true },
    description: { type: String, required: true },
    img: { type: String, required: true },
});

// module.exports = mongoose.model("Otter", otterSchema);
// module.exports = Otter;

const Vancouver = mongoose.model("Vancouver", vancouverSchema);
module.exports = Vancouver;
