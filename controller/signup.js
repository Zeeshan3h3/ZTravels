const User = require("../models/user.js");   // <-- ADD THIS

module.exports.SignUpRender = (req, res) => {
    res.render("../views/signup.ejs");
};

module.exports.SignUpForm = async (req, res, next) => {
    try {
        let { username, email, password } = req.body;

        const newUser = new User({ email, username });   // <-- FIX: User not user
        const regUser = await User.register(newUser, password);  // <-- FIX

        console.log(regUser);

        req.login(regUser, (err) => {
            if (err) {
                return next(err);
            }
            req.flash("success", `Greetings For @ ${username}`);
            res.redirect("/listings");
        });

    } catch (err) {
        req.flash("error", err.message);
        res.redirect("/signup");
    }
};
