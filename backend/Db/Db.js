const mongoose = require('mongoose')
const Db =  process.env.DB

mongoose.connect(Db).then(()=>console.log("connection created")).catch((err)=>console.log(err.message))