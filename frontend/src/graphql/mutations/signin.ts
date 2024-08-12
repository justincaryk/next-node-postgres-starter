import { gql } from 'graphql-request';

export default gql`
  mutation Signin($email: String!, $password: String!) {
    signin(input: { inputPassword: $password, inputEmail: $email }) {
      jwtToken
    }
  }
`;
