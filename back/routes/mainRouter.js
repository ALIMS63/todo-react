import express from 'express';
import Task from '../models/task.js';

const router = express.Router();


router.get('/api', async (req, res) => {
  let tasks = await Task.find();
  res.json({ tasks });
});

router.post('/api/add', async (req, res) => {
  console.log(req.body.inputValue);
  const item = await Task.create({ text: req.body.inputValue });
  res.json({ item });
});

router.post('/api/check', async (req, res) => {
  console.log(req.body.id);
  const item = await Task.findOne({ _id: req.body.id });
  item.status = !item.status;
  await item.save();
  res.redirect('/api');
});

router.post('/api/delete', async (req, res) => {
  console.log(req.body.id);
  const item = await Task.findOneAndDelete({ _id: req.body.id });
  res.redirect('/api');
});

export default router;
