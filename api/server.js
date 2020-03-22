const fs = require('fs');
const express = require('express');
const { ApolloServer } = require('apollo-server-express');
const { MongoClient } = require('mongodb');

const url = 'mongodb+srv://vandana:qwerty12A@cluster0-gogey.mongodb.net/productsinventory?retryWrites=true&w=majority';

let db;

const productsDB = [];

const resolvers = {
    Query:{
        productList,
    },
    Mutation: {
        productAdd,
    },
   
};

async function productList(){
    const products = await db.collection('products').find({}).toArray();
    return products;
}

async function getNextSequence(name) {
    const result = await db.collection('counters').findOneAndUpdate(
      { _id: name },
      { $inc: { current: 1 } },
      { returnOriginal: false },
    );
    return result.value.current;
  }

async function productAdd(_, {product}){
    product.id = await getNextSequence('products');
    const result = await db.collection('products').insertOne(product);
    const savedProduct = await db.collection('products')
      .findOne({ _id:result.insertedId });
    return savedProduct;

}



const app = express();

async function connectToDb() {
    const client = new MongoClient(url, { useNewUrlParser: true, useUnifiedTopology: true });
    await client.connect();
    console.log('Connected to MongoDB at', url);
    db = client.db();
  }

const server = new ApolloServer({
    typeDefs: fs.readFileSync('schema.graphql','utf-8'),
    resolvers,
    
  
});

server.applyMiddleware({app, path: '/graphql'});

(async function () {
    try {
      await connectToDb();
      app.listen(3000, () => {
        // console.log('API server started on port 3000');
        // console.log("DB URL",process.env.DB_URL);
        console.log(`API server started on port 3000`);
      });
    } catch (err) {
      console.log('ERROR:', err);
    }
  }());
  