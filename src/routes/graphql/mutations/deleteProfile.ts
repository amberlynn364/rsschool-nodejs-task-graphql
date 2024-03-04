import { Profile } from "@prisma/client";
import { GraphQLFieldConfig, GraphQLNonNull } from "graphql";
import { PrismaContext } from "../context.js";
import { UUIDType } from "../types/uuid.js";

interface DeleteProfileArgs {
  id: Profile['id'];
}

export const deleteProfile: GraphQLFieldConfig<void, PrismaContext, DeleteProfileArgs> = {
  type: new GraphQLNonNull(UUIDType),
  args: { id: { type: new GraphQLNonNull(UUIDType) } },
  resolve: async (_, { id }, context) => {
    const profile = await context.prisma.profile.delete({ where: { id } });
    return profile.id;
  },
};