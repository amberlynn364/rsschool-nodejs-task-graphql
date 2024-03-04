import { GraphQLFieldConfig, GraphQLNonNull } from "graphql";
import { PrismaContext } from "../context.js";
import { ProfileObjectType } from "../types/ProfileObjectType.js";
import { UUIDType } from "../types/uuid.js";
import { Profile } from "@prisma/client";

interface ProfileArgs {
  id: Profile['id'];
}

export const profile: GraphQLFieldConfig<void, PrismaContext, ProfileArgs> = {
  type: ProfileObjectType,
  args: { id: { type: new GraphQLNonNull(UUIDType) } },
  resolve: (_, { id }, context) => context.prisma.profile.findUnique({ where: { id } }),
};