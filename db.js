const mongoose = require("mongoose");

var mongoURL = "mongodb+srv://guptaalok653:alok123@cluster0.3e8waxz.mongodb.net/ATITHI-Rooms"

mongoose.connect(mongoURL,{useunifiedTopology : true,useNewurlparser:true})

var connection = mongoose.connection
connection.on('error',() =>{
    console.log('Mongo DB connection Failed')
})


connection.on('connected',()=>{
    console.log('Mongo DB connection successful')
})


module.exports = mongoose