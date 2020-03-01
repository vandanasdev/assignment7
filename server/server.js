const fs = require('fs');
const express = require('express');
const { ApolloServer } = require('apollo-server-express');


const productsDB = [
    {
        id: 1, category: 'Shirts', pname: 'Plaid Shirt', price: 3.00, imageUrl:'xyz',
    },
    {
        id: 2, category: 'Accessories', pname: 'Plaid Shirt', price: 3.00, imageUrl:'xyz',
    },
];

const resolvers = {
    Query:{
        productList,
    },
    Mutation: {
        productAdd,
    },
   
};

function productList(){
    return productsDB;
}

function productAdd(_, {product }){
    product.id = productsDB.length + 1;
    productsDB.push(product);
    return product;

}



const app = express();

const server = new ApolloServer({
    typeDefs: fs.readFileSync('./server/schema.graphql','utf-8'),
    resolvers,
    
  
});

app.use(express.static('public'));

server.applyMiddleware({app, path: '/graphql'});

app.listen(3000, function(){
    console.log('App started on port 3000');
});
