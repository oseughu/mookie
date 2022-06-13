import { routes } from '#routes'
import { passportConfig } from '#utils/auth'
import { connectDb } from '#utils/db'
import 'dotenv/config'
import express, { urlencoded } from 'express'
import session from 'express-session'

const port = process.env.PORT || 3000
const app = express()

//To access static files for the web application
app.use(express.static('public'))

//To parse the body of the request
app.use(urlencoded({ extended: true }))

// Setting the view engine
app.set('view engine', 'ejs')

//Use express-session to save cookies and user data
app.use(
  session({
    secret: process.env.SECRET,
    resave: false,
    saveUninitialized: true
  })
)

passportConfig(app)

app.use(routes)

app.listen(port, () => {
  connectDb()
  console.log('Server started successfully. Connected to MongoDB.')
})
