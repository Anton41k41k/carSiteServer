import { Schema, model } from 'mongoose';

const schema = new Schema({
  fullName: { type: String, required: true },
  city: { type: String, required: true },
  email: { type: String, required: true },
  telephone: { type: String, required: true },
  make: { type: String, required: true },
  model: { type: String, required: true },
});

export default model('Order', schema);
