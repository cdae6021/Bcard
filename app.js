const express = require('express')
const exphbs = require('express-handlebars')
const methodOverride = require('method-override') 
const session = require('express-session')
const routes = require('./routes')


const app = express()
const port = process.env.PORT || 3000
const db = require('./models')

app.engine('hbs', exphbs({ defaultLayout: 'main', extname: '.hbs' }))
app.set('view engine', 'hbs')
app.use(session({
    secret: 'ThisIsMySecret',
    resave: false,
    saveUninitialized: true
  }))
app.use(methodOverride('_method'))
app.use(express.urlencoded({ extended: true }))

app.use(routes)


app.listen(port, () => {
  console.log('app is listen at http://localhost:3000')
})