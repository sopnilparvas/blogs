const express = require("express");
const fileUpload = require("express-fileupload");
const dotenv = require("dotenv");
const connectDB = require("./config/db");

dotenv.config();

connectDB();

const app = express();

app.use(express.json());
app.use(fileUpload());

app.use("/api/blogs", require("./routes/blogRouter"));

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server running port ${port}`));
