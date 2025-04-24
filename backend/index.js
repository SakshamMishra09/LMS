require('dotenv').config();
const express = require('express');
const UserRouter = require('./router/UserRouter');

const app = express();

const port = process.env.PORT || 5000;

//middleware
app.use('/user', UserRouter);

//end point route
app.get('/',(req, res) => {
    res.send('response from express');
});

app.get('/add',(req, res) => {
    res.send('response from add');
});
//getall
//delete ka banana hai

app.listen(port, () => {
    console.log('server started');
});