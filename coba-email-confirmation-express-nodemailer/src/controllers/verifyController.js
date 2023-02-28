import User from '../models/User.js';
import Verification from '../models/Verification.js';

const verify_get = async (req, res) => {
  const uniqueString = req.params.uniqueString;
  
  const verification = await Verification.findOne({ unique_string: uniqueString });
  
  const userId = verification.user_id;
  const user = await User.findOneAndUpdate({ _id: userId }, { is_verified: true }, { new: true });
  console.log(user);

  res.status(200).json({
    status: 'ok',
    message: 'is verified',
    user,
  });
};

export {
  verify_get,
};
