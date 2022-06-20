const mongoose = require('mongoose')

const data = mongoose.Schema({
    name:{
        type:String,
        require:true
    },
    email:{
        type:String,
        require:true
    },
    mobile:{
        type:Number,
        require:true
    },
    image:{
        type:String
    },
    edLevel1:{
        type:String,
        require:true
    },
    edLevel2:{
        type:String,
        require:true
    },
    

},

)

const users = mongoose.model('user', data)

module.exports = users