const mongoose = require('mongoose');
const ObjectId = mongoose.Schema.Types.ObjectId

const resultSchema = new mongoose.Schema(
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
        studentId: {
            required: true,
            type: ObjectId,
            ref: 'student'
        },
        english: {
            type: Number
        },
        bengali: {
            type: Number
        },
        math: {
            type: Number
        },
        biology: {
            type: Number
        },
        physics: {
            type: Number
        },
        chemistry: {
            type: Number
        },
        history: {
            type: Number
        },
        geography: {
            type: Number
        },
        socialscince: {
            type: Number
        },
        isDeleted: {
            type: Boolean,
            default: false
        }
    },
    { timestamps: true }
);

module.exports = mongoose.model("result", resultSchema);