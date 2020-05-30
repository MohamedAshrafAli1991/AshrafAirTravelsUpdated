const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const cors = require('cors');
const connectDB = require('./config/db');
const TestData = require('./models/TestData');

//Loading env variables
dotenv.config({ path: './config/.env' });

//DB Connection
connectDB();

//Routing files
const users = require('./routes/users');

const app = express();

//Body Parser
app.use(express.json());

//Enable CORS
app.use(cors());

//Routers
app.use('/api/users', users);

const PORT = process.env.PORT || 5000;

//Server
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

// Handle unhandled promise rejections
process.on('unhandledRejection', (err, promise) => {
  console.log(`Error: ${err.message}`);
});

// app.get('/', (req, res) => res.send('Hello'));

// app.post('/api/addRole', (req, res) => {
//     const data = req.body;
//     console.log(data);

//     const role = new Role(data);

//     role.save((err, doc) => {
//         if(err){
//             console.log(err);
//         }
//         console.log('document saved');
//     });

//     res.send(data);
// });

// app.post('/api/addUser', (req, res) => {
//     const data = req.body;
//     console.log(data);

//     const user = new User(data);

//     user.save((err, doc) => {
//         if(err){
//             console.log(err);
//         }
//         console.log('document saved');
//     });

//     res.send(data);
// });

// //GetUser
// app.get('/api/user/:token', (req, res) => {
//     const id = req.params.token;

//     const user = User.findOne({token: id}, (err, user) => {
//         if(err){
//             console.log(err);
//         }
//         console.log(user);
//         res.send(user);
//     });
// });

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
        res.send(user);
    });
});

// app.get('/api/testData/:customerId', (req, res) => {
//     const id = req.params.CustomerId;

//     const data = TestData.find({CustomerId: id}, (err, user) => {
//         if(err){
//             console.log(err);
//             res.send({success: false, message: 'No Record Found'});
//         }
//         console.log(user);
//         res.send({success: true, data});
//     });
// });
