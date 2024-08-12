import { gql } from 'graphql-request';

// Define the mutation for creating an allergy_record
export default gql`
  mutation CreateAllergyRecord(
    $recordId: UUID!
    $name: String!
    $reactions: String
    $severity: AllergySeverity!
  ) {
    createAllergyRecord(
      input: {
        allergyRecord: {
          recordId: $recordId
          name: $name
          reactions: $reactions
          severity: $severity
        }
      }
    ) {
      allergyRecord {
        id
      }
    }
  }
`;
