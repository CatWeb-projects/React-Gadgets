const graphql = require('graphql');
const catalog = require('./catalog');

const {
  GraphQLObjectType,
  GraphQLString,
  GraphQLInt,
  GraphQLID,
  GraphQLSchema
} = graphql;

const GadgetType = new GraphQLObjectType({
  name: 'Gadget',
  fields: () => ({
    id: { type: GraphQLID },
    name: { type: GraphQLString },
    price: { type: GraphQLInt }
  })
});

const Query = new GraphQLObjectType({
  name: 'Query',
  fields: {
    gadget: {
      type: GadgetType,
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
