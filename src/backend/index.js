const express = require("express");
const app = express();


const home = require("./routes/home");
app.use("/coins/markets",home)

app.listen(9130, () => {
    console.log("listening live at 9130");
  });