const express = require('express');
const mongoose = require('mongoose');
require('dotenv').config();
const userRoutes = require('./routes/userRoutes');

const cors = require('cors');
const app = express();
app.use(cors());
// Correct connection string with no port number
mongoose.connect(process.env.mongo_url) 
.then(() => console.log('Connected to DB'))
.catch((err) => console.log('Error connecting to DB:', err));
app.use(express.json());
app.use('/user', userRoutes);

app.listen(process.env.port, (err) => {
  if (!err) {
    console.log('Server is connected to port no ', process.env.port);
  } else {
    console.log('Error starting server:', err);
  }
});