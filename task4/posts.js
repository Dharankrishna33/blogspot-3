const { getDb } = require('./db');

const COLLECTION_NAME = 'posts';

const createPost = async (post) => {
  const db = getDb();
  const result = await db.collection(COLLECTION_NAME).insertOne(post);
  return result.ops[0];
};

const getPosts = async () => {
  const db = getDb();
  const posts = await db.collection(COLLECTION_NAME).find().toArray();
  return posts;
};

module.exports = { createPost, getPosts };
