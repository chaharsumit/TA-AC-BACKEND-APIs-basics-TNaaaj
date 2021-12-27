var express = require('express');

var router = express.Router();

//get single comment
router.get('/:id', (req, res, next) => {
  let id = req.params.id; //comment id 
  //find comment by id db.findbyid(id)
  res.status(200).json('single comment');
});

//create a comment
router.get('/new', (req, res, next) => {
  res.status(200).json('comment creation page');
});

//edit a comment
router.get('/:id/edit', (req, res, next) => {
  let id = req.params.id; // comment id
  //find comment and update db.findbyidandupdate(id);
  res.status(200).json('edit comment page with existing comment data');
})

router.post('/:id', (req, res, next) => {
  let id = req.params.id; // comment id
  //find comment and update db.findbyidandupdate(id);
  res.status(200).json('edited comment data');
})

//delete

router.get('/:id/delete', (req, res, next) => {
  let id = req.params.id;
  //find comment by id and delete
  res.status(200).json('back to books redirect');
});

module.exports = router;