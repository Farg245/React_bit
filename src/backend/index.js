const express = require("express");
const app = express();


const coinspage = require("./routes/coinspage");
app.use("/coins/markets",coinspage)

const coinsdetails = require("./routes/coinsdetails");
app.use("/coins/",coinsdetails)

app.listen(9130, () => {
    console.log("listening live at 9130");
  });