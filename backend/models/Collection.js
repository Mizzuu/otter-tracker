const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const collectionSchema = new Schema({
    aqua: { type: String, required: true, maxLength: 30 },
    chosenOtter: { type: String, required: true },
    imgURL: { type: String },
});

const Collection = mongoose.model("Collection", collectionSchema);
module.exports = Collection;
