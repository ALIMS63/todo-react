import mongoose from 'mongoose';

export default mongoose.connect("mongodb://localhost:27017/TODO-REACT", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
});
