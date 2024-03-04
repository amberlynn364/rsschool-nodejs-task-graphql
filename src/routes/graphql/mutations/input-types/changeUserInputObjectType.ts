import { GraphQLInputObjectType, GraphQLInt, GraphQLString } from "graphql";

export const ChangeUserInputObjectType = new GraphQLInputObjectType({
  name: 'ChangeUserInput',
  fields: () => ({
    name: { type: GraphQLString },
    balance: { type: GraphQLInt },
  }),
});