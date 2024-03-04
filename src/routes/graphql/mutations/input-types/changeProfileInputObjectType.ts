import { GraphQLBoolean, GraphQLInputObjectType, GraphQLInt } from "graphql";
import { MemberIDScalarType } from "../../types/MemberIDScalarType.js";

export const ChangeProfileObjectInputType = new GraphQLInputObjectType({
  name: 'ChangeProfileInput',
  fields: () => ({
    isMale: { type: GraphQLBoolean },
    yearOfBirth: { type: GraphQLInt },
    memberTypeId: { type: MemberIDScalarType },
  }),
});