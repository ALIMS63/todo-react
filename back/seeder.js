import mongoose from 'mongoose';
import './misc/db.js';
import Task from './models/task.js';

const entries = [
  {
    text: 'Sport'
  },
  {
    text: 'Sleep'
  },
  {
    text: 'Work'
  }
];

(async () => {
  await mongoose.connection.dropDatabase();
  await Task.insertMany(entries);
  await mongoose.connection.close(); // or await mongoose.disconnect();
})()
