function requireAuth(req, res, next) {
    if (!req.session.email) {
      res.redirect('/login');
    }
    next();
}

module.exports = requireAuth;