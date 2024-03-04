import { GraphQLFloat, GraphQLInputObjectType, GraphQLNonNull, GraphQLString } from "graphql";

export const CreateUserInputObjectType = new GraphQLInputObjectType({
  name: 'CreateUserInput',
  fields: () => ({
    name: { type: new GraphQLNonNull(GraphQLString) },
    balance: { type: new GraphQLNonNull(GraphQLFloat) },
  })
})