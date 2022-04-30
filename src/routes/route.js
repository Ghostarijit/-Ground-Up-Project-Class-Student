const express = require('express');
const router = express.Router();

const allControler = require("../controller/allController")
const loginController = require("../controller/loginController")
const middleWare =require("../middleWare/auth")

const put =require("../controller/putController")
const dController=require("../controller/DeleteControlle")
const author =require("../controller/authorController")
const post=require("../controller/PostController")
const get=require("../controller/GetController")



router.post("/createAuthor", author.createAuthor)

router.post("/createBlogs",middleWare.validateToken,post.createBlogs)

router.get("/get/blogs",middleWare.validateToken,get.getBlogs)

router.put("/blogs/:blogId", middleWare.validateToken,put.updateblogs)

router.delete("/blogs/:blogId",middleWare.validateToken,dController.deletById)

 router.delete("/blogs",middleWare.validateToken,dController.deletByProperty)

router.post("/login",loginController.loginUser)






module.exports = router;