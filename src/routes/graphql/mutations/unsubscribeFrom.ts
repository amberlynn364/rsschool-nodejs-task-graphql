import { GraphQLFieldConfig, GraphQLInt, GraphQLNonNull } from "graphql";
import { PrismaContext } from "../context.js";
import { User } from "@prisma/client";
import { UUIDType } from "../types/uuid.js";

interface UnsubscribeArgs {
  userId: User['id'];
  authorId: User['id'];
}

export const unsubscribeFrom: GraphQLFieldConfig<void, PrismaContext, UnsubscribeArgs> = {
  type: GraphQLInt,
  args: {
    userId: { type: new GraphQLNonNull(UUIDType) },
    authorId: { type: new GraphQLNonNull(UUIDType) },
  },
  resolve: async (_source, { userId, authorId }, ctx) => {
    const result = await ctx.prisma.subscribersOnAuthors.deleteMany({
      where: { subscriberId: userId, authorId },
    });
    return result.count;
  },
};