const express = require("express");
const UserDetail = require("./model/userDetail");
const router = express.Router();
const NodeCache = require("node-cache");
const taskObj = require('./taskQuery')

router.get('/', async(req, res) => {
  const page = req.query.page ? parseInt(req.query.page) : 1;
  const size = req.query.size? parseInt(req.query.size) : 5;
  const skip = (page-1)*size;
  try{
    const userData = await UserDetail.find().lean().skip(skip).limit(size);
    res.json(userData);
  }
  catch(error){
    console.log("Error occured while fetching task 1");
    console.log(error);
    res.status(500).json(null);
  }
})

router.get("/:task", async (req, res) => {
  const {task} = req.params;
  const page = req.query.page ? parseInt(req.query.page) : 1;
  const size = req.query.size? parseInt(req.query.size) : 5;
  const skip = (page-1)*size;
  
    try{
      let userDoc = null;
      if(task === 'task5'){
        userDoc = await UserDetail.aggregate(taskObj[task]).limit(10);
      }
      else{
        userDoc = await UserDetail.find(taskObj[task]).lean().skip(skip).limit(size);
      }
      res.json(userDoc);
    }
    catch(error){
      console.log("Error occured while fetching task 1");
      console.log(error);
      res.status(500).json(null);
    }
});


module.exports = router;
