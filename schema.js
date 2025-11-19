const joi = require("joi");
//schema for joi objects for handling db errors from server side.
module.exports.listingSchema = joi.object({
    listing : joi.object({
        title  : joi.string().required(),
        description : joi.string().required(),
        location : joi.string().required(),
        country : joi.string().required(),
        price : joi.number().required().min(0),
        image : joi.string().allow("", null)
    }).required()
})


module.exports.reviewSchema = joi.object({
    review : joi.object({
        comment: joi.string().required(),
        ratings: joi.number().required().min(1).max(5)
    })
})