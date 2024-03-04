import { GraphQLObjectType, GraphQLString } from "graphql";
import { UUIDType } from "./uuid.js";

export const PostObjectType = new GraphQLObjectType({
  name: 'Post',
  fields: () => ({
    id: { type: UUIDType },
    title: { type: GraphQLString },
    content: { type: GraphQLString },
    authorId: { type: UUIDType },
  }),
})