const express = require('express');
const { createPost, getPosts } = require('./posts');

const app = express();

app.use(express.json());

app.post('/posts', async (req, res) => {
  const post = req.body;
  const result = await createPost(post);
  res.json(result);
});

app.get('/posts', async (req, res) => {
  const posts = await getPosts();
  res.json(posts);
});

app.listen(3000, () => {
  console.log('Server started on port 3000');
});
