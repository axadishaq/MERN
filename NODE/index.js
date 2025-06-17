// First
// console.log("lello chal la la");
// const fs = require("fs");
// fs.writeFileSync("hello.txt", "hello world");
// const http = require("http");
// http.createServer((req, res) => {
//       res.write("<h1>Patho G!</h1>");
//       res.end();
//    }).listen(4500);

// Second
// const express = require("express");
// const app = express();
// app.get("/", (req, res) => {
//    res.send("Home Page");
// });
// app.get("/about", (req, res) => {
//    res.send("About Page");
// });
// app.get("/blog", (req, res) => {
//    res.send("Blog Page");
// });
// app.use((req, res) => {
//    res.status(404).send("404 - Page Not Found");
// });
// app.listen(4500);

// Third
// const ejs = require("ejs");
// const express = require("express");
// const app = express();
// const path = require("path");
// const publicpath = path.join(__dirname, "public");
// app.set("view engine", "ejs");
// app.get("/profile", (req, res) => {
//    const user = {
//       name: "Rifti",
//       email: "rafti@gmail.com",
//       city: "Lahore",
//    };
//    res.render("profile", { user });
// });
// // Dynamic Routing
// app.get("/", (req, res) => {
//    res.sendFile(`${publicpath}/index.html`);
// });
// app.get("/about", (req, res) => {
//    res.sendFile(`${publicpath}/About.html`);
// });
// // Static Routing
// // app.use(express.static(publicpath));
// app.listen(4500);

// Fourth
const express = require("express");
const app = express();
const reqFilter = require("./middleware");
const route = express.Router();

route.use(reqFilter);
route.get("/", (req, res) => {
   res.send("Home");
});
app.get("/about", (req, res) => {
   res.send("About");
});

app.use("/", route);
app.listen(4500);
