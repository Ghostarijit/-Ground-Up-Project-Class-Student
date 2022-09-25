const mongoose = require('mongoose');
const ObjectId = mongoose.Schema.Types.ObjectId

const examSchema = new mongoose.Schema(
    {
        UnitTest: {
            required: true,
            type: Number,
           
        },

        examDate: {
            required: true,
            type: String,
            max: 50,
        },

        isDeleted: {
            type: Boolean,
            default: false
        }
    },
    { timestamps: true }
);

module.exports = mongoose.model("creat-exam", examSchema);