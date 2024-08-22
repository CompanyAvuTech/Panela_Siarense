const mongoose=require("mongoose")

const comentsSchema=new mongoose.Schema({
    conteudo:{
        type:String,
        required:true
    },
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
      }

},
{timestamps: true}
);

const User=new mongoose.model('Coments',comentsSchema)

module.exports=User

