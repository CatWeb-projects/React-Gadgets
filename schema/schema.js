const graphql = require('graphql');
const { moveEmitHelpers } = require('typescript');
const catalog = require('../server/catalog');

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

const Querry = new GraphQLObjectType({
  name: 'Querry',
  fields: {
    gadget: {
      type: GadgetType,
      args: { id: { type: GraphQLID } },
      resolve(parent, args) {
        return catalog.find((gadget) => gadget.id === args.id);
      }
    }
  }
});

module.exports = new GraphQLSchema({
  query: Querry
});
