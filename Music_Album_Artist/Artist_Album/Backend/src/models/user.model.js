const mongoose = require('mongoose');


const userSchema = new mongoose.Schema({
    email: {type: String, required: true, unique: true},
    password: {type: String, required: true, minLength: 8, maxLength: 100},
}, {
    versionKey: false,
    timestamps: true
});



const User = mongoose.model("user", userSchema); 

module.exports = User;