const express = require("express");
//merge params = true for making parent router readable
const router = express.Router({ mergeParams: true });
const wrapasync = require("../utils/wrapAsync.js")
const Review = require("../models/review.js")
const { reviewSchema } = require("../schema.js")
const ExpressError = require("../utils/ExpressError")
const listing = require("../models/listing.js")
const { userlogin, isAuthor } = require("../middlewares.js")
const ReviewController = require('../controller/review.js')



const Schemavalidationreview = ReviewController.SchemaValid

router.post("/" ,userlogin ,Schemavalidationreview, wrapasync(ReviewController.NewReview))



router.delete("/:reviewId",userlogin, isAuthor,ReviewController.DelReview)


module.exports = router;
