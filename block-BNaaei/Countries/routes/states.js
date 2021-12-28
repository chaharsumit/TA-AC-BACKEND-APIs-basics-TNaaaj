let express = require('express');

let router = express.router;


router.get('/:id/neighbours', (req, res, next) => {
  let id = req.params.id;
  State.findById(id).populate("neighbouring_states", "name").exec((err, state) => {
    if(err){
      res.status(500);
      return next(err);
    }
    res.status(200).json({ state });
  })
})

router.get('/ascending', (req, res, next) => {
  State.find({}).sort({ population: 1 }).exec((err, result) => {
    if(err){
      res.status(500);
      return next(err);
    }
    res.status(200).json({ result });
  })
})

module.exports = router;