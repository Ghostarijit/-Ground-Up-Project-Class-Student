
const classModel = require("../model/classModel")
const examModel = require("../model/examModel")
const publishExamModel = require("../model/publishExamModel")


const createExam = async function (req, res) {
    try {
        const data = req.body
        //  data validation  

        if (!data || Object.keys(data).length === 0) return res.status(400).send({ status: false, msg: "plz enter some data" })

        let { UnitTest,examDate, isDeleted } = data


      


        let classs = await classModel.create(data)


        return res.status(201).send({ status: true, data: classs })



    } catch (err) {
        res.status(500).send({ status: "error", error: err.message })
    }
}

const GetAllClassExam = async function (req, res) {
    try {
        const examId = req.params.examId
        //  data validation  

        if (!data || Object.keys(data).length === 0) return res.status(400).send({ status: false, msg: "plz enter some data" })

        let { UnitTest,examDate, isDeleted } = data


      


        let exam = await examModel.findById(examId)
        let clas = await publishExamModel.find({examId:examId})



        let Doc ={
            UnitTest: exam.UnitTest,
            ConductClassExam:clas

        }
        return res.status(201).send({ status: true, data: Doc })



    } catch (err) {
        res.status(500).send({ status: "error", error: err.message })
    }
}


module.exports.createExam = createExam

module.exports.GetAllClassExam = GetAllClassExam
