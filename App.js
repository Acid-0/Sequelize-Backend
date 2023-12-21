const express = require("express");
require("dotenv").config();
const cors = require("cors");
const app = express();

const contactRouter = require("./src/Api/routes/contact-route");
const analyticsRouter = require("./src/Api/routes/analytics-route");
const projectRouter = require("./src/Api/routes/project-route");
const projectImageRouter = require("./src/Api/routes/project-image-route");

app.use(cors());
app.use(express.json());

//--code for making image directory--//
app.use(express.static("./"));

app.get("/", (req, res) => {
  res.send("Hello, World!");
});

app.use("/api/contact", contactRouter);
app.use("/api/analytics", analyticsRouter);
app.use("/api/project", projectRouter);
app.use("/api/project-image", projectImageRouter);


const port = process.env.PORT;
app.listen(port, () => {
  console.log("server up and running on PORT :", port);
});
