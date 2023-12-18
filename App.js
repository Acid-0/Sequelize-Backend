const express = require("express");
require("dotenv").config();
const cors = require("cors");
const app = express();

const contactRouter = require("./src/Api/routes/contact-route");

app.use(cors());
app.use(express.json());

//--code for making image directory--//
app.use(express.static("./"));

app.get("/", (req, res) => {
  res.send("Hello, World!");
});

app.use("/api/contact", contactRouter);
// app.use("/project/api/category", CategoryRouter);
// app.use("/project/api/product", ProductRouter);
// app.use("/project/api/setting", SettingRouter);

const port = process.env.PORT;
app.listen(port, () => {
  console.log("server up and running on PORT :", port);
});
