import { gql } from 'graphql-request';

export default gql`
  query AllAnimals {
    allAnimals(orderBy: NAME_ASC) {
      totalCount
      nodes {
        id
        name
        nodeId
      }
    }
  }
`;
