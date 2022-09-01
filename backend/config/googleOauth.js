const GoogleStrategy = require("passport-google-oauth2").Strategy;
const passport = require("passport");
const { v4: uuidv4 } = require("uuid");

const User = require("../model/User");
require("dotenv").config();

passport.use(
  new GoogleStrategy(
    {
      clientID: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
      callbackURL: "http://localhost:5000/user/auth/google/callback",
      passReqToCallback: true,
    },
    async function (request, accessToken, refreshToken, profile, done) {
      const email = profile.email;
      const name = profile.name.givenName;

      try {
        const existinguser = await User.findOne({ email });
        if (existinguser === null) {
          const user = new User({
            name,
            email,
            password: uuidv4(),
            todos: [],
          });

          await user.save();
          return done(null, user);
        }
        return done(null, existinguser);
      } catch (err) {
        return console.log("err");
      }
    }
  )
);

module.exports = passport;
