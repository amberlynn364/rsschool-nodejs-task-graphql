import { User } from "@prisma/client";
import { GraphQLFieldConfig, GraphQLNonNull } from "graphql";
import { PrismaContext } from "../context.js";
import { UUIDType } from "../types/uuid.js";

interface DeleteUserArgs {
  id: User['id'];
}

export const deleteUser: GraphQLFieldConfig<void, PrismaContext, DeleteUserArgs> = {
  type: new GraphQLNonNull(UUIDType),
  args: { id: { type: new GraphQLNonNull(UUIDType) } },
  resolve: async (_, { id }, context) => {
    const user = await context.prisma.user.delete({ where: { id } });
    return user.id;
  },
};