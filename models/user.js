const { Schema, mongoose } = require("mongoose");
const userSchema = new Schema(
    {  
        name: { type: String, required: true },
        age: { type: Number, min: 0 },  
        email: { type: String, unique: true },
        password: {type:String, required:true}
    });
const User = mongoose.model('User',userSchema)
module.exports = User;