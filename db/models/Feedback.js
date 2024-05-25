import { Schema, model } from 'mongoose';

const schema = new Schema({
  gender: { type: String, required: true },
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  surname: { type: String },
  email: { type: String, required: true },
  number: { type: String, required: true },
  VIN: { type: String },
  topic: { type: String, required: true },
  message: { type: String, required: true },
});

export default model('Feedback', schema);
