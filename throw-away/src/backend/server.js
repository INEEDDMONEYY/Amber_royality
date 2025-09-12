//Imports
import require from 'express'
import post from './data/posts.js'
//import dotnev from "dotenv"
import dotenv from 'dotenv'
const app = require('express');
const port = process.env.PORT || 4000;
//Connecting MongoDB not working, Error: 'TypeError: Cannot read properties of undefined (reading 'setHeader')'. 
// Problem is I'm mixing both ES module(Import) & CommonJS(Require).
//const connectDB = require('./config/db.js');
dotenv.config();
//connectDB();
//Server set up, implement error handlers
///This message is logged to screen
app.get('/', (req, res) => {
  res.send('This is the backend server that will handle data structure, error handling, and database mangement')
})
//This message is logged to the console
app.listen(port, () => {
  console.log(`
    https://Localhost:${port} Keep Grinding🔥!\n
    Form posts should be served here Database intergration will be set up here\n
    User authentication & User functionaility. Make sure backend folder is in the .gitignore file.\n 
    Welcome to Mystery Mansion, where all naughty encounters are private 💝!
    `)
})

//API
//Creating an endpoint to get data from posts
app.get('/api/posts', (req, res) => {
  res.json(post)
})
//Getting posts by id*Getting posts by id not working needs a logic rework usings a different method function maybe filter()*
app.get('/api/posts/:id', (req, res) => {
  const pos = post.find((n) => n._id === req.params.id)
  res.send(pos);
})