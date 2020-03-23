require('dot').config();
const { MongoClient } = require('mongodb');

const url = process.env.DB_URL || 'mongodb+srv://vandana:qwerty12A@cluster0-gogey.mongodb.net/productsinventory?retryWrites=true&w=majority';

function testWithCallbacks(callback) {
  console.log('\n--- testWithCallbacks ----');
  const client = new MongoClient(url, { useNewUrlParser: true, useUnifiedTopology: true });
  client.connect((connErr) => {
    if (connErr) {
      callback(connErr);
      return;
    }
    console.log('Connected to MongoDB URL', url);

    const db = client.db();
    const collection = db.collection('products');

    const product = { id: 1, category:'Jeans',pname:'A. Callback', price: 23, imageUrl:'xyz.jpg' };
    collection.insertOne(product, (insertErr, result) => {
      if (insertErr) {
        client.close();
        callback(insertErr);
        return;
      }
      console.log('Result of insert:\n', result.insertedId);
      collection.find({ _id: result.insertedId })
        .toArray((findErr, docs) => {
          if (findErr) {
            client.close();
            callback(findErr);
            return;
          }
          console.log('Result of find:\n', docs);
          client.close();
          callback();
        });
    });
  });
}

async function testWithAsync(callback) {
  console.log('\n--- testWithAsync ----');
  const client = new MongoClient(url, { useNewUrlParser: true, useUnifiedTopology: true });
  try {
    await client.connect();
    console.log('Connected to MongoDB URL', url);
    const db = client.db();
    const collection = db.collection('products');
    const product = { id: 3, category:'Sweaters', pname: 'B. Async', price: 18, imageUrl: 'abc.jpg' };
    const result = await collection.insertOne(product);
    console.log('Result of insert:\n', result.insertedId);
    const docs = await collection.find({ _id: result.insertedId })
      .toArray();
    console.log('Result of find:\n', docs);
  } catch (err) {
    console.log(err);
  } finally {
    client.close();
  }
}

testWithCallbacks((err) => {
  if (err) {
    console.log(err);
  }
  testWithAsync();
});
