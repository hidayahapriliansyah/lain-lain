import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import router from './routes/routes.js';

dotenv.config();

const app = express();

mongoose.connect(process.env.MONGODB_URL)
  .then((result) => app.listen(process.env.PORT, () => console.log(`Server running at http://localhost:${process.env.PORT}`)))
  .catch((error) => console.log(error));

// middleware
app.use(express.json());

// routers
app.use(router);
app.get('/', (req, res) => {
  res.send('Hello Confirmation email');
});
