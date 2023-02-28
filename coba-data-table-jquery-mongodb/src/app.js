import express from 'express';
import dotenv from 'dotenv';
import mongoose from 'mongoose';
import path from 'path';
import { fileURLToPath } from 'url';

import personRoutes from './routes/personRoutes.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

dotenv.config();

const app = express();
mongoose.connect(process.env.MONGODB_URL)
  .then((result) => app.listen(process.env.PORT, () => console.log(`Server running on http://localhost:${process.env.PORT}`)))
  .catch((error) => console.log(err));

// view engine
app.set('view engine', 'ejs');
app.set('views', `${__dirname}/views`);

// routes
app.get('/', (req, res) => {
  res.send('hello word');
});
app.use('/person', personRoutes);
