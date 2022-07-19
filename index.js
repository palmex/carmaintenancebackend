const express = require('express')
const path = require('path');
const app = express()
const port = 3000
const cors = require('cors')
const testRouter = require('./routes/tests')
const carRouter = require('./routes/cars')
const userRouter = require('./routes/users')


app.use(cors())
app.use('/tests', testRouter); 
app.use('/cars', carRouter); 
app.use('/users', userRouter);


app.use(express.static(path.join(__dirname, 'public')));
app.use(express.json())
app.use(
    express.urlencoded({
        extended: true
      })
)




app.listen(port, () => {
    console.log(`Listening on port localhost:${port}.`)
    })
