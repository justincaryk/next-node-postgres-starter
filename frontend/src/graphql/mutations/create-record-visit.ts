import { gql } from 'graphql-request';

export default gql`
  mutation CreateVisitRecord(
    $recordId: UUID!
    $vetName: String!
    $notes: String
    $visitDate: Datetime!
  ) {
    createVisitRecord(
      input: {
        visitRecord: {
          recordId: $recordId
          notes: $notes
          vetName: $vetName
          visitDate: $visitDate
        }
      }
    ) {
      visitRecord {
        id
      }
    }
  }
`;
