const mongoose = require('mongoose');
const url = 'mongodb+srv://shiva850681:Kaliya8506@cluster0.cro6kwk.mongodb.net/Issue_tracker?retryWrites=true&w=majority';
// mongoose.connect('url') 
mongoose.connect(url);
const db=mongoose.connection;

//If any Error then Getting this Line
db.on('error',console.error.bind(console,"Error connecting to MongoDB"));   


db.once('open',()=>{
    console.log("Connected to Database :: MongoDB ")
});

module.exports=db;  //Exports db
