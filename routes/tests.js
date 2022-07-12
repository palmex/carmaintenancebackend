const express = require('express')
var testRouter = express.Router()
const path = require('path')
testRouter.use(express.json())

//import our DB index.js file
const db = require('../db');

//first route connecting to DB!
testRouter.get('/db',(req, res) => {
   queryStatement = 'SELECT * FROM cars;'; 
//    console.log(process.env['DB_USER'])
    db.query(queryStatement, (error, results) =>{
        if (error){
            res.status(500).json(error)
        }
        res.status(200).json(results.rows)
    } )

})


// this is our first POST endpoint
testRouter.post('/post', (req, res) => {
    console.log(req.body)
    res.status(200).json(req.body)
})



testRouter.get('/hello', (request, response) =>{
    response.json({
        welcome: "hello class of stellantis-OU module 3!",
        this: "This is our first route!",
        test: "test",
    })
})

// this is our first route that returns an html file
testRouter.get('/html', (request, response) =>{
  // console logging will be  your best friend!
  console.log('path',path.join(__dirname,'../index.html'));
  response.sendFile(path.join(__dirname,'../index.html'));
})


module.exports = testRouter; 