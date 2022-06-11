const connectToMongo = require("./db");
connectToMongo();
const express = require("express");
var cors=require('cors');
const app = express();
require("dotenv").config();
const port = 5000;

app.use(cors());
app.use(express.json());

// Avaliable routes
app.use("/api/auth", require("./Routes/auth"));
app.use("/api/notes", require("./Routes/notes"));

app.listen(process.env.PORT || port, () => {
  console.log(`You are connected`);
});
