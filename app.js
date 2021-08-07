const express = require('express');
const router = express.Router();
const userRouter = require('./routes/users.route')

const app = express();
const PORT = 3000;

app.use(userRouter);        
app.use((req,res) =>{

   res.send("404 Not Found");


})


module.exports = app;