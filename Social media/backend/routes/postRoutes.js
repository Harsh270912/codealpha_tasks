const express = require('express');
const router = express.Router();

let posts = [];

router.post('/', (req, res) => {
  const { userId, content } = req.body;
  const post = { id: posts.length + 1, userId, content, timestamp: new Date() };
  posts.push(post);
  res.json({ message: 'Post created', post });
});

router.get('/', (req, res) => {
  res.json(posts);
});

module.exports = router;
