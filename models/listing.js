const mongoose= require("mongoose")
const Schema = mongoose.Schema;
const Review = require("./review.js")
const User = require("./user.js")

//schema for main listings...
const NewListing = new Schema({
    title : {
        type: String,
        required: true
    }, 
    description: String,
    image: { 
       url : String,
       filename : String
     },

    price : Number,
    location: String,
    country: String,
    reviews : [
        {
            type: Schema.Types.ObjectId,
            ref : "Review"
        }],

    owner : {
            type : Schema.Types.ObjectId,
            ref : "User",
            required : true
    }
     





})

//for handling deletion that means delete post will also delete all the reviews from dbs.
NewListing.post("findOneAndDelete", async(listing) => {
    if(listing)
        await Review.deleteMany({_id : {$in: listing.reviews}})


        })
  



//exposting the schema for using is app.js.

const Listing = mongoose.model("Listing", NewListing);
module.exports = Listing;