import { User } from '#models/user.model'
import { getItems } from '#utils/seed'
import passport from 'passport'

export const register = async (req, res) => {
  const { username, password, confirmPassword } = req.body

  if (password !== confirmPassword) {
    res.redirect('register')
  } else {
    User.register({ username }, password, (err, user) => {
      if (err) {
        console.log(err)
        res.redirect('register')
      } else {
        passport.authenticate('local')(req, res, async () => {
          await getItems()
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
