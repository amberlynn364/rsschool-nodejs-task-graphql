import { GraphQLBoolean, GraphQLInputObjectType, GraphQLInt, GraphQLNonNull, } from "graphql";
import { UUIDType } from "../../types/uuid.js";
import { MemberIDScalarType } from "../../types/MemberIDScalarType.js";

export const CreateProfileInputObjectType = new GraphQLInputObjectType({
  name: 'CreateProfileInput',
  fields: () => ({
    isMale: { type: new GraphQLNonNull(GraphQLBoolean) },
    yearOfBirth: { type: new GraphQLNonNull(GraphQLInt) },
    userId: { type: new GraphQLNonNull(UUIDType) },
    memberTypeId: { type: new GraphQLNonNull(MemberIDScalarType) },
  })
})