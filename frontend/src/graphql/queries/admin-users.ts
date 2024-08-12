import { gql } from 'graphql-request';

export default gql`
  query AdminAllUsers {
    allUsers {
      totalCount
      nodes {
        id
        email
        firstName
        lastName
        role
      }
    }
  }
`;
