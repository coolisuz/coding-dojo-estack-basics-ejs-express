// const express = require('express')
// const app = express()


// app.use(express.static(__dirname + "/static"));
// app.set("view engine", "ejs");
// app.set("views", __dirname + "/views");

// let counter = 1
// app.get('/', (req, res)=> {
//     res.render('index', {counter: counter})
// })

// app.post('/increment', (req,res)=>{
//     counter += 2
//     res.redirect('/')
// })

// app.post('/reset', (req,res) => {
//     counter = 1; 
//     res.redirect('/')
// })




// app.listen(8000, ()=> console.log('listening on port 8000'))

const session = require("express-session");
const bodyParser = require("body-parser");
const express = require("express");
const path = require("path");
const port = process.env.PORT || 8000;
const app = express();

const sessionConfig = {
  saveUninitialized: true,
  resave: false,
  name: "session",
  secret: "thisIsSuperSekret"
};

app.set("view engine", "ejs");
app.set("views", path.resolve("views"));


app.use(express.static(path.resolve("assets")));
app.use(session(sessionConfig));

app.get("/", (request, response) => {
  response.render("index", { counter: addOneToCounter(request) });
});

app.post("/by-two", (request, response) => {
  addOneToCounter(request);

  response.redirect("/");
});

app.post("/reset", (request, response) => {
  request.session.destroy();

  response.redirect("/");
});

function addOneToCounter(request) {
    console.log(request.session.counter)
  return (request.session.counter = request.session.counter
    ? request.session.counter + 1
    : 1);
}

app.listen(port, () => console.log(`listening on port ${port}`));