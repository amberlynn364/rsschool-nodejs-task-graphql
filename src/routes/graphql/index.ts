import { FastifyPluginAsyncTypebox } from '@fastify/type-provider-typebox';
import { createGqlResponseSchema, gqlResponseSchema, gqlSchema } from './schemas.js';
import { graphql } from 'graphql';
import { createPrismaContext } from './context.js';

const plugin: FastifyPluginAsyncTypebox = async (fastify) => {
  fastify.route({
    url: '/',
    method: 'POST',
    schema: {
      ...createGqlResponseSchema,
      response: {
        200: gqlResponseSchema,
      },
    },
    async handler(req) {
      const { prisma } = fastify;
      const { query, variables } = req.body;
      const response = await graphql({
        schema: gqlSchema,
        source: query,
        variableValues: variables,
        contextValue: createPrismaContext(prisma)
      });
      return response;
    },
  });
};

export default plugin;
