import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import userRouter from './routes/user.route.js';
import authRouter from './routes/auth.route.js';
dotenv.config();


// Connect To DataBase

mongoose.connect(process.env.MONGODB)
.then( ()=> {
    console.log('Conected to MongoDB!');
})
.catch((err) => {
    console.log(err);
});


// Backend Server Run

const app = express();

app.listen(3000, () => {
    console.log('Server is running on port 3000!');
});

app.use(express.json());

app.use('/api/user', userRouter);
app.use('/api/auth', authRouter);
