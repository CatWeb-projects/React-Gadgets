const graphql = require('graphql');
const catalog = require('./catalog');

const {
  GraphQLObjectType,
  GraphQLString,
  GraphQLInt,
  GraphQLID,
  GraphQLSchema,
  GraphQLNonNull
} = graphql;

const GadgetsType = new GraphQLObjectType({
  name: 'Gadgets',
  fields: () => ({
    id: { type: GraphQLID },
    name: { type: GraphQLNonNull(GraphQLString) },
    price: { type: GraphQLNonNull(GraphQLInt) }
  })
});

const Query = new GraphQLObjectType({
  name: 'Query',
  fields: {
    gadgets: {
      type: GadgetsType,
      args: { id: { type: GraphQLID } },
      resolve(parent, args) {
        return catalog.gadgets.find((gadget) => gadget.id === args.id);
      }
    }
  }
});

module.exports = new GraphQLSchema({
  query: Query
});
