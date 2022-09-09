import Item from '#models/item.model'
import User from '#models/user.model'
import passport from 'passport'

export const register = (req, res) => {
  const { username, password, confirmPassword } = req.body

  if (password !== confirmPassword) {
    res.send('Passwords do not match')
    res.redirect('register')
  } else {
    User.register({ username }, password, (err, user) => {
      if (err) {
        console.log(err)
        res.redirect('register')
      } else {
        passport.authenticate('local')(req, res, () => {
          res.redirect('items')
        })
      }
    })
  }
}

export const registerPage = (req, res) => {
  res.render('register', {
    pageTitle: 'Register',
    year: new Date().getFullYear()
  })
}

export const login = (req, res) => {
  const { email, password } = req.body

  const user = new User({
    //Local authentication checks if username and password match
    username: email,
    password
  })

  req.login(user, (err) => {
    if (err) {
      res.send('Error logging in')
      res.redirect('login')
    } else {
      passport.authenticate('local')(req, res, () => {
        res.redirect('items')
      })
    }
  })
}

export const loginPage = (req, res) => {
  res.render('login', { pageTitle: 'Login', year: new Date().getFullYear() })
}

export const logout = (req, res, next) => {
  req.logout(async (err) => {
    if (err) {
      return next(err)
    }

    await Item.collection.drop()
    res.redirect('/')
  })
}
