import mongoose from 'mongoose';

const verificationSchema = new mongoose.Schema({
  user_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'user',
  },
  unique_string: {
    type: String,
  },
  expired_at: {
    type: Date,
  },
});

const Verification = mongoose.model('verification', verificationSchema);

export default Verification;