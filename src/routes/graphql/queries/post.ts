import { GraphQLFieldConfig, GraphQLNonNull } from "graphql";
import { PrismaContext } from "../context.js";
import { PostObjectType } from "../types/PostObjectType.js";
import { UUIDType } from "../types/uuid.js";
import { Post } from "@prisma/client";

interface PostArgs {
  id: Post['id'];
}

export const post: GraphQLFieldConfig<void, PrismaContext, PostArgs> = {
  type: PostObjectType,
  args: { id: { type: new GraphQLNonNull(UUIDType) } },
  resolve: (_, { id }, context) => context.prisma.post.findUnique({ where: { id } }),
};