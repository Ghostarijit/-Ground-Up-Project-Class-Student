const mongoose = require('mongoose');
const ObjectId = mongoose.Schema.Types.ObjectId

const classSchema = new mongoose.Schema(
    {
        className: {
            type: String,
            required: true,
        },
        SchoolName: {
            type:String,
            default: "Gobardanga High School"
        },
        isDeleted: {
            type: Boolean,
            default: false
        }
    },
    { timestamps: true }
);

module.exports = mongoose.model("class", classSchema);