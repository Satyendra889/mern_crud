const mongoose = require('mongoose');
const Schema = mongoose.Schema;


let employeeData = new Schema({
    name: {
        type: String
    },
    city: {
        type: String
    },
    age:{
        type: String
    }
})

module.exports = mongoose.model('employeeData', employeeData)