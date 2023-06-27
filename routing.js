const express = require("express");
const app = express();
const port = 8000;

// how to visit perticular page, it's an routing

app.get("/", (req, res) => {
  res.write("<h1>successfully routed to Home page in expressjs</h1>"); //you can also use html elements
  res.write("<h2>HTML element</h2>"); //If you want to send multipal line in res.send  you have to write res.write & res.end(or res.send)
  res.send();
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
  res.json([
    {
      id: 1,
      value: "one",
    },
    { id: 2, value: "two" },
    ,
    { id: 3, value: "three" },
  ]);
}); // res.json converts all data into json, while res.send converts only object and arrays into json

app.listen(port, () => {
  console.log(`listening to the port no ${port}`);
});
