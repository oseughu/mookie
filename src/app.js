import dotenv from 'dotenv'
import express, { urlencoded } from 'express'
import session from 'express-session'
import { connectDb } from '#utils/db'
import { routes } from '#routes'
import { passportConfig } from '#utils/auth'

const port = process.env.PORT || 3000
const app = express()

dotenv.config()

//To access static files for the web application
app.use(express.static('public'))

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
