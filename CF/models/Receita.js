const mongoose = require('mongoose');

const receitaSchema = new mongoose.Schema({
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
    },
    },
      {timestamps: true}
);
receitaSchema.index({  "$**" : 'text'  });
const Receita=new mongoose.model('Receita', receitaSchema)
module.exports=Receita

