import { gql } from 'graphql-request';

export default gql`
  query AllRecordTypes {
    allRecordTypes {
      nodes {
        id
        name
        nodeId
      }
    }
  }
`;
