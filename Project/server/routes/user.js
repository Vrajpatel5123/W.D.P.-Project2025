const express = require("express")
const user = require("../models/user")
const router = express.Router()

router 
    .get('/getUsers', async (req, res) => {
        try{
            const users = await user.getAllUsers()
            res.send(users)
        } catch(err){
            res.status(401).send({error: err.message})
        }
    })

    .post('/login', async (req,res) => {
        try{
        
            const users = await user.loginUser(req.body)
            res.send({...users,password: undefined})
        } catch(err){
            res.status(401).send({error: err.message})
        }
    })

    .post('/register', async (req,res) => {
        try{
            const users = await user.registerUser(req.body)
            res.send({...users,password: undefined})
        }catch(err){
            res.status(401).send({error: err.message})
        }
    })

    .put('/update', async (req,res) => {
        try{
            const users = await user.editUser(req.body)
            res.send({...users, passowrd: undefined})
        } catch(err){
            res.status(401).send({error: err.message})
        }
    })

    .delete('/delete', async (req,res) => {
        try{
            const users = await user.deleteAccount(req.body)
            res.send({message: "Account deleted successfully!, Thank you choosing us!"})
        } catch(err){
            res.status(401).send({error: err.message})
        }
    })

module.exports = router