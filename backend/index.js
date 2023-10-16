import connectToMongo from "./db.js";
connectToMongo();
import auth from "./routes/auth.js";
import notes from "./routes/notes.js";

import express from "express";
const app = express();
const port = 3000;

//Available routes
// app.use('/api/auth', require('./routes/auth.js'))
// app.use('/api/auth', from("./routes/auth.js"))

app.use(express.json())

app.use("/api/auth", auth);
app.use("/api/notes", notes);

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
