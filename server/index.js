import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
<<<<<<< HEAD

=======
import dotenv from 'dotenv';
>>>>>>> 7005b3a4e25b1024eeab6a00283eeaa223985415
import postRoutes from './routes/posts.js'


const app = express();

app.use(express.json({limit: "30mb", extended:true}));
app.use(express.urlencoded({ limit: "30mb", extended: true }));
app.use(cors());

app.use('/posts', postRoutes);

<<<<<<< HEAD
const CONNECTION_URL = 'mongodb server';
const PORT = process.env.PORT || 5000;

mongoose.connect(CONNECTION_URL, {useNewUrlParser:true, useUnifiedTopology: true})
=======
const PORT = process.env.PORT || num;

mongoose.connect(process.env.CONNECTION_URL, {useNewUrlParser:true, useUnifiedTopology: true})
>>>>>>> 7005b3a4e25b1024eeab6a00283eeaa223985415
    .then(()=> app.listen(PORT, ()=> console.log(`Server running on port: ${PORT}`)) )
    .catch((error)=> console.log(error.message));

    mongoose.set('useFindAndModify', false);
    
<<<<<<< HEAD
=======
/* In .env add PORT = PORT and CONNECTION_URL= mongodb server url */
>>>>>>> 7005b3a4e25b1024eeab6a00283eeaa223985415
