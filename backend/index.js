const express = require("express");
const app = express();
const fileUpload = require('express-fileupload');
const cookieParser = require('cookie-parser');

const database = require("./config/database");
const { cloudinaryConnect } = require("./config/cloudinary");
const authRoutes = require("./routes/auth.routes");
const profileRoutes = require("./routes/profile.routes");
const rideRoutes = require("./routes/ride.routes");
require("dotenv").config();

const PORT = process.env.PORT || 4000;

//databse connect
database.connect();

//cloudinary connect
cloudinaryConnect();

const cors = require("cors");
app.use(cors({
    origin: process.env.CORS_ORIGIN || "http://localhost:3000",
    credentials: true
}));

app.use(express.json());
app.use(cookieParser());

// File upload middleware
app.use(fileUpload({
    useTempFiles: true,
    tempFileDir: '/tmp/'
}));

// Ensure correct path
app.use("/api/auth", authRoutes);
app.use("/api/profile", profileRoutes);
app.use("/api/ride", rideRoutes);

//default route
app.get("/", (req, res) => {
    return res.json({
        success : true,
        message : "Your server running successFully"
    })
})

//Activate server
app.listen(PORT, () => {
    console.log(`App is running successfully on ${PORT}`);
}) 