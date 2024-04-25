const mongoose = require('mongoose');
mongoose.connect("mongodb+srv://AvuUser:EkQHlWdo1YQ9Jtn0@securitycluster.emyzxlh.mongodb.net/contas?retryWrites=true&w=majority")
.then(()=>{
    console.log('mongoose connected');
})
.catch((e)=>{
    console.log('failed');
})
const dataSchema = new mongoose.Schema({
    titulo: {
        required: true,
        type: String
    },
    descricao: {
        required: true,
        type: String
    },
    ingredientes: {
        required: true,
        type: String
    },
    preparo:{
        required: true,
        type: String
    },
    regiao: {
        required: true,
        type: String
    },
    img: {
        required: true,
        type: String 
    }

})
const Receita=new mongoose.model('Receita', dataSchema)
module.exports=Receita

