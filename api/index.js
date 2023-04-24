const express = require('express');
const mongoose = require('mongoose');
const cors = require("cors");
const path = require("path");
const app = express();
const port = 4000;
const data = require('./data/sample_data.json')
const UserDetail = require('./model/userDetail')
const usersRoutes = require('./routes');
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

app.use('/', usersRoutes);

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




app.listen(port, ()=>{
    console.log(`Server running on port ${port}...`)
})
