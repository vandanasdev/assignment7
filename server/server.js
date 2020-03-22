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
    console.log("hello");
    return products;
}

function productAdd(_, {product}){
    product.id = productsDB.length + 1;
    productsDB.push(product);
    return product;

}



const app = express();

async function connectToDb() {
    const client = new MongoClient(url, { useNewUrlParser: true, useUnifiedTopology: true });
    await client.connect();
    console.log('Connected to MongoDB at', url);
    db = client.db();
  }

const server = new ApolloServer({
    typeDefs: fs.readFileSync('./server/schema.graphql','utf-8'),
    resolvers,
    
  
});

app.use(express.static('public'));

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
  