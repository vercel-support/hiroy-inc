import { gql } from '@apollo/client';

export const GET_BLOG_POSTS = gql`
  query {
    blog {
      databaseId
      title
      slug
      link
      content
      date
      excerpt
    }
  }
`;
