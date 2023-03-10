const Events = require('../models/events')
const express = require('express')
const router = express.Router()

router.get('/', async function(req, res) {

  try {

    let events = await Events.findAll();

    const totalRecord = await Events.count()

    // prepare result object
    let result = {
      status: true,
      totalRecord: totalRecord,
      data: events
    }

    // send result and status back to the client
    res.status(200).send(result)

  }

  // request not full filled and failed by Joi validation.
  catch(err) {
    res.status(400).send({
      status: false,
      error: err.message
    })
  }
})

module.exports = router
