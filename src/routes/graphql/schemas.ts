import { Type } from '@fastify/type-provider-typebox';
import { GraphQLSchema } from 'graphql';
import { QueryObjectType } from './types/QueryObjectType.js';
import { MutationsObjectType } from './types/MutationsObjectType.js';

export const gqlResponseSchema = Type.Partial(
  Type.Object({
    data: Type.Any(),
    errors: Type.Any(),
  }),
);

export const createGqlResponseSchema = {
  body: Type.Object(
    {
      query: Type.String(),
      variables: Type.Optional(Type.Record(Type.String(), Type.Any())),
    },
    {
      additionalProperties: false,
    },
  ),
};

export const gqlSchema = new GraphQLSchema({ query: QueryObjectType, mutation: MutationsObjectType });