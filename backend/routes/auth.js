import express from "express";
const router = express.Router();
import User from "../models/User.js"


//create a User using: POST "/api/auth/". Doesn't require Auth

router.post('/', (req, res) => {
    console.log(req.body);
    const user = User(req.body);
    user.save()
    res.send(req.body)
    
});
export default router;
