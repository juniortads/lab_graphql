const { ApolloServer } = require('apollo-server');
const { RedisCache } = require('apollo-server-cache-redis');
const typeDefs = require('./schema');

const books = [
  {
    title: 'Harry Potter and the Chamber of Secrets',
    author: 'J.K. Rowling',
    age: 17
  },
  {
    title: 'Jurassic Park',
    author: 'Michael Crichton',
    age: 20
  },
];

const resolvers = {
  Query: {
    books: () => books,
  },
};

const server = new ApolloServer({ 
  typeDefs, 
  resolvers,
  cache: new RedisCache({
    host: 'clustercfg.cache-graphql.4m0ruu.sae1.cache.amazonaws.com',
    port: 6379
  }),
  engine: {
    apiKey: process.env.ENGINE_API_KEY
  } 
});

server.listen().then(({ url }) => { 
  console.log(`🚀  Server ready at ${url} ${process.env.ENGINE_API_KEY} `); 
});