import { User } from "@prisma/client";
import { GraphQLFieldConfig, GraphQLNonNull, GraphQLObjectType } from "graphql";
import { PrismaContext } from "../context.js";
import { UserObjectType } from "../types/UserObjectType.js";
import { UUIDType } from "../types/uuid.js";

interface SubscribeToArgs {
  userId: User['id'];
  authorId: User['id'];
}

export const subscribeTo: GraphQLFieldConfig<void, PrismaContext, SubscribeToArgs> = {
  type: UserObjectType as GraphQLObjectType,
  args: {
    userId: { type: new GraphQLNonNull(UUIDType) },
    authorId: { type: new GraphQLNonNull(UUIDType) },
  },
  resolve: async (_, { userId, authorId }, context) => {
    const result = await context.prisma.subscribersOnAuthors.create({
      data: { subscriberId: userId, authorId },
      include: { author: true },
    });
    return result.author;
  },
};