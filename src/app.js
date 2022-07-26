import { routes } from '#routes'
import { passportConfig } from '#utils/auth'
import { connectDb } from '#utils/db'
import 'dotenv/config'
import express, { urlencoded } from 'express'
import session from 'express-session'
import path from 'path'
import * as url from 'url'

const __dirname = url.fileURLToPath(new URL('.', import.meta.url))
const port = process.env.PORT || 3000
const app = express()

connectDb()

//To access static files for the web application
app.use(express.static('public'))

//To parse the body of the request
app.use(urlencoded({ extended: true }))

// Setting the view engine
app.set('view engine', 'ejs')

// Setting the views directory
app.set('views', path.join(__dirname, 'views'))

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
  console.log(`Server running on port ${port}. Connected to MongoDB.`)
})
