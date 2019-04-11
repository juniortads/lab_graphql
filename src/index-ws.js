const { Server } = require('http');
const { SubscriptionServer } = require('subscriptions-transport-ws');
const { execute, subscribe } = require('graphql');

const GraphHTTP = require('express-graphql');
const express = require('express');
const schema = require('./schema');

const app = express();

app.use('/api/ql', GraphHTTP({
  schema: schema,
  graphiql: true,
}));

const server = Server(app);

SubscriptionServer.create({
  schema,
  execute,
  subscribe,
}, {
  server: server,
  path: '/ws',
}, );

server.listen(4000, () => {
    console.log(`🚀  Server ready at localhost:4000`); 
});