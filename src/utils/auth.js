import passport from 'passport'
import { User } from '#models/user.model'

export const passportConfig = app => {
  app.use(passport.initialize())
  app.use(passport.session())

  passport.use(User.createStrategy())

  passport.serializeUser(function (user, done) {
    done(null, user.id)
  })

  passport.deserializeUser(function (id, done) {
    User.findById(id, function (err, user) {
      done(err, user)
    })
  })
}
