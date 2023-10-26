const express = require("express");
const app = express();
const movieAuth = require('./route/movieRoute/movieRoute')
require("dotenv").config();
const cors = require('cors')
app.use(cors());
const mongoose = require("mongoose");

app.use(express.json())
const uri = process.env.uri
mongoose    
  .connect(
    uri 
  )
  .then(() => console.log("connected"))
  .catch(e => console.log(e));
app.use('/movie',movieAuth)
app.listen(8000,()=>console.log('listen')) 
   