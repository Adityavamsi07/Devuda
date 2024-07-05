// mongoose.js

const mongoose = require('mongoose');
const { Schema } = mongoose;

const url = 'mongodb://localhost:27017/Aditya'; // Replace with your MongoDB URL
const dbName = 'Aditya';

mongoose.connect(url, {
  dbName: dbName,
})
.then(() => console.log('MongoDB connected'))
.catch(err => console.error('MongoDB connection error:', err));

const sampleSchema = new Schema({
  name: String,
  age: Number,
});




const SampleModel = mongoose.model('Sample', sampleSchema);

module.exports = { SampleModel };
