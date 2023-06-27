const express = require("express");
const app = express();
const port = 8000;

// how to visit perticular page, it's an routing

app.get("/", (req, res) => {
  res.send("successfully routed to Home page in expressjs");
});

app.get("/about", (req, res) => {
  res
    .status(200) // it passes perticular status code, but after reloading if the data will not modified , it shows 304 in inspect,network
    .send(
      "It's about page, status code 200 means successed and modified, 304 means successed and not modified"
    ); // if you want to show status code also
});

app.get("/contact", (req, res) => {
  res.send("successfully routed to contact page in expressjs");
});

app.get("/temp", (req, res) => {
  res.send("successfully routed to temperature page in expressjs");
});

app.listen(port, () => {
  console.log(`listening to the port no ${port}`);
});
