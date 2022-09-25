const express = require('express');
const router = express.Router();


const classController = require("../controller/classController")
const examController = require("../controller/examController")
const studentController = require("../controller/studentController")
const resultController = require("../controller/resultController")




router.post("/class/createClass", classController.createClass)

router.post("/exam/createExam",examController.createExam)

router.get("/exam/Getallclassexam/:examId",examController.GetAllClassExam)

router.post("/students/createStudent",studentController.createStudent)

router.post("/result/createresult", resultController.createresult)

router.post("/result/createresult", resultController.createresult)

router.get("/result/:classId/:examId/:studentId", resultController.GetOneStudentResult)

router.get("/result/:classId", resultController.GetAllStudentPerticularClassResult)

router.get("/result/:resultId", resultController.GetResultById)

router.get("/result/:examId", resultController.GetAllResultPerticularUnitTest)

router.get("/result/allresult", resultController.GetAllResultWithAllUnitTest)

router.get("/result/subjetclass", resultController.GetAllResultWithPerticularClassWithPerticularSubject)



module.exports = router;