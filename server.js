import express from 'express';
import dotenv from 'dotenv';
import mongoose from 'mongoose';
import routesProject from './routes/routesProject.js';


dotenv.config();;
const app=express();
app.use(express.json());
app.use('/SA3DNY', routesProject);


mongoose
.connect(process.env.MONGO_URI)
.then(()=>{
    app.listen(process.env.PORT,()=>{
        console.log(`Server running on http://localhost:${process.env.PORT} ya batal`);
    });
})
.catch((error)=>(console.error(error)
));
