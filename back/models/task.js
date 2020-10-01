import mongoose from 'mongoose';

const TaskSchema = mongoose.Schema({
  text: String,
  status: {
    type: Boolean,
    default: false
  },
  createdAt: {
    type: String,
    default: new Date().toLocaleString('ru-RU')
  }
});

export default mongoose.model('Task', TaskSchema);
