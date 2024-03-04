import { User } from "@prisma/client";
import { GraphQLFieldConfig, GraphQLNonNull, GraphQLObjectType } from "graphql";
import { PrismaContext } from "../context.js";
import { UserObjectType } from "../types/UserObjectType.js";
import { CreateUserInputObjectType } from "./input-types/createUserInputObjectType.js";

interface CreateUserArgs {
  dto: Omit<User, 'id'>
}

export const createUser: GraphQLFieldConfig<void, PrismaContext, CreateUserArgs> = {
  type: UserObjectType as GraphQLObjectType,
  args: { dto: { type: new GraphQLNonNull(CreateUserInputObjectType) } },
  resolve: (_, { dto }, context) => context.prisma.user.create({ data: dto }),
};