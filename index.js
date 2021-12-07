const { ApolloServer } = require("apollo-server");
const typeDefs = require("./graphql/typeDefs");
const mongoose = require("mongoose");
// const { MONGODB } = require("./config");
const resolvers = require("./resolvers");
const server = new ApolloServer({ typeDefs, resolvers });
mongoose
  .connect(
    "mongodb+srv://Tausif02:TausifShama@cluster0.3ahey.mongodb.net/SocialMediaApp?retryWrites=true&w=majority",
    { useNewUrlParser: true }
  )
  .then(() => {
    console.log("Connected to MongoDB");
    return server.listen({ port: 5000 });
  })
  .then((res) => {
    console.log(`Server ready at ${res.url}`);
  });
