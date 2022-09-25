
const classModel = require("../model/classModel")
const examModel = require("../model/examModel")
const publishExamModel = require("../model/publishExamModel")
const resultModel = require("../model/resultModel")



const createresult = async function (req, res) {
    try {
        const data = req.body
        //  data validation  

        if (!data || Object.keys(data).length === 0) return res.status(400).send({ status: false, msg: "plz enter some data" })

        let { classId, examId, studentId, isDeleted } = data





        let result = await resultModel.create(data)


        return res.status(201).send({ status: true, data: result })



    } catch (err) {
        res.status(500).send({ status: "error", error: err.message })
    }
}

const GetOneStudentResult = async function (req, res) {
    try {
        const classId = req.params.classId
        const examId = req.params.examId
        const studentId = req.params.studentId
        //  data validation  





        //let exam = await resultModel.findById(examId)
        let clas = await resultModel.find({ examId: examId, classId: classId, studentId: studentId })




        return res.status(201).send({ status: true, data: clas })



    } catch (err) {
        res.status(500).send({ status: "error", error: err.message })
    }
}

const GetAllStudentPerticularClassResult = async function (req, res) {
    try {
        const classId = req.params.classId

        //  data validation  









        //let exam = await resultModel.findById(examId)
        let clas = await resultModel.find({ classId: classId })




        return res.status(201).send({ status: true, data: clas })



    } catch (err) {
        res.status(500).send({ status: "error", error: err.message })
    }
}

const GetResultById = async function (req, res) {
    try {
        const resultId = req.params.resultId








        //let exam = await resultModel.findById(examId)
        let clas = await resultModel.findOne({ _id: resultId })




        return res.status(201).send({ status: true, data: clas })



    } catch (err) {
        res.status(500).send({ status: "error", error: err.message })
    }
}

const GetAllResultPerticularUnitTest = async function (req, res) {
    try {
        const examId = req.params.examId

        //  data validation  

        // i just skip validation






        //let exam = await resultModel.findById(examId)
        let clas = await resultModel.findOne({ examId: examId })




        return res.status(201).send({ status: true, data: clas })



    } catch (err) {
        res.status(500).send({ status: "error", error: err.message })
    }
}


const GetAllResultWithAllUnitTest = async function (req, res) {
    try {


        //  data validation  

        if (!data || Object.keys(data).length === 0) return res.status(400).send({ status: false, msg: "plz enter some data" })






        //let exam = await resultModel.findById(examId)
        let clas = await resultModel.find()




        return res.status(201).send({ status: true, data: clas })



    } catch (err) {
        res.status(500).send({ status: "error", error: err.message })
    }
}


const GetAllResultWithPerticularClassWithPerticularSubject = async function (req, res) {
    try {


        const data = req.body
        //  data validation  

        if (!data || Object.keys(data).length === 0) return res.status(400).send({ status: false, msg: "plz enter some data" })

        let { classId, english, bengali, math, biology, physics, chemistry, history, geography, socialscince } = data


        let check = await classModel.findOne({ _id: classId, $or: [{ english: english?.trim() }, { bengali: bengali?.trim() }, { math: math?.trim() }, { biology: biology?.trim() }, { physics: physics?.trim() }, { chemistry: chemistry?.trim() }, { history: history?.trim() }, { geography: geography?.trim() }, { socialscince: socialscince?.trim() }] })

        if (!check) return res.status(401).send({ status: true, data: `Subject Not aveliable for this ${check.className}` })

        let clas = await resultModel.find({ classId: classId, $or: [{ english: english?.trim() }, { bengali: bengali?.trim() }, { math: math?.trim() }, { biology: biology?.trim() }, { physics: physics?.trim() }, { chemistry: chemistry?.trim() }, { history: history?.trim() }, { geography: geography?.trim() }, { socialscince: socialscince?.trim() }] })




        return res.status(201).send({ status: true, data: clas })



    } catch (err) {
        res.status(500).send({ status: "error", error: err.message })
    }
}
module.exports.createresult = createresult

module.exports.GetOneStudentResult = GetOneStudentResult

module.exports.GetAllStudentPerticularClassResult = GetAllStudentPerticularClassResult

module.exports.GetResultById = GetResultById

module.exports.GetAllResultPerticularUnitTest = GetAllResultPerticularUnitTest

module.exports.GetAllResultWithAllUnitTest = GetAllResultWithAllUnitTest

module.exports.GetAllResultWithPerticularClassWithPerticularSubject = GetAllResultWithPerticularClassWithPerticularSubject

