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
  Country.findById(id).populate("state", "population").sort({ "state.population": 1 }).exec((err, country) => {
    if(err){
      res.status(500);
      return next(err);
    }
    res.status(200).json({ country });
  })
})

router.get('/:id/neighbours', (req, res, next) => {
  let id = req.params.id;
  Country.findById(id).populate("neighbouring_countries", "name").exec((err, country) => {
    if(err){
      res.status(500);
      return next(err);
    }
    res.status(200).json({ country });
  })
})

router.get('/:id/religions', (req, res, next) => {
  let id = req.params.id;
  Country.findById(id).distinct("ethnicity").exec((err, result) => {
    if(err){
      res.status(500);
      return next(err);
    }
    res.status(200).json({ result });
  })
})

router.get('/:id/religions/religion_name', (req, res, next) => {
  let id = req.params.id;
  Country.find({$in: {ethnicity: religion_name}}, (err, countries) => {
    if(err){
      res.status(500);
      return next(err);
    }
    res.status(200).json({ countries });
  })
})

router.get('/:id/continents/continent_name', (req, res, next) => {
  let id = req.params.id;
  Country.find({$in: {continent: continent_name}}, (err, countries) => {
    if(err){
      res.status(500);
      return next(err);
    }
    res.status(200).json({ countries });
  })
})

router.get('/population/:number', (req, res, next) => {
  let population = req.params.number;
  Country.findOne({ population }, (err, country) => {
    if(err){
      res.status(500);
      return next(err);
    }
    res.status(200).json({ country });
  })
})

module.exports = router;