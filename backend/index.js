const express = require("express");
const app = express();
const dotenv = require("dotenv");
const mongoose = require("mongoose");
// const authRoute = require("./routes/auth");
// const userRoute = require("./routes/users");
const postRoute = require("./routes/posts");
// const categoryRoute = require("./routes/categories");
const multer = require("multer");
const path = require("path");

dotenv.config();  // used to load environment variables from a .env file into process.env
app.use(express.json());
app.use("/images", express.static(path.join(__dirname, "/images")));





mongoose
  .connect('mongodb://127.0.0.1:27017/backendproject', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("Connected to MongoDB"))
  .catch((err) => console.log(err));


//multer
/*
used for uploading files in Node.js applications. Here, Multer's diskStorage() method is being used to specify how the uploaded files 
should be stored on the disk.
*/
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "images");  //save the files in img directory
  },
  filename: (req, file, cb) => {
    cb(null, req.body.name); //cb- callback function to specify the file name
  },
});

const upload = multer({ storage: storage });
app.post("/api/upload", upload.single("file"), (req, res) => {  // api/upload is the route, upload.single() is the middleware used, response
  res.status(200).json("File has been uploaded");
});

// app.use("/api/auth", authRoute);
// app.use("/api/users", userRoute);
app.use("/api/posts", postRoute);
// app.use("/api/categories", categoryRoute);

app.listen("5000", () => {
  console.log("Backend is running.");
});