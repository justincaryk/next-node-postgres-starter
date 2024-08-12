import { gql } from 'graphql-request';

export default gql`
  mutation Signup($email: String!, $password: String!) {
    signup(input: { inputEmail: $email, inputPassword: $password }) {
      signupResult {
        status
        jwtToken
      }
    }
  }
`;
