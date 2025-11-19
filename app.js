if(process.env.NODE_ENV != "production") {
    require('dotenv').config()
}
console.log(process.env.API_KEY)




const express = require("express")
const app = express();
const port = 8080;
app.use(express.urlencoded({ extended : true}))
const path = require("path")
const listing = require("./models/listing.js")
const methodoverride = require("method-override")
const ejsmate = require("ejs-mate")
const ExpressError = require("./utils/ExpressError")
const listings = require("./route/listings.js")
const mongoose = require("mongoose")
require('ejs')
const reviews = require("./route/reviews.js")
const session = require("express-session");
const flash = require("connect-flash");
const passport = require("passport")
const localStrategy = require("passport-local")
const user =  require("./models/user.js")
const users = require('./route/signup.js')
const login = require("./route/login.js")
const loginmiddleware = require("./middlewares.js")
const { redirectUrl } = require("./middlewares.js")
const multer  = require('multer')
const { storage } = require('./cloudconfig.js')

const upload = multer({ storage })

app.set("trust proxy", 1);
 
app.set("view engine", "ejs")

app.set("views", path.join(__dirname, "views"))






async function main() {
    await mongoose.connect(process.env.MONGO_URL)
}
main().then(() => {
    console.log("Connected!!@!")
}).catch((err) => {
    console.log(err)
})




app.use(express.static(path.join(__dirname, "public")))
app.use(methodoverride("_method"))
app.engine("ejs",  ejsmate)

const sessionOptions = {
    secret : "my super secret code.",
    resave :  false,
    saveUninitialized : true,
    cookie : {
        expires : Date.now() + 7*24*60*60*1000,
        MaxAge : 7*24*60*60*1000,
        httpOnly : true
    }

}

app.use(session(sessionOptions));
app.use(flash());
app.use(passport.initialize())
app.use(passport.session())
passport.use(new localStrategy(user.authenticate()))

app.use(redirectUrl);


//use static serialize and deserialize of model for passport session support


passport.serializeUser(user.serializeUser());
passport.deserializeUser(user.deserializeUser());


app.use((req, res, next) => {
  res.locals.success = req.flash("success");
  res.locals.error = req.flash("error"); // ye 'failure' nahi 'error' hona chahiye
  res.locals.currUser = req.user;
  next();
});





app.listen(port, () => {
    console.log("Your site is listenings")
})
app.use("/listings/:id/reviews", reviews);
app.use("/listings", listings);
app.use("", users)
app.use("", login)







app.get("/NewListing", async (req, res) => {
    let SampleList = new listing(
        {
            title: "kolkata best villa",
            description: "This is one of the best villa in kolkata with very cheap price",
            price: 1200,
            location:'Topsia, Kolkata',
            country :"India"


        }
    )
    await SampleList.save();
    console.log("It has been saved there ")
    res.send("get it smoothly")
    listing.find().then((res1) => {
        console.log(res1)
    }) 
})


app.get("/", (req, res) => {
    res.send("This is very listner")
})

app.get("/demouser", async(req, res) => {
    let demoUser = new user({
        email : "mdzeeshan08886@gmail.com",
        username : "zeeshan2223"
    })

    let usernames =  await user.register(demoUser , "zeeshan3h")
    console.dir(usernames)
    res.send(usernames)
    
})





app.use((req, res, next) => {
    next(new ExpressError(404, "page not found!!"))
})


app.use((err, req, res, next) => {
    let  {status=500, message="PAge Not Found !!!!"} = err;

    res.status(status).render("error.ejs", { err })
})


// const toggle = document.getElementById("flexSwitchCheckDefault")
// toggle.addEventListener("change" , () => {
//     if(toggle.checked) {
//         console.log("it is on :  :");
//     }
//     else {
//         console.log("it is off ")
//     }
// })