import { GraphQLFieldConfig, GraphQLList, GraphQLNonNull } from "graphql";
import { PrismaContext } from "../context.js";
import { UserObjectType } from "../types/UserObjectType.js";

export const users: GraphQLFieldConfig<void, PrismaContext, void> = {
  type: new GraphQLNonNull(new GraphQLList(UserObjectType)),
  resolve: (_, _args, context) => context.prisma.user.findMany(),
};