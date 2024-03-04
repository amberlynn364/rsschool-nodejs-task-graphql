import { Post } from "@prisma/client";
import { GraphQLFieldConfig, GraphQLNonNull } from "graphql";
import { PrismaContext } from "../context.js";
import { PostObjectType } from "../types/PostObjectType.js";
import { CreatePostInputObjectType } from "./input-types/createPostInputObjectType.js";


interface CreatePostArgs {
  dto: Omit<Post, 'id'>
}

export const createPost: GraphQLFieldConfig<void, PrismaContext, CreatePostArgs> = {
  type: PostObjectType,
  args: { dto: { type: new GraphQLNonNull(CreatePostInputObjectType) } },
  resolve: (_, { dto }, context) => context.prisma.post.create({ data: dto }),
};