const config = require('./config.js')
const express = require('express')
const app = express()
const cors = require('cors')
const kalamRoute = require('./routes/kalam_route')

app.use(cors())
app.use('/', express.static('web'))
app.use('/urs', express.static('web'))
app.use('/location', express.static('web'))
app.use('/contact', express.static('web'))
app.use('/media', express.static('media'))
app.use('/privacy-policy', express.static('privacy.html'))
app.use('/api/kalam', kalamRoute)

const server = app.listen(config.PORT, () => {
  console.log(`Connected to port ...${ server.address().port }`)
})