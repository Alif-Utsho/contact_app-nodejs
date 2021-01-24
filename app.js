const express = require('express')
const router = require('./router')
const mongoose = require('mongoose')

app= express()

app.set('view engine', 'ejs')

app.use(express.urlencoded({ extended: true }))
app.use(express.json())

app.use('/contacts', router)


mongoose.connect('mongodb+srv://testUser:pass123@test-db.ykwsx.mongodb.net/test?retryWrites=true&w=majority', {
        useNewUrlParser: true
    })
    .then(()=> {
        app.listen(4000, ()=> {
            console.log('Server running with Database in port 4000')
        })
    })
    .catch(e => {
        console.log(e + 'Error')
    })


