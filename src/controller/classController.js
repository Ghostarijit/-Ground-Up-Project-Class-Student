
const classModel = require("../model/classModel")
 /*let mysql = require('mysql')

 var con = mysql.createConnection({
    host:"localhost",
    user:"root",
    password:"A12345b#",
    database:"class"


 })*/


const createClass = async function (req, res) {
    try {
        const data = req.body
        //  data validation  

        if (!data || Object.keys(data).length === 0) return res.status(400).send({ status: false, msg: "plz enter some data" })

        let { className, isDeleted } = data

        /*con.connect(function(error){
            if(error) throw error
            var sql  = "INSURT INTO class(className,isDeleted) VALUES('"+className+"','"+isDeleted+"')"
            con.query(sql,function(err,result){
                if(err) throw err
                res.send({msg: result.insertId})
            })
         })*/ // sorry for that I dont know that much hands on mysql but it is in lerning phase
      


        let classs = await classModel.create(data)


        return res.status(201).send({ status: true, data: classs })



    } catch (err) {
        res.status(500).send({ status: "error", error: err.message })
    }
}




module.exports.createClass = createClass