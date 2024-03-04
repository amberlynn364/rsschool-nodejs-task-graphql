import { Profile } from "@prisma/client";
import { GraphQLFieldConfig, GraphQLNonNull } from 'graphql';
import { PrismaContext } from "../context.js";
import { ProfileObjectType } from "../types/ProfileObjectType.js";
import { UUIDType } from "../types/uuid.js";
import { ChangeProfileObjectInputType } from "./input-types/changeProfileInputObjectType.js";

interface ChangeProfileArgs {
  id: Profile['id'],
  dto: Partial<Omit<Profile, 'id' | 'userId'>>;
}

export const changeProfile: GraphQLFieldConfig<void, PrismaContext, ChangeProfileArgs> = {
  type: ProfileObjectType,
  args: {
    id: { type: new GraphQLNonNull(UUIDType) },
    dto: { type: new GraphQLNonNull(ChangeProfileObjectInputType) },
  },
  resolve: (_, { id, dto }, context) => context.prisma.profile.update({ where: { id }, data: dto }),
};