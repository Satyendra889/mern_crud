const express = require('express')
const monggose = require('mongoose')
const bodyParser = require('body-parser')
const cors = require('cors');

const app = express()
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

monggose.connect("mongodb://127.0.0.1/employees", {useNewUrlParser: true});
const connection = monggose.connection;

app.use(cors())

const employeesRoute = require('./routes/employee.js')
app.use('/', employeesRoute)

connection.once('open', function(){
    console.log("database connected...")
})

app.listen(9000, function(){
    console.log("server is running")
})
