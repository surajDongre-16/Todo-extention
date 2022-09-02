const express = require("express");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const { getAllUser, signup, login } = require("../controller/user-controller");
const passport = require("../config/googleOauth");
const User = require("../model/User");
const router = express.Router();
const cors = require("cors");



router.get("/", getAllUser);
router.use(cors());
router.get(
  "/auth/google",
  passport.authenticate("google", { scope: ["email", "profile"] })
);

router.get("/google/success", (req, res) => {
  if (req.user) {
    res.status(401).json({
      success: false,
      message: "Login successfull",
      user:req.user
    });
  }
});

router.get("/google/failure", (req, res) => {
  res.status(401).json({
    success: false,
    message: "Failed to login",
  });
});

router.get(
  "/auth/google/callback",
  passport.authenticate("google", {
    successRedirect:"/",
    failureRedirect: "/google/failure",
  }),

);

// router.get(
//   "/auth/google/callback",
//   passport.authenticate("google", {
//     failureRedirect: "/auth/google/failure",
//     session: false,
//   }),
//   async function (req, res) {
//     try {
//       const existinguser = await User.findOne({ email: req.user.email });
//       //   console.log(existinguser, "exist");
//       const token = jwt.sign(
//         {
//           name: existinguser.name,
//           id: existinguser._id,
//         },
//         "SECRET"
//       );
//       return res.status(200).json({
//         message: "Login sucessful",
//         token: token,
//         id: existinguser.id,
//       });
//     } catch (err) {
//       return console.log("err");
//     }
//     // res.redirect("/");
//   }
// );

router.post("/signup", signup);
router.post("/login", login);

module.exports = router;
