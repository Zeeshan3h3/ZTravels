const express = require("express");
const router = express.Router({ mergeParams: true });
const wrapasync = require("../utils/wrapAsync.js")


const { listingSchema } = require("../schema.js")
const ExpressError = require("../utils/ExpressError")
const listing = require("../models/listing.js")
const { userlogin } = require("../middlewares.js")
const { isOwner } = require("../middlewares.js")
const listingsController = require('../controller/listing.js')
const multer  = require('multer')
const { storage } = require('../cloudconfig.js')
const upload = multer({ storage })



const Schemavalidation = listingsController.SchemaValidations;


router.route("/")
    

router.get("/",wrapasync(listingsController.Listings))


router.get("/new", userlogin, wrapasync(listingsController.NewListingsRender))

router.get("/:id/edit",userlogin,isOwner, wrapasync(listingsController.EditListings))

router.delete("/:id",userlogin,isOwner ,wrapasync(listingsController.DeleteListings))


router.post("/" ,Schemavalidation,upload.single('listing[image]'), wrapasync(listingsController.AddNewListings))


router.put("/:id",isOwner,upload.single('listing[image]'), wrapasync(listingsController.Listings12))


router.get("/:id",wrapasync(listingsController.showListings))



module.exports = router;