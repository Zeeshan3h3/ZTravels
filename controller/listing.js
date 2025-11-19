const listing = require('../models/listing.js')
const { listingSchema } = require("../schema.js")
const ExpressError = require("../utils/ExpressError")


//controller for schema validations..
module.exports.SchemaValidations = (req, res, next) => {
    let {error} = listingSchema.validate(req.body);

    if(error) {
        throw new ExpressError(400, error)
    } else { 
        next()
    }
}   

//listings 

module.exports.Listings = async (req, res) =>{
    const list =  await listing.find({})
    res.render("listing.ejs", { list })
}


//new listings forms 

module.exports.NewListingsRender = async (req, res) => {
    let { id } = req.params;
    
    const list = await listing.findById(id)
    console.log(req.user)
   
    res.render("new.ejs", { list })
}


//newlistings creations...

module.exports.AddNewListings = async (req, res) =>{
    let url = req.file.path
    let filename = req.file.filename
    console.log(url, "..", filename )

    let result = listingSchema.validate(req.body);
    
    const newlisting = new listing(req.body.listing);
    console.log(req.user._id)
    //req.user.id hi user ne jo login kiya hai uske baree mai bata ta hai sara info deta hai.....

    newlisting.owner = req.user._id;
    console.log(newlisting.owner)

    newlisting.image = {url , filename}
    await newlisting.save();
    
    req.flash("success", "New Listing is Added:)")
    
    
    res.redirect("/listings")
}

//for editing listings ;
module.exports.EditListings = async (req, res, next) => {
       
    
        let { id } = req.params;
        console.log(id)
        const list = await listing.findById(id)
        let originalurl = list.image.url
        url = originalurl.replace("/upload", "/upload/w_200")

        
        
        res.render("edit.ejs", { list, url } )    
}

//delete Listings 
module.exports.DeleteListings = async (req, res, next) =>{
    
    let { id } = req.params;
    await listing.findByIdAndDelete(id)
    req.flash("success", "Listing is deleted...:)")
    res.redirect("/listings")
   
   
}

//listings
module.exports.Listings12 = async (req, res) =>{
    
    let { id } = req.params;
    
    
    const list = await listing.findByIdAndUpdate(
    id,
    { ...req.body.listing },
    { new: true } // <-- IMPORTANT
    );
    console.log(req.file)
    if (req.file) {
        list.image = {
            url: req.file.path,
            filename: req.file.filename
        };
        await list.save();
    }
    req.flash("success", "Listing Updated Successfully :)")
    res.redirect("/listings")
}


module.exports.showListings = async (req, res) =>{
    let { id } = req.params;
    
    //advanced mongodb uses here very useful nestings...
    const list =  await listing.findById(id).populate({path : "reviews",
        populate: {
            path : "author"
        }
    }).populate("owner")

    

    if(!list) {
        req.flash("error", "The List you are trying to access doesnot exist....")
        return res.redirect("/listings")
    }
    
    console.log(list)
    res.render("showdata.ejs", { list })

}