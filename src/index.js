const express = require("express");
require("dotenv").config();
const app = express();

const port = process.env.PORT || 3000;

app.use(express.json());
const connect = require("./configs/db");
const {body,validationResult} = require("express-validator");
module.exports = validationResult;

const passport= require('./configs/google-auth');

const {register,login,newToken} = require("./controller/auth.controller");
const productController = require("./controller/product.controller");

app.post("/register",
body("name").isLength({min:3}).withMessage("Enter Your Correct Name"),
body("email").isEmail().withMessage("Enter your valid Email"),
body("phone").isLength({min:10},{max:10}).withMessage("Enter your 10 digit Phone Number"),
body("password").isLength({min:6}).withMessage("Set password more than 6 characters"),
register);



app.post("/login",login);




passport.serializeUser(function (user, done) {
    done(null, user);
  });
  
  passport.deserializeUser(function (user, done) {
    done(null, user);
  });
  
  app.get(
    "/auth/google",
    passport.authenticate("google", { scope: ["email", "profile"] })
  );
  
  app.get(
    "/auth/google/callback",
    passport.authenticate("google", {
      failureRedirect: "/auth/google/failure",
      successRedirect: 'http://127.0.0.1:5500/home.html',
    }),
    (req, res) => {
      const { user } = req;
      const token = newToken(user);
      
      return res.send({ user, token });
    }
  );








app.use("/hairSpray",productController);
//http://localhost:2266/register




app.listen(port,async()=>{
    try{
        await connect();
        console.log("Started");
    }catch(err){
        console.log(err);
    }
});
