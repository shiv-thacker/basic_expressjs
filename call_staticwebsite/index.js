const path = require("path"); //PATH MODELE TO GIVE HTML FILE PATH
const express = require("express");
const app = express();
const port = 8000;

console.log(path.join(__dirname, "./staticwebsite")); // here G:/sdcc/dcwsce/dcsd is absolute path & "../../wfcsdcfds" is relative path

const staticpath = path.join(__dirname, "./staticwebsite");

app.use(express.static(staticpath)); // to show direct static website in home page, express.static is built in middleware

app.listen(port, () => {
  console.log(`listening to the port no ${port}`);
});
