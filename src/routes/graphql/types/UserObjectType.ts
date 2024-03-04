import { User } from "@prisma/client";
import { GraphQLFloat, GraphQLList, GraphQLObjectType, GraphQLString } from "graphql";
import { PrismaContext } from "../context.js";
import { UUIDType } from "./uuid.js";
import { ProfileObjectType } from "./ProfileObjectType.js";
import { PostObjectType } from "./PostObjectType.js";

export const UserObjectType = new GraphQLObjectType<User, PrismaContext>({
  name: 'User',
  fields: () => ({
    id: { type: UUIDType },
    name: { type: GraphQLString },
    balance: { type: GraphQLFloat },
    profile: {
      type: ProfileObjectType,
      resolve: (source, _, ctx) =>
        ctx.prisma.profile.findUnique({ where: { userId: source.id } }),
    },
    posts: {
      type: new GraphQLList(PostObjectType),
      resolve: (source, _, ctx) =>
        ctx.prisma.post.findMany({ where: { authorId: source.id } }),
    },
    userSubscribedTo: {
      type: new GraphQLList(UserObjectType),
      resolve: async (source, _, ctx) => {
        const authors = (
          await ctx.prisma.subscribersOnAuthors.findMany({
            where: { subscriberId: source.id },
            select: { author: true },
          })
        ).map(({ author }) => author);
        return authors;
      },
    },
    subscribedToUser: {
      type: new GraphQLList(UserObjectType),
      resolve: async (source, _, ctx) => {
        const subscribers = (
          await ctx.prisma.subscribersOnAuthors.findMany({
            where: { authorId: source.id },
            select: { subscriber: true },
          })
        ).map(({ subscriber }) => subscriber);
        return subscribers;
      },
    },

  })
});