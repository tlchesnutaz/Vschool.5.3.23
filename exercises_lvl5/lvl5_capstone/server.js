const express = require('express')
const app = express()
const morgan = require('morgan')
const mongoose = require('mongoose')


app.use(express.json())
app.use(morgan('dev'))

// REPLACE connection string with variable and .env
// difference between .env and .env-webpack?
// add dotenv and .gitignore?
// install front-end? back-end? both? 
mongoose.set('strictQuery', true),  
mongoose.connect('mongodb+srv://tlchesnutaz:oUTPCEesYYWCEpK8@cluster0.2tdcwit.mongodb.net/capstone5?retryWrites=true&w=majority',
    (err) => {  
        if (err) {
            console.log(err) 
            return
        }
        console.log("Connected to the DB")}
)

//app.use('/api/owners', require('./routes/ownerRouter.js'))
app.use('/api/pets', require('./routes/petRouter.js'))

app.use((err, req, res, next) => {
    console.log(err)
    return res.send({errMsg: err.message})
})

app.listen(8000, () => {
    console.log('The server is running on Port 8000')
})

