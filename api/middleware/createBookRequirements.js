function createBookRequirements(req, res, next) {
  const { googleId } = req.body;

  if (googleId) {
    next();
  } else {
    res.status(400).json({ error: 'MissingGoogleId' });
  }
}

module.exports = createBookRequirements;
