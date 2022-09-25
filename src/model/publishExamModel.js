const mongoose = require('mongoose');
const ObjectId = mongoose.Schema.Types.ObjectId

const publishSchema = new mongoose.Schema(
    {
        classId: {
            required: true,
            type: ObjectId,
            ref: 'class'
           
        },

        examId: {
            required: true,
            type: ObjectId,
            ref: 'creat-exam'
        },

        isDeleted: {
            type: Boolean,
            default: false
        }
    },
    { timestamps: true }
);

module.exports = mongoose.model("publish-exam", publishSchema);