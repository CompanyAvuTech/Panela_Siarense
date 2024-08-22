const mongoose=require("mongoose")
const passportLocalMongoose = require("passport-local-mongoose");
const findOrCreate = require("mongoose-findorcreate");

const userSchema=new mongoose.Schema({
    username:{
        type:String,
        unique:true,
        trim:true,
        lowercase:true,
        validate:{
          validator: function(email) {
            return /^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/.test(email);
          },
          message: "Please enter a valid email."
        }
      
      },
      googleId: {
        type: String,
        unique: true,
        sparse: true
      },
    password:{
        type:String,
        required:false
    },
    name: {
      type: String,
      required: false
  },
  photo: {
      type: String,
      required: false
  }


});
userSchema.plugin(passportLocalMongoose);

//Add findOrCreate mongoose Plugin
userSchema.plugin(findOrCreate);

const User=new mongoose.model('User',userSchema)
module.exports=User