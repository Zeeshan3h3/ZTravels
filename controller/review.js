
const listing = require('../models/listing.js')
const { listingSchema } = require("../schema.js")
const ExpressError = require("../utils/ExpressError")

const Review = require("../models/review.js")
const { reviewSchema } = require("../schema.js")



module.exports.SchemaValid = (req, res, next) => {
    let {error} = reviewSchema.validate(req.body);

    if(error) {
        throw new ExpressError(400, error)
    } else { 
        next()
    }
}



module.exports.NewReview = async(req ,res) => {
    let list = await listing.findById(req.params.id)

    let newReview = new Review(req.body.review)
    newReview.author = req.user._id;
    console.log(newReview)
    list.reviews.push(newReview)
    await newReview.save()
    await list.save()
    console.log("Review Has been Saved !!!!!")
    req.flash("success", "New Review Created")
    res.redirect(`/listings/${req.params.id}`)
    
 
}



module.exports.DelReview = async(req, res) => {
    let  { id , reviewId } = req.params;
    await listing.findByIdAndUpdate(id, {$pull : {reviews : reviewId}})
    await Review.findById(reviewId)
    req.flash("success", "Review Deleted")

    res.redirect(`/listings/${id}`)
}