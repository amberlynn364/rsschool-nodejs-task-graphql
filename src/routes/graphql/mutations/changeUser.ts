import { User } from "@prisma/client";
import { GraphQLFieldConfig, GraphQLNonNull, GraphQLObjectType } from "graphql";
import { PrismaContext } from "../context.js";
import { UserObjectType } from "../types/UserObjectType.js";
import { UUIDType } from "../types/uuid.js";
import { ChangeUserInputObjectType } from "./input-types/changeUserInputObjectType.js";

interface ChangeUserArgs {
  id: User['id'],
  dto: Partial<Omit<User, 'id'>>
}

export const changeUser: GraphQLFieldConfig<void, PrismaContext, ChangeUserArgs> = {
  type: UserObjectType as GraphQLObjectType,
  args: {
    id: { type: new GraphQLNonNull(UUIDType) },
    dto: { type: new GraphQLNonNull(ChangeUserInputObjectType) },
  },
  resolve: (_, { id, dto }, context) => context.prisma.user.update({ where: { id }, data: dto }),
};