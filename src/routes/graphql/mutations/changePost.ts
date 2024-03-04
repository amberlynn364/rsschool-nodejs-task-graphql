import { Post } from "@prisma/client";
import { GraphQLFieldConfig, GraphQLNonNull } from "graphql";
import { PrismaContext } from "../context.js";
import { PostObjectType } from "../types/PostObjectType.js";
import { UUIDType } from "../types/uuid.js";
import { ChangePostInputObjectType } from "./input-types/changePostInputObjectType.js";


interface ChangePostArgs {
  id: Post['id'],
  dto: Partial<Omit<Post, 'id'>>
}

export const changePost: GraphQLFieldConfig<void, PrismaContext, ChangePostArgs> = {
  type: PostObjectType,
  args: {
    id: { type: new GraphQLNonNull(UUIDType) },
    dto: { type: new GraphQLNonNull(ChangePostInputObjectType) },
  },
  resolve: (_, { id, dto }, context) => context.prisma.post.update({ where: { id }, data: dto }),
};