var express = require('express');
const { route } = require('.');
const Country = require('../models/Country');
var router = express.Router();

/* GET users listing. */
router.get('/', (req, res, next) => {
  Country.find({}, (err, countries) => {
    if(err){
      res.status(500);
      return next(err);
    }
    res.status(200).json({ countries });
  })
})

router.get('/new', (req, res, next) => {
  res.send({ /* send form for country creation */ });
})

router.post('/', (req, res, next) => {
  Country.create(req.body, (err, country) => {
    if(err){
      res.status(500);
      return next(err);
    }
    res.status(200).json({ country });
  });
})

router.get('/:id', (req, res, next) => {
  Country.findById(id, (err, country) => {
    if(err){
      res.status(500);
      return next(err);
    }
    res.status(200).json({ country });
  })
})

router.get('/:id/edit', (req, res, next) => {
  Country.findById(id, (err, country) => {
    if(err){
      res.status(500);
      return next(err);
    }
    res.status(200).json({ country });
  })
})

router.post('/:id', (req, res, next) => {
  Country.findByIdAndUpdate(id, req.body, (err, country) => {
    if(err){
      res.status(500);
      return next(err);
    }
    res.status(200).json({ country });
  });
})

router.get('/:id/delete', (req, res, next) => {
  Country.findByIdAndDelete(id, (err, country) => {
    if(err){
      res.status(500);
      return next(err);
    }
    res.status(200).json({ country });
  })
})

//all states for country in ascendeing order

router.get('/:id/statesAscending', (req, res, next) => {
  let id = req.params.id;
  Country.findById(id).populate({path: "State", select: population, option: {sort: {population: 1}}}).exec((err, country) => {
    if(err){
      res.status(500);
      return next(err);
    }
    res.status(200).json({ country });
  })
})

module.exports = router;
