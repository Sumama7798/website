import User from '../models/user.model.js';
// Get user profile
export const  getUserProfile = async (req, res) => {
  try {
    const user = await User.findById(req.user.id); // Assuming req.user.id is populated after auth
    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }
    res.json(user);
    console.log(user);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server error' });
  }
};

