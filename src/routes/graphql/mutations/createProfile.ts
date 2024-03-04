import { Profile } from "@prisma/client";
import { GraphQLFieldConfig, GraphQLNonNull } from "graphql";
import { PrismaContext } from "../context.js";
import { ProfileObjectType } from "../types/ProfileObjectType.js";
import { CreateProfileInputObjectType } from "./input-types/createProfileInputObjectType.js";


interface CreateProfileArgs {
  dto: Omit<Profile, 'id'>
}

export const createProfile: GraphQLFieldConfig<void, PrismaContext, CreateProfileArgs> = {
  type: ProfileObjectType,
  args: { dto: { type: new GraphQLNonNull(CreateProfileInputObjectType) } },
  resolve: (_, { dto }, context) => context.prisma.profile.create({ data: dto }),
};