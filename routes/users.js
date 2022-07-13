const express = require('express')
const db = require('../db')
var userRouter = express.Router()

userRouter.use(express.json())
// ------- functional ------------
// this is a full CRUD (create,read,update, delete) route for our users table in our database

// READ ALL USERS W/ PROPER PRIVILEGES
userRouter.get('/all', (req,res) => {
   
})

// READ USER WITH USERID
carRouter.get('/:userId', (req,res) => {
   
})

// DELETE USER WITH USERID
userRouter.delete('/:userId', (req,res) => {
    
})

// CREATE USER
userRouter.post('/new', (req,res) =>{
 
})

// UDPATE USER WITH USERID
userRouter.put('/update', (req,res) =>{
   
})

// using a function to call database instead of having this 
// db.query(queryStatement, (error, results) =>{
//     if (error){
//         res.status(500).json(error) 
//     } else
//     {res.status(200).json(results.rows)}
    
// } )
// in every endpoint

const databaseCall = (queryStatement, request, res) => {
    db.query(queryStatement, (error, results) =>{
        if (error){
            res.status(500).json(error) 
        } else
        {res.status(200).json(results.rows)}
        
    } )
}




// ------- ---------- ------------
module.exports = userRouter;