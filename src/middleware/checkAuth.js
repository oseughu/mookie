const checkAuth = async (req, res, next) => {
  // Passport checks if user is authenticated
  if (req.isAuthenticated()) {
    next()
  } else {
    res.redirect('login')
  }
}

export default checkAuth
