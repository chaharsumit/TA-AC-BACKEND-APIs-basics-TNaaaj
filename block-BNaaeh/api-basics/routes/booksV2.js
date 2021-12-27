var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/',(req, res, next) => {
  //find all books from db db.find({});
  res.status(200).json("all books");
});

router.get('/:id', (req, res, next) => {
  let id = req.params.id;
  //find a book from db by id
  //for error res.status(404).json("not found");
  res.status(200).json('single book');
})

router.post('/', (req, res, next) => {
  //create a book db.create
  res.status(200).json('created book');
});

router.post('/:id', (req, res, next) => {
  let id = req.params.id;
  //update book db.findandupdatebyid(id)
  res.status(200).json('updated book');
});

router.get('/:id', (req, res, next) => {
  let id = req.params.id;
  //delete book db.findbyidanddelete(id)
  res.status(200).json('deleted book');
});

router.get('/:id/comments', (req, res, next) => {
  let id = req.params.id;
  //find all comments and list db.find({})
  req.status(200).json('all comments');
})

module.exports = router;