const mongoose=require("mongoose")

mongoose.connect("mongodb+srv://AvuUser:EkQHlWdo1YQ9Jtn0@securitycluster.emyzxlh.mongodb.net/contas?retryWrites=true&w=majority")
.then(()=>{
    console.log('mongoose connected');
})
.catch((e)=>{
    console.log('failed');
})

const logInSchema=new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    username:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    }
})

const User=new mongoose.model('User',logInSchema)

module.exports=User