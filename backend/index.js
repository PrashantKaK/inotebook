//in this file we are starting the express server and creating the middleware

import connectToMongo from "./db.js";
//after importing we call the connection function which is created in db.js
connectToMongo();
import auth from "./routes/auth.js";
import notes from "./routes/notes.js";

import express from "express";
const app = express();
const port = 5000;
//here we used json() middleware it helps to parse incoming requests with json payloads 
app.use(express.json());

//created a middlware for route
app.use("/api/auth", auth);
app.use("/api/notes", notes);

//here we started our server also mention that ehich port are server is running
app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});

//Now we are free to create our app / endpoints