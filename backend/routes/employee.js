const express = require('express')
const router = express.Router()

const employeeData = require('../models/employee')

router.get('/', (req, res)=>{
    employeeData.find(function(error, employeeDatas){
        if(error){
            res.send(error)
        }
        else{
            res.json(employeeDatas)
        }
    })
})

router.post('/', (req,res)=>{
    let employeedata = new employeeData(req.body)
    employeedata.save()
    .then(employeedata =>{
        res.status(200).json(employeedata)
    })
})

router.get('/:id', function(req, res){
    let id = req.params.id
    employeeData.findById(id, function(error, result){
        res.json(result)
    })
})

router.post('/update/:id', function(req, res){
    let id = req.params.id
    employeeData.findById(id, function(error, result){
        if(!result){
            res.status(404).send("data not found")
        }
        else{
            result.name = req.body.name;
            result.city = req.body.city;
            result.age = req.body.age;
        }
        result.save().then(result=>{
            res.status(200).send("Updated")
        })
    })
})

router.post('/delete/:id', function(req, res){
    let id= req.params.id;
    employeeData.findByIdAndRemove(id, function(error, result){
        res.send("data deleted");
    })
})
module.exports = router;