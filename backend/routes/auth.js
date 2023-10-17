import express from "express";
const router = express.Router();
import User from "../models/User.js";
import { body, validationResult } from "express-validator";
// import { ExpressValidator } from "express-validator";

//create a User using: POST "/api/auth/". Doesn't require Auth

router.post(
  "/",
  //express-validator used here
  [
    body("email").isEmail(),
    body("name").isLength({ min: 3 }),
    body("password").isLength({ min: 5 }),
  ],
  (req, res) => {
    const result = validationResult(req);
    if (!result.isEmpty()) {
      return res.status(400).json({ result: result.array() });
    }//if there is no error then we send the response to the database
    User.create({
        name: req.body.name,
        email: req.body.email,
        password: req.body.password,
    }).then(User => res.json(User))
    .catch(err=>res.json({error: "Email already exist"}))
    
  }
);
export default router;
