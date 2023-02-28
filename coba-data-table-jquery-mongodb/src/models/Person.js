import mongoose from 'mongoose';

const personSchema = new mongoose.Schema({
  first_name: {
    type: String,
  },
  last_name: {
    type: String,
  },
  email: {
    type: String,
  },
  gender: {
    type: String,
    enum: ['Male', 'Female'],
  },
}, { timestamps: true });

const Person = mongoose.model('person', personSchema);

export default Person;
