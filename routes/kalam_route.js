const { Op } = require('sequelize')
const Kalam = require('../models/kalam')
const Joi = require('joi')
const express = require('express')
const router = express.Router()

const validation = Joi.object({
  offset: Joi.number().min(1).required(),
  pageSize: Joi.number().min(1).max(30).required(),
  keyword: Joi.string().pattern(/^[a-z\d\-_\s]+$/i).empty('').default('').trim()
})

router.get('/', async function(req, res) {

  try {

    const value = await validation.validateAsync(req.query)

    // prepare request keys
    const pageSize = value.pageSize
    const offset = pageSize * (value.offset - 1)
    const keyword = value.keyword

    // setup where clause
    whereClause = {
      [Op.or]: [
        {
          title: {
            [Op.like]: `%${ keyword }%`
          }
        },
        {
          location: {
            [Op.like]: `%${ keyword }%`
          }
        },
        {
          recorded_date: {
            [Op.like]: `%${ keyword }%`
          }
        }
      ]
    }

    // query the kalam table find all the record by matching the given criteria
    let kalams = await Kalam.findAll({
      where: whereClause,
      order:[
        ['id', 'DESC']
      ],
      offset: offset,
      limit: pageSize
    });

    // count total number of records from kalam table
    const totalRecord = await Kalam.count({where: whereClause})

    // prepare result object
    result = {
      status: true,
      total_record: totalRecord,
      page_size: pageSize,
      offset: value.offset
    }

    // attach next page info to the result object if available
    result.has_next = (value.offset * pageSize) < totalRecord
    if (result.has_next) {
      result.next = value.offset + 1
    }

    // attach previous page info to the result object if available
    result.has_previous = value.offset > 1
    if (result.has_previous) {
      result.previous = value.offset - 1
    }

    // attach filtered record to the result
    result.data = kalams

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
