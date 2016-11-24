/**
 * Created by igor on 23.11.16.
 */

const typeDefinitions = `
type Post {
  _id: String
  title: String
  content: String
  mongoAuthor: Author
  sqlAuthor: SQLAuthor
  fortune: String
}
type Author {
  _id: String
  firstName: String
  lastName: String
  mongoPosts: [Post]
  sqlPosts: [SQLPosts]
  fortune: String
}
`;

export default [typeDefinitions];