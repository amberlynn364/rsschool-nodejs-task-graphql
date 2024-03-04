import { GraphQLScalarType, Kind } from "graphql";

const isValidMemberTypeId = (value: unknown): value is string =>
  typeof value === 'string' && ['basic', 'business'].includes(value);


export const MemberIDScalarType = new GraphQLScalarType({
  name: 'MemberTypeId',
  serialize(value) {
    if (!isValidMemberTypeId(value)) throw new TypeError('Invalid member type id');
    return value;
  },
  parseValue(value) {
    if (!isValidMemberTypeId(value)) throw new TypeError('Invalid member type id');
    return value;
  },
  parseLiteral(ast) {
    if (ast.kind === Kind.STRING) {
      if (isValidMemberTypeId(ast.value)) return ast.value;
    }
    return undefined;
  }
});