const mongoose = require('mongoose');
const ObjectId = mongoose.Schema.Types.ObjectId

const studentSchema = new mongoose.Schema(
    {
        subname: {
            required: true,
            type: String


        },
        classId: {
            required: true,
            type: ObjectId,
            ref: 'class'
        },

        isDeleted: {
            type: Boolean,
            default: false
        }
    },
    { timestamps: true }
);

module.exports = mongoose.model("student", studentSchema);