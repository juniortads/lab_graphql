FROM node:10-alpine
WORKDIR /home/node/app
EXPOSE 4000
ENV ENGINE_API_KEY "ENGINE API KEY"
COPY ./package.json ./
RUN npm install --verbose && npm cache clean --force
RUN npm install --verbose apollo-server apollo-server-redis graphql graphql subscriptions-transport-ws express express-graphql --save
COPY . .
USER root
CMD ["npm", "start"]