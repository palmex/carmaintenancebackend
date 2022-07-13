const express = require('express')
const db = require('../db')
var carRouter = express.Router()

carRouter.use(express.json())
// ------- functional ------------
// this is a full CRUD (create,read,update, delete) route for our cars table in our database

// READ ALL CARS W/ PROPER PRIVILEGES
carRouter.get('/all', (req,res) => {
    console.log('admin header', req.headers.admin)
    if(req.headers.admin){
        queryStatement = " select * from cars;"
        databaseCall(queryStatement, req, res)
    }
    else {
        res.status(403).json({ "forbidden":"PLease log in to continue"})
        // console.log(" header 'admin' is not true  - not authorized")
    }
})

// READ CAR WITH CARID
carRouter.get('/:carId', (req,res) => {
    queryStatement = `SELECT * FROM cars WHERE car_id = '${req.params.carId}';`
    console.log(queryStatement)
    databaseCall(queryStatement, req, res)
})

// READ CAR WITH CARID
carRouter.get('/user/:carId', (req,res) => {
    queryStatement = `SELECT * FROM cars
    INNER JOIN users ON cars.user_id = users.user_id WHERE car_id = '${req.params.carId}';`
    

    console.log(queryStatement)
    databaseCall(queryStatement, req, res)
})

// DELETE CAR WITH CARID
carRouter.delete('/:carId', (req,res) => {
    queryStatement = `DELETE FROM cars WHERE car_id = '${req.params.carId}' RETURNING *;`
    console.log(queryStatement)
    databaseCall(queryStatement, req, res)
})

// CREATE CAR
carRouter.post('/new', (req,res) =>{
    console.log(req.body)
    make = req.body.make
    year = req.body.year
    odometer = req.body.odometer
    model = req.body.model
    body = req.body
    queryStatement = `INSERT INTO cars (make, model, year, odometer) VALUES ('${make}','${model}',${year} ,${odometer} ) RETURNING *;`
    databaseCall(queryStatement, req, res)
})

// UDPATE CAR WITH CARID
carRouter.put('/update', (req,res) =>{
    console.log(req.body)
    carId = req.body.carId
    make = req.body.make
    year = req.body.year
    odometer = req.body.odometer
    model = req.body.model
    userId = req.body.userId
    body = req.body
    queryStatement = `UPDATE  cars SET make = '${make}', model = '${model}', year = ${year} , odometer = ${odometer}, user_id = '${userId}' WHERE car_id = '${carId}' RETURNING *;`
    console.log(queryStatement)
    databaseCall(queryStatement, req, res)
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
module.exports = carRouter;