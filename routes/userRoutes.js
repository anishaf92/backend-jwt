const express = require('express');
const User = require('../models/user');
const jwt = require("jsonwebtoken")
const router = express.Router()
require('dotenv').config();
router.post('/signUp',(req,res) => {
    console.log(req.body)
    const {name,age,email,password} = req.body;
    const newUser = new User({name,age,email,password})
    newUser.save()
    .then(() => res.send('Signed up'))
    .catch((err) => res.send(err))
    
})
router.post('/login',(req,res) =>{
    const {email,password} = req.body;
    User.find({email})
    .then((data) => {
        if(data[0].password === password){
            //const token = jwt.sign({email,password},process.env.secret_key,{expiresIn:"1h"})
            res.json({"login":"true"})
        }
    })
    .catch(err => console.log(err))
})
router.get('/getUsers',(req,res) => {
            User.find()
            .then((data) => res.json(data))
            .catch((err) => res.send(err))
      
   
})
router.put('/editUser/:id',(req,res) => {
    const id = req.params.id
    const {email} = req.body
    console.log(id)
    User.findByIdAndUpdate(id,{"email":email},{new:true})
    .then(user => res.json(user))
    .catch(err => res.send(err))
})
router.delete('/deleteUser/:id',(req,res) => {
    const id = req.params.id
    User.findByIdAndDelete(id)
    .then(result => res.send(result))

})
module.exports = router;