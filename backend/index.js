require('dotenv').config();
const express = require('express');
const cors = require('cors')
const UserRouter = require('./routers/userRouter');
const CourseRouter = require('./routers/courseRouter');
const EnrollRouter = require('./routers/enrollRouter');
const feedbackrouter = require('./routers/Feedbackrouters');
const ProgressRouter = require('./routers/progressRouter');
const contactRouter = require('./routers/contactRouter');


const app = express();

const port = process.env.PORT || 5000;

//middleware

app.use(cors({
    origin: '*'
}))
app.use(express.json());
app.use('/user', UserRouter);
app.use('/course', CourseRouter);
app.use('/enroll', EnrollRouter);
app.use('/feedback', feedbackrouter);
app.use('/progress', ProgressRouter);
app.use('/contact', contactRouter);


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
    console.log(`server started - ${port}`);
});