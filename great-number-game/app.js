const express = require('express')
const session = require('express-session')
const app = express()

app.use(express.static(__dirname+"/static"))
app.set('view engine', 'ejs');
app.set('views', __dirname+('/views'))
app.use(express.urlencoded({extended: true}))

app.use(session({
    secret: 'sa54ds5f4d5f',
    saveUninitialized: true, 
    resave: false
}))



app.get('/', (req, res)=>{
    res.render('index')
})

app.post('/guess', (req,res)=>{
    req.session.random = Math.floor(Math.random() * 3)
    console.log("Correct number is "+req.session.random)
    let randomNumber = req.session.random
    let obj = {
     checkAnswer: undefined,
     correct: true,
     name: 'Saidjamol'
    }

    let userGuess = parseInt(req.body.guess)

    if (userGuess === randomNumber) {
      obj.checkAnswer = `${randomNumber} was the number`;
    } else if (userGuess > randomNumber) {
        obj.checkAnswer = "Too high";
        obj.correct = 'tooHigh'
    }else {
        obj.checkAnswer = "Too low"
        obj.correct = 'tooLow'
    }
    console.log(obj.checkAnswer)
    
    res.render('index', {obj: obj})
})

app.listen(8000, ()=> console.log("listening on port 8000"))
