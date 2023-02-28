const { Op } = require('sequelize')
const Media = require('../models/media')
const Joi = require('joi')
const express = require('express')
const router = express.Router()

const validation = Joi.object({
  holderId: Joi.number().min(0).required()
})

router.get('/', async function(req, res) {

  try {

    const value = await validation.validateAsync(req.query)

    const whereClause = {
      holderId: {
        [Op.eq]: value.holderId
      }
    }

    // query the kalam table find all the record by matching the given criteria
    let media = await Media.findAll({
      where: whereClause,
      //logging: console.log
    });

    // count total number of records from kalam table
    const totalRecord = await Media.count({where: whereClause})

    // prepare result object
    let result = {
      status: true,
      totalRecord: totalRecord,
      data: media
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
