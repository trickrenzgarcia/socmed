const express = require('express')
const bodyparser = require('body-parser')
const session = require('express-session')
const { v4: uuidv4 } = require('uuid')

const app = express()

const port = process.env.PORT || 5000

const router = require('./router')

app.use(bodyparser.json())
app.use(bodyparser.urlencoded({extended: true}))

app.use(session({
  secret: uuidv4(),
  resave: false,
  saveUninitialized: true
}))

app.use('/route', router)

app.set('view engine', 'ejs')

app.get('/', (req, res) => {
  res.render('base', { title : "Login System"})
})

app.listen(port, () => {
  console.log(`Server is up! listening on http://localhost:${port}`)
})