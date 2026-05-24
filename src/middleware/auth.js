// Authentication middleware
const authMiddleware = (req, res, next) => {
  // Check for token
  const token = req.headers.authorization;
  
  if (!token) {
    return res.status(401).json({ error: 'Unauthorized' });
  }
  
  next();
};

module.exports = authMiddleware;
