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
    comentarios:[{
        comentario:{
            type:String,
            required:true
        },
        usuario: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'User',
            required: true
          },
         
    
    }],
    likes: [{ type: mongoose.Schema.Types.ObjectId, ref: 'User' }] 
    },
      {timestamps: true}
);
receitaSchema.index({  "$**" : 'text'  });
const Receita=new mongoose.model('Receita', receitaSchema)
module.exports=Receita

