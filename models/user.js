const mongoose= require("mongoose")
const Schema = mongoose.Schema;
const passportLocalMongoose = require('passport-local-mongoose');

//schema for main listings...
const userSchema = new Schema({
    email : {
        type : String,
        required : true,
        unique : true
    }
   
    
})
userSchema.plugin(passportLocalMongoose);



//exposting the schema for using in app.js.

const User = mongoose.model("User", userSchema);



module.exports = User;