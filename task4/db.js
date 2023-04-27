const MongoClient = require('mongodb').MongoClient;

const url = 'mongodb://localhost:27017/myblog';

const client = new MongoClient(url, { useUnifiedTopology: true });

let db;

const connect = async () => {
  await client.connect();
  console.log('Connected to MongoDB');
  db = client.db();
};

const getDb = () => db;

module.exports = { connect, getDb };
