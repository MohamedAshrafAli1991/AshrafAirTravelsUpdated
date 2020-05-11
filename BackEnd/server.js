const express = require('express');
const mongoose = require('mongoose');
require('dotenv').config()
const cors = require('cors');

//Models
const Role = require('./models/roles');
const User = require('./models/user');
const TestData = require('./models/TestData');

const app = express();

//variables
const PORT =  5001;
const DB_STRING = "mongodb+srv://ashraf:ashraf_12345@cluster0-3tnrv.mongodb.net/ashraf_air_travels?retryWrites=true&w=majority";

//DB Connection
debugger;
console.log('---------->',DB_STRING);
mongoose.connect(DB_STRING, { useNewUrlParser: true,  useUnifiedTopology: true}, (err)=> {if(err) {console.log(err)} console.log(`MongoDB Connected`)});

//middlewares
app.use(express.json());
app.use(cors());

app.get('/', (req, res) => res.send('Hello'));

app.post('/api/addRole', (req, res) => {
    const data = req.body;
    console.log(data);

    const role = new Role(data);

    role.save((err, doc) => {
        if(err){
            console.log(err);
        }
        console.log('document saved');
    });

    res.send(data);
});

app.post('/api/addUser', (req, res) => {
    const data = req.body;
    console.log(data);

    const user = new User(data);

    user.save((err, doc) => {
        if(err){
            console.log(err);
        }
        console.log('document saved');
    });

    res.send(data);
});

//GetUser
app.get('/api/user/:token', (req, res) => {
    const id = req.params.token;
    
    const user = User.findOne({token: id}, (err, user) => {
        if(err){
            console.log(err);
        }
        console.log(user);
        res.send(user);
    });
});

app.post('/api/testData', (req, res) => {
    const data = req.body;

    const testData = new TestData(data);
     testData.save((error, data) => {
         if(error) {
             console.log(error);
             res.send({success: false, message: "Error saving data"})
         }
         res.send({success: true, data: testData});
     });
});

app.get('/api/testData', (req, res) => {
    
    const data = TestData.find((err, user) => {
        if(err){
            console.log(err);
        }
        console.log(user);
        res.send(user);
    });
});

app.get('/api/testData/:customerId', (req, res) => {
    const id = req.params.CustomerId;
    
    const data = TestData.find({CustomerId: id}, (err, user) => {
        if(err){
            console.log(err);
            res.send({success: false, message: 'No Record Found'});
        }
        console.log(user);
        res.send({success: true, data});
    });
});



//Server
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));