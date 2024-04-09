import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors'
import cookieParser from 'cookie-parser';
const app = express();

dotenv.config({path : "./config/config.env"})
export default app;

app.use(cors({
    origin:[],
    methods:["GET","POST", "PUT","DELETE"],
    credentials:true
}));

app.use(cookieParser());
app.use(express.json()); 
app.use(express.urlencoded({extended:true}));

app.listen(process.env.PORT, () =>{
    console.log(`Server is listening at http://localhost:${process.env.PORT}`);
})