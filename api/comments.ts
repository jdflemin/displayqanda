import * as express from 'express';
import Comments from '../models/comments';

let router = express.Router();


router.get('/', (req, res) => {
  Comments.find().then((foundComment) =>
  res.json(foundComment));
});

router.get('/:id', (req, res) => {
  Comments.findById(req.params.id)
  .then((foundComment) => res.json(foundComment));
});

router.get('/answers/:id/comment', (req, res) => {
  Comments.find({answerId: req.params.id})
  .then((foundComment) => res.json(foundComment));
});

export default router;
