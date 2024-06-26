const userModel=require("../Models/userModel")
const authorizeUser = (requiredRole) => async(req, res, next) => {
    try {
      const user = await userModel.findById(req.userId);
      
      if (user.role !== requiredRole) {
        return res.status(403).json({ error: 'Forbidden' });
      }
      
      next();
    } catch (error) {
      console.error('Error authorizing user:', error);
      res.status(500).json({ error: 'An error occurred while authorizing the user' });
    }
  };