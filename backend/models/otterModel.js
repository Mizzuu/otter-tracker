const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const otterSchema = new Schema({
    name: { type: String, required: true, maxLength: 30 },
    description: { type: String, required: true, maxLength: 256 },
});

module.exports = mongoose.model("Otter", otterSchema);
// module.exports = Otter;
