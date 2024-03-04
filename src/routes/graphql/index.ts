import { FastifyPluginAsyncTypebox } from '@fastify/type-provider-typebox';
import { createGqlResponseSchema, gqlResponseSchema, gqlSchema } from './schemas.js';
import { graphql, parse, validate } from 'graphql';
import { createPrismaContext } from './context.js';
import depthLimit from 'graphql-depth-limit';

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
      const errorData = validate(gqlSchema, parse(query), [depthLimit(5)]);
      if (errorData.length) return { errors: errorData };

      return graphql({
        schema: gqlSchema,
        source: query,
        variableValues: variables,
        contextValue: createPrismaContext(prisma)
      });
    },
  });
};

export default plugin;
