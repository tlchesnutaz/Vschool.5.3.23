const mongoose = require('mongoose')
const Schema = mongoose.Schema

//User Blueprint
const userSchema = new Schema({
    firstName: {
        type: String,
        required: true,
        lowerCase: true
    },
    lastName: {
        type: String,
        required: true
    },
    state: {
        type: String,
        required: true,
        upperCase: true,
        enum: ['MA', 'NH', 'UT', 'OH', 'CA' ] 
        // this will only allow entry of specific value to minimize data errors 
    },
    age: Number
})

module.exports = mongoose.model("User", userSchema)