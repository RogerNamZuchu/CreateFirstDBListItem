const { request } = require("express")
const express = require(`express`)

const server = express()

server.get(`/`,(req,res)=>{
    res.send(`Hello! This is first Node Js Server`)
})

server.listen(8000,()=>{
    console.log(`listening at ${8000}`)
})