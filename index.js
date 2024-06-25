const express = require("express");
const cors = require("cors");
const cookieParser = require("cookie-parser");
require("dotenv").config();
const connectDB = require("./config/db");
const router = require("./routes");
const Frontend = process.env.FRONTEND_URL;

const app = express();
app.use(
  cors({
    origin: Frontend,
    methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"], // Include all necessary methods
    allowedHeaders: ["Content-Type", "Authorization"], // Include all necessary headers
    credentials: true,
  })
);
app.use(express.json());
app.use(cookieParser());

app.use("/api", router);

const PORT = 8080 || process.env.PORT;

connectDB().then(() => {
  app.listen(PORT, () => {
    console.log("connnect to DB");
    console.log("Server is running " + PORT);
  });
});
