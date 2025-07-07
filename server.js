import express from 'express';
import dotenv from 'dotenv';
import mongoose from 'mongoose';
import craftsmanRoutes from './routes/craftsmanRoutes.js';
import serviceRoutes from './routes/serviceRoutes.js';
import userRoutes from './routes/userRoutes.js';


dotenv.config();;
const app=express();
app.use(express.json());
app.use('/SA3DNY/user', userRoutes);
app.use('/SA3DNY/craftsman', craftsmanRoutes);
app.use('/SA3DNY/service', serviceRoutes);


mongoose
.connect(process.env.MONGO_URI)
.then(()=>{
    app.listen(process.env.PORT,()=>{
        console.log(`Server running on http://localhost:${process.env.PORT} ya batal`);
    });
})
.catch((error)=>(console.error(error)
));
