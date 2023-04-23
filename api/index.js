const express = require('express');
const mongoose = require('mongoose');
const cors = require("cors");
const path = require("path");
const app = express();
const port = 4000;
const data = require('./data/sample_data.json')
// using .env
require("dotenv").config();

// middlewares
app.use(express.json());
app.use(
    cors(
        {
            credentials: true,
            origin: "http://localhost:3000"
        }
    )
)

mongoose
  .connect(process.env.MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("Connection established");
  })
  .catch((err) => {
    console.log(("Connection unsuccessfull", err));
});

app.get('/', (req, res)=>{
    res.json("HELLO");
})

app.listen(port, ()=>{
    console.log(`Server running on port ${port}...`)
})

const insertData = async () => {
    // const collectionRef = mongoose.Collection('userDetail');
    // mongoose.
    try{
        await collectionRef.insertMany(JSON.parse(data));
    }
    catch(error){
        console.log("Error occured while inserting.")
    }
}

// insertData()