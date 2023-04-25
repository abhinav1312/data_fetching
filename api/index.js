const express = require('express');
const mongoose = require('mongoose');
const cors = require("cors");
const path = require("path");
const app = express();
const port = process.env.port || 4000;
const usersRoutes = require('./routes');
const {MONGO_URL} = require('./config/keys')
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
  .connect(MONGO_URL, {
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
