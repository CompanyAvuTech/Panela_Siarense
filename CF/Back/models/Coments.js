const mongoose=require("mongoose")


const logInSchema=new mongoose.Schema({
    comentarios:{
        type:String,
        required:true
    },
    likes:{
        type:String,
        required:true
    },
})

const User=new mongoose.model('Coments',logInSchema)

module.exports=User

