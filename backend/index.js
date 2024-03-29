import express, { request } from "express";
import { PORT,mongoDBURL} from "./config.js";
import mongoose from "mongoose";
import booksRoute from './routes/booksRoute.js';
import cors from 'cors';


const app = express();

app.use(express.json());

app.use(cors());

app.get('/',(request,response)=>{
    // console.log(req)
    return response.send('Book store');
});

app.use('/books', booksRoute);

mongoose.connect(mongoDBURL)
    .then(()  => {
        console.log('App connected to db');
        app.listen(PORT, ()=>{
            console.log(`App is listening to port: ${PORT}`);
        });
    })
    .catch((error)=>{
        console.log(error);
    });