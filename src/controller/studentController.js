const classModel = require("../model/classModel")
const studentModel = require("../model/studentModel")



const createStudent = async function (req, res) {
    try {
        const data = req.body
        //  data validation  

        if (!data || Object.keys(data).length === 0) return res.status(400).send({ status: false, msg: "plz enter some data" })

        let { name,age,DOB,classId, isDeleted } = data


      
          let check = await classModel.findById(classId)

        let student = await studentModel.create(data)


        return res.status(201).send({ status: true, data: `Student ${name} Joined for this  ${check.className}` })



    } catch (err) {
        res.status(500).send({ status: "error", error: err.message })
    }
} 

module.exports.createStudent = createStudent