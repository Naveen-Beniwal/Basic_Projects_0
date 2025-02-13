const express = require("express");
const router = express.Router();
const User = require("../models/user.model"); // Import the User model
const Post = require("../models/post.model");
const passport = require("passport");
const LocalStrategy = require("passport-local").Strategy;
const upload = require("./multer");
// Passport Local Strategy
passport.use(new LocalStrategy(User.authenticate()));

// Passport Session Setup
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

router.get("/", (req, res) => {
  res.render("index");
});
router.get("/feed", (req, res) => {
  res.render("feed");
});
router.post(
  "/upload",
  isLoggedIn,
  upload.single("file"),
  async function (req, res) {
    if (!req.file) {
      res.status(404).send("no files were given");
    }
    const user = await User.findOne({
      username: req.session.passport.user,
    });
    const post = await Post.create({
      image: req.file.filename,
      imageText: req.body.fileCaption,
      user: user._id,
    });
    user.posts.push(post._id);
    await user.save();
    res.redirect("/profile");
  }
);

router.get("/login", (req, res) => {
  res.render("login", { error: req.flash("error") });
});

router.get("/signup", (req, res) => {
  res.render("signup");
});

router.get("/profile", isLoggedIn, async (req, res) => {
  const user = await User.findOne({
    username: req.session.passport.user,
  }).populate("posts");
  res.render("profile", { user });
});

// Register Route
router.post("/register", function (req, res) {
  console.log("Registration Data Received:", req.body);

  // Create a new user object without the password
  const userData = new User({
    username: req.body.username,
    email: req.body.email,
    fullName: req.body.fullName,
  });

  // Register the user with the password
  User.register(userData, req.body.password) // Use User instead of userModel
    .then(function (user) {
      console.log("User registered successfully:", user);
      passport.authenticate("local")(req, res, function () {
        res.redirect("/profile");
      });
    })
    .catch(function (err) {
      console.error("Error registering user:", err);
      res.redirect("/signup");
    });
});

// Login Route
router.post(
  "/login",
  passport.authenticate("local", {
    successRedirect: "/profile",
    failureRedirect: "/login",
    failureFlash: true,
  }),
  function (req, res) {}
);

// Logout Route
router.get("/logout", function (req, res, next) {
  req.logout(function (err) {
    if (err) {
      return next(err);
    }
    res.redirect("/");
  });
});

// Middleware to Check If Logged In
function isLoggedIn(req, res, next) {
  if (req.isAuthenticated()) {
    console.log("User is authenticated");
    return next();
  }
  console.log("User is not authenticated");
  res.redirect("/login");
}

module.exports = router;
