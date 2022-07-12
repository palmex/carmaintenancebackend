const express = require('express')
const db = require('../db')
var carRouter = express.Router()

carRouter.use(express.json())
// ------- functional ------------


carRouter.get('/all', (req,res) => {
    console.log('admin header', req.headers.admin)
    if(req.headers.admin){
        queryStatement = " select * from cars;"
        db.query(queryStatement, (error, results) =>{
            if (error){
                res.status(500).json(error) 
            }
            res.status(200).json(results.rows)
        } )
    }
    else {
        res.status(403).json({ "forbidden":"PLease log in to continue"})
        // console.log(" header 'admin' is not true  - not authorized")
    }
    
})


// ------- ---------- ------------
module.exports = carRouter;