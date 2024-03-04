import { GraphQLObjectType } from "graphql";
import { memberType } from "../queries/memberType.js";
import { memberTypes } from "../queries/memberTypes.js";
import { post } from "../queries/post.js";
import { posts } from "../queries/posts.js";
import { user } from "../queries/user.js";
import { users } from "../queries/users.js";
import { profile } from "../queries/profile.js";
import { profiles } from "../queries/profiles.js";

export const QueryObjectType = new GraphQLObjectType({
  name: 'Query',
  fields: () => ({
    memberType,
    memberTypes,
    post,
    posts,
    user,
    users,
    profile,
    profiles,
  })
})