import { GraphQLFieldConfig, GraphQLList, GraphQLNonNull } from "graphql";
import { PrismaContext } from "../context.js";
import { MemberObjectType } from "../types/MemberObjectType.js";

export const memberTypes: GraphQLFieldConfig<void, PrismaContext, void> = {
  type: new GraphQLNonNull(new GraphQLList(MemberObjectType)),
  resolve: (_, _args, context) => context.prisma.memberType.findMany(),
};