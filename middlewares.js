const listing = require("./models/listing.js")
const review = require("./models/review.js")

module.exports.userlogin = (req, res, next) => {
    
    if(!req.isAuthenticated()) {
        console.log(req.originalUrl)
        req.session.redirectUrl = req.originalUrl;
        req.flash("error" , "Login to create Listings :-")
        return res.redirect("/login")
    }
    next()
}




module.exports.redirectUrl = (req, res, next) => {
    
    if(req.session.redirectUrl) {
        res.locals.redirectUrl = req.session.redirectUrl;
    }
    next()
}

module.exports.isOwner = async(req, res, next) => {
    let { id } = req.params;
    let listings = await listing.findById(id)
    if (!listings.owner._id.equals(res.locals.currUser._id)) {
        req.flash("error", "You dont have access")
        return res.redirect(`/listings/${id}`)
    }
    next()
}


module.exports.isAuthor = async(req, res, next) => {
    let { reviewId } = req.params;
    let { id } = req.params;
    let reviews = await review.findById(reviewId)
    if (!reviews.author.equals(res.locals.currUser._id)) {
        req.flash("error", "You dont have access")
        return res.redirect(`/listings/${id}`)
    }
    next()
}