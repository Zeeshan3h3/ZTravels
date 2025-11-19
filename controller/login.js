

module.exports.loginPage = (req, res) => {
    res.render("../views/login.ejs")
}


module.exports.loginAtanypoint = async(req ,res) => {
    let  {username} = req.body;
    
    req.flash("success", `Welcome back  @ ${username} `)
    console.log(res.locals.redirectUrl)
    let redURL = res.locals.redirectUrl || "/listings";
    res.redirect(redURL)
    
    
}


module.exports.Logout = (req, res) => {
    req.logout((err) => {
        if (err) {
            return next(err)
        }
        req.flash("success" , "You logout successfully :-")
        res.redirect("/listings")
    })
}