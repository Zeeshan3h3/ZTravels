const mongoose = require("mongoose")
const { Schema } = mongoose
const User = require("./user.js")


//schema for reviews.


const reviews = new Schema({
    comment : String,
    ratings: {
        type :Number,
        min : 1,
        max : 5
    },
    createdat: {
        type: Date,
        default : Date.now(),
    },
    author : {
        type : Schema.Types.ObjectId,
        ref : "User"
    }
})

module.exports = mongoose.model("Review" ,reviews)