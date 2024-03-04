import { GraphQLObjectType } from "graphql";
import { changePost } from "../mutations/changePost.js";
import { changeProfile } from "../mutations/changeProfile.js";
import { changeUser } from "../mutations/changeUser.js";
import { createPost } from "../mutations/createPost.js";
import { createProfile } from "../mutations/createProfile.js";
import { createUser } from "../mutations/createUser.js";
import { deletePost } from "../mutations/deletePost.js";
import { deleteProfile } from "../mutations/deleteProfile.js";
import { deleteUser } from "../mutations/deleteUser.js";
import { subscribeTo } from "../mutations/subscribeTo.js";
import { unsubscribeFrom } from "../mutations/unsubscribeFrom.js";

export const MutationsObjectType = new GraphQLObjectType({
  name: 'Mutation',
  fields: () => ({
    changePost,
    changeProfile,
    changeUser,
    createPost,
    createProfile,
    createUser,
    deletePost,
    deleteProfile,
    deleteUser,
    subscribeTo,
    unsubscribeFrom,
  }),
});