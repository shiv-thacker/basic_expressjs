const path = require("path"); //PATH MODELE TO GIVE HTML FILE PATH
const express = require("express");
const app = express();
const port = 8000;
app.set("view engine", "hbs");

app.get("", (req, res) => {
  res.render("index", {
    DynamicVariable:
      "It's Dynamic changes from index.js to index.hbs with the help of express engine handlebars",
  });
});
app.get("/", (req, res) => {
  res.send("welcome to homepage");
});

app.listen(port, () => {
  console.log(`listening to the port no ${port}`);
});
