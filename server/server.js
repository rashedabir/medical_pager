require("dotenv").config();
const express = require("express");
const cors = require("cors");
const cookieParser = require("cookie-parser");

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cookieParser());

app.use("/user", require("./routes/userRouter"));

app.listen(PORT, () => {
  console.log(`SERVER IS CONNECTED TO ${PORT} PORT`);
});
