const mongoose = require('mongoose');
const ObjectId = mongoose.Schema.Types.ObjectId

const studentSchema = new mongoose.Schema(
    {
        name: {
            required: true,
            type: String
            
           
        },
        age: {
            required: true,
            type: String,
            
           
        },
        DOB: {
            required: true,
            type: String,
            
           
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