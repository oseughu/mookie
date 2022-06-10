import { Item } from '#models/item.model'
import { User } from '#models/user.model'
import { getItems } from '#utils/seed'
import passport from 'passport'

export const login = async (req, res) => {
  const { email, password } = req.body

  const user = new User({
    //Local authentication checks if username and password match
    username: email,
    password
  })

  req.login(user, err => {
    if (err) {
      console.log(err)
    } else {
      passport.authenticate('local')(req, res, async () => {
        await getItems()
        res.redirect('items')
      })
    }
  })
}

export const loginPage = (req, res) => {
  res.render('login', { pageTitle: 'Login', year: new Date().getFullYear() })
}

export const logout = (req, res, next) => {
  req.logout(async err => {
    if (err) {
      return next(err)
    }

    await Item.collection.drop()
    res.redirect('/')
  })
}
