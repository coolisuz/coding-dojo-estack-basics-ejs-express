const express = require('express')
const app = express(); 

// app.use(express.static(__dirname + "/static"));
app.use(express.static(__dirname+'/static'))
app.set("view engine", "ejs");
app.set("views", __dirname + "/views");

/*
In order to be able to access POST data, we need to be able to pull it out 
of the request object. To do this, we first have to add a new 
setting to our app:
*/
app.use(express.urlencoded({extended: true}))

app.get('/', (req, res) =>{
     res.render('index')
})


app.post('/users', (req,res)=>{
    console.log(req.body)
    res.redirect('/')
})


app.listen(8000, ()=> console.log('listening on port 8000'))