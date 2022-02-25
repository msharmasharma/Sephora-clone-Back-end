require("dotenv").config();
const jwt = require("jsonwebtoken");
const {body,validationResult} = require("express-validator");


const User = require("../model/user.model");
const newToken = (user)=>{
        return  jwt.sign({user}, process.env.JWT_SECRET_KEY);
}

const register = async(req,res)=>{
    try{


        const errors = validationResult(req);
        if (!errors.isEmpty()) {
          return res.status(400).json({ errors: errors.array()[0].msg,status:"HalfDone"   })
        }



        let user = await User.findOne({email:req.body.email})
        if(user){   
            console.log("nhi hua")
            return res.send({status:"Try with another Email and Password"});
        }
        console.log("hi");
        
         user = await User.create(req.body);
         
         const token = newToken(user);
        //  console.log(token)
        // console.log({user,token});
      return res.send({status:"Done"});

    }catch(err){
        res.send({status:"Not Done"});

    }
}


const login = async(req,res)=>{
    try{
        const user = await User.findOne({email:req.body.email});
        if(!user){
            return res.send({status:"Try with another Email and Password"});
        }
        console.log(user)
        let match = user.checkPassword(req.body.password);
        console.log(match)
        if(!match){
            return res.send({status:"Try with another Id and password"});
        }

        const token = newToken(user);
        console.log(user);
        res.send({status:"Done",user,token});

    }catch(err){
        res.send(err.message);
    }
}


module.exports = {register,login,newToken};