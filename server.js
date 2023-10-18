const express = require("express");
const app = express();
const cors = require("cors");

const todoRoutes = require("./routes/todoRoutes");
const userRoutes = require("./routes/userRoutes");

require("dotenv").config();

const PORT = process.env.PORT_NO || 3500;

//Custom middleware
app.use((req, res, next) => {
  console.log(`${req.method} ${req.path}  - ${req.headers.origin}`);
  next();
});

//Cors - third part middleware
app.use(cors());

app.get("/", (req, res) => {
  res.send(200, "Hello World!");
});
app.use("/todo", todoRoutes);
app.use("/user", userRoutes);

app.get("/*", (req, res) => {
  res.send(404, `[${req.method}]  ${req.url}  -  Page Not Found!`);
});

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
