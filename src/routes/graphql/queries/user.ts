import { GraphQLFieldConfig, GraphQLNonNull, GraphQLObjectType } from "graphql";
import { PrismaContext } from "../context.js";
import { UserObjectType } from "../types/UserObjectType.js";
import { UUIDType } from "../types/uuid.js";
import { User } from "@prisma/client";

interface UserArgs {
  id: User['id'];
}

export const user: GraphQLFieldConfig<void, PrismaContext, UserArgs> = {
  type: UserObjectType as GraphQLObjectType,
  args: { id: { type: new GraphQLNonNull(UUIDType) } },
  resolve: (_, { id }, context) => context.prisma.user.findUnique({ where: { id } }),
};