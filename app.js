const config = require('./config.js')
const express = require('express')
const app = express()
const cors = require('cors')
const kalamRoute = require('./routes/kalam_route')
const occasionRoute = require('./routes/occasion_route')
const mediaRoute = require('./routes/media_route')
const eventsRoute = require('./routes/event_route')

app.use(cors())
app.use('/', express.static('web'))
app.use('/urs', express.static('web'))
app.use('/location', express.static('web'))
app.use('/contact', express.static('web'))
app.use('/media', express.static('media'))
app.use('/revamp', express.static('revamp'))
app.use('/privacy-policy', express.static('privacy.html'))
app.use('/api/kalam', kalamRoute)
app.use('/api/occasion', occasionRoute)
app.use('/api/media', mediaRoute)
app.use('/api/events', eventsRoute)

const server = app.listen(config.PORT, () => {
  console.log(`Connected to port ...${ server.address().port }`)
})
