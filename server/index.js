const express = require('express');
const app = express();
const getDataFromFirebase = require('./config/FirebaseData')

app.get('/', getDataFromFirebase);

app.listen(9000, ()=>{
    console.log('Running on Port 9000')
})