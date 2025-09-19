import express from 'express';
import mongoose from'mongoose';
import dotenv from 'dotenv';
import authRoutes from "./routes/authRoutes.js";

dotenv.config();

const app = express();
app.use(express.json());

// Connect to MongoDB
mongoose.connect(process.env.MONGO_URI)
.then(() => console.log('MongoDB Connected...'))
.catch(err => console.log(err));

//routes
app.use("/auth", authRoutes);

app.listen(process.env.PORT, () => console.log(`Server running on port ${process.env.PORT}`));