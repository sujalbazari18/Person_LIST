const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
// const dbConfig = require('./config/db.config.js');

const app = express();
app.use(cors());
app.use(express.json());

const MONGO_URI = process.env.MONGO_URI || 'mongodb://localhost:27017/mydatabase';

mongoose.connect(MONGO_URI,{
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(() => {
  console.log('Connected to MongoDB');
}).catch(err => {
  console.error('MongoDB connection error:', err);
  process.exit();
});

const personRoutes = require('./routes/person.routes');
app.use('/person', personRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
