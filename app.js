const express = require("express");

const app = express(); // here with the help of express module we crested an app with the help of "app"

//app.get(route, callback); //to create routing

app.get("/", (req, res) => {
  res.send("hello from the express");
}); //req represents the http request by the clent to sever and has properties for the request query string, parameter, body, http header, etc.

// res represents the HTTP response which express app sends when it receives HTTP request.

app.get("/about", (req, res) => {
  res.send("So here your about is working in express");
});

app.listen(8000, () => {
  console.log("listning port 8000");
});
