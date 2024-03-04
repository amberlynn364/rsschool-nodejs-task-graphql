import { Profile } from "@prisma/client";
import { GraphQLBoolean, GraphQLInt, GraphQLNonNull, GraphQLObjectType } from "graphql";
import { PrismaContext } from "../context.js";
import { UUIDType } from "./uuid.js";
import { MemberIDScalarType } from "./MemberIDScalarType.js";
import { MemberObjectType } from "./MemberObjectType.js";

export const ProfileObjectType = new GraphQLObjectType<Profile, PrismaContext>({
  name: 'Profile',
  fields: () => ({
    id: { type: UUIDType },
    isMale: { type: GraphQLBoolean },
    yearOfBirth: { type: GraphQLInt },
    userId: { type: UUIDType },
    memberTypeId: { type: MemberIDScalarType },
    memberType: {
      type: new GraphQLNonNull(MemberObjectType),
      resolve: (source, _, ctx) =>
        ctx.prisma.memberType.findUnique({ where: { id: source.memberTypeId } }),
    },
  }),
});