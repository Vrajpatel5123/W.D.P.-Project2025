const express = require("express")
const chat = require("../models/chat.js")
const router = express.Router()

router

    .get('/getAllChat', async (req,res) => {
        try{
            // const chatById = req.body.UserId
            const chats = await chat.getAllChats()
            console.log(chats)
            res.send(chats)
        } catch(err){
            res.status(401).send({error: err.message})
        }
    })
    .post('/createChat', async (req,res) => {
        try{
            const chats = await chat.createChat(req.body)
            console.log(chats)
            res.send(chats)
        } catch(err){
            res.status(401).send({error: err.message})
        }
    })

    .delete('/deleteChat', async (req,res) => {
        try{
            const chats = await chat.deleteChat(req.body.ChatId)
            res.send({message: "Chat deleted successfully!"})
        } catch(err){
            res.status(401).send({error: err.message})
        }
    })

module.exports = router