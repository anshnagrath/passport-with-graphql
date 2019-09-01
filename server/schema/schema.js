const graphql = require('graphql');
const { GraphQLSchema } = graphql;
const mutation = require('./mutation')
const RootQueryType = require('./types/root_query_type');
// console.log(mutation)
module.exports = new GraphQLSchema({
  query: RootQueryType,
   mutation,
});
