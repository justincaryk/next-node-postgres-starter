import { gql } from 'graphql-request';

export default gql`
  mutation CreateRecord($petId: UUID!, $userId: UUID!, $recordTypeId: UUID!) {
    createRecord(input: { record: { petId: $petId, userId: $userId, recordType: $recordTypeId } }) {
      record {
        id
        recordType
      }
    }
  }
`;
