import { GraphQLFloat, GraphQLInt, GraphQLObjectType } from "graphql";
import { MemberIDScalarType } from "./MemberIDScalarType.js";

export const MemberObjectType = new GraphQLObjectType({
  name: 'MemberType',
  fields: () => ({
    id: { type: MemberIDScalarType },
    discount: { type: GraphQLFloat },
    postsLimitPerMonth: { type: GraphQLInt },
  }),
})