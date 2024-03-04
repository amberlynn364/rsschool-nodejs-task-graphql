import { GraphQLFieldConfig, GraphQLList, GraphQLNonNull } from "graphql";
import { PrismaContext } from "../context.js";
import { PostObjectType } from "../types/PostObjectType.js";

export const posts: GraphQLFieldConfig<void, PrismaContext, void> = {
  type: new GraphQLNonNull(new GraphQLList(PostObjectType)),
  resolve: (_, _agrs, context) => context.prisma.post.findMany(),
};