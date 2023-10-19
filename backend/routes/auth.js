//in this file we created end points
//before this we created a user schema 


import express from "express";
//here we use Router method for creating router object this help in handling the request
const router = express.Router();
import User from "../models/User.js";
import { body, validationResult } from "express-validator";

//create a User using: POST "/api/auth/createuser". Doesn't require Auth

router.post(
  "/createuser",
  //express-validator used here
  [
    body("email").isEmail(),
    body("name").isLength({ min: 3 }),
    body("password").isLength({ min: 5 }),
  ],
  async (req, res) => {
    const result = validationResult(req);
    if (!result.isEmpty()) {
      return res.status(400).json({ result: result.array() });
    }
    try{
    //if there is no error then we send the response to the database
    //also we are checking if the same user is available 
    let user = await User.findOne({email:req.body.email})
    if(user){
      return res.status(400).json({error:"User with this email already exist"})
    }
    //create a user
    user = await User.create({
        name: req.body.name,
        email: req.body.email,
        password: req.body.password,
    })
    res.json(user)

    // .then(User => res.json(User))
    // .catch(err=>res.json({error: "Email already exist"}))
    }catch(error){
      console.error(error.message);
      res.status(500).send("Some error occured")
    }
  });
export default router;
