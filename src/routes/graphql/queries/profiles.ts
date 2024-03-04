import { GraphQLFieldConfig, GraphQLList, GraphQLNonNull } from "graphql";
import { PrismaContext } from "../context.js";
import { ProfileObjectType } from "../types/ProfileObjectType.js";

export const profiles: GraphQLFieldConfig<void, PrismaContext, void> = {
  type: new GraphQLNonNull(new GraphQLList(ProfileObjectType)),
  resolve: (_, _args, context) => context.prisma.profile.findMany(),
};