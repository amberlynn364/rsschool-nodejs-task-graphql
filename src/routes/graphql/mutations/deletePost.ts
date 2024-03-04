import { Post } from "@prisma/client";
import { GraphQLFieldConfig, GraphQLNonNull } from "graphql";
import { PrismaContext } from "../context.js";
import { UUIDType } from "../types/uuid.js";

interface DeletePostArgs {
  id: Post['id'];
}

export const deletePost: GraphQLFieldConfig<void, PrismaContext, DeletePostArgs> = {
  type: new GraphQLNonNull(UUIDType),
  args: { id: { type: new GraphQLNonNull(UUIDType) } },
  resolve: async (_, { id }, context) => {
    const post = await context.prisma.post.delete({ where: { id } });
    return post.id;
  },
};