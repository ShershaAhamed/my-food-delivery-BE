// import express from "express";
// const app= express()
// const port=4000
// app.get("/api",async(req,res)=>{
//     res.json({message:"hi shersha"})
// })
// app.listen(port,()=>console.log("server listing on ",port))
// server.js

import express from 'express';
import DeliveryAgent from './models.js';
import cors from 'cors'
import {connectToDatabase} from './connection.js'


const app = express();
const port = 4000;

// Connect to MongoDB
// const connectToDatabase = async () => {
//     try {
//         await mongoose.connect('mongodb+srv://ukkasnaina99:50Y4XrsXMhHqge5d@projectk.yqods5s.mongodb.net/ProjectK?retryWrites=true&w=majority');
//         console.log('Connected to MongoDB');
//     } catch (err) {
//         console.error('Error connecting to MongoDB:', err);
//     }
// };

connectToDatabase();
app.use(express.json());
app.use(cors());


// Routes
app.post('/signup', async (req, res) => {
    try {
        const { name, mobileNumber, email, password, address, pincode, city } = req.body;
        const deliveryAgent = DeliveryAgent({
            name,
            mobileNumber,
            email,
            password,
            address,
            pincode,
            city
        });
        await deliveryAgent.save();
        res.status(201).json({ message: 'Delivery agent signed up successfully' });
    } catch (error) {
        console.error('Error signing up delivery agent:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
});



app.listen(port, () => {
    console.log(`Server listening on port ${port}`);
});



