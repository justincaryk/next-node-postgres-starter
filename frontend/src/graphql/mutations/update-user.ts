import { gql } from 'graphql-request';

export default gql`
  mutation UpdateUser($id: UUID!, $patch: UserPatch!) {
    updateUserById(input: { userPatch: $patch, id: $id }) {
      user {
        id
        email
        firstName
        lastName
        nodeId
      }
    }
  }
`;
