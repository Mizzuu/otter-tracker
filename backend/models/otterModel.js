const mongoose = require("mongoose");

const otterSchema = mongoose.Schema(
    {
        text: {
            type: "string",
            required: [true, "Please add a text value"],
        },
    },
    {
        timestamps: true,
    }
);

module.exports = mongoose.model("Otter", otterSchema);
