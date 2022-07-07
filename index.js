const express = require('express')
const path = require('path');
const app = express()
const port = 3000


const testRouter = require('./routes/tests')
app.use('/tests', testRouter); 


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