import { GraphQLFieldConfig, GraphQLNonNull } from "graphql";
import { PrismaContext } from "../context.js";
import { MemberObjectType } from "../types/MemberObjectType.js";
import { MemberIDScalarType } from "../types/MemberIDScalarType.js";
import { MemberType } from "@prisma/client";

interface MemberTypeArgs {
  id: MemberType['id'];
}

export const memberType: GraphQLFieldConfig<void, PrismaContext, MemberTypeArgs> = {
  type: MemberObjectType,
  args: { id: { type: new GraphQLNonNull(MemberIDScalarType) } },
  resolve: (_, { id }, context) => context.prisma.memberType.findUnique({ where: { id } })
}