import { gql } from 'graphql-request';

export default gql`
  query RecordsByAnimalId($petId: UUID!) {
    petById(id: $petId) {
      recordsByPetId {
        nodes {
          id
          userId
          petId
          recordType
          createdAt
          allergyRecordsByRecordId {
            nodes {
              id
              name
              reactions
              severity
            }
          }
          vaccineRecordsByRecordId {
            nodes {
              id
              name
              administeredAt
            }
          }
          visitRecordsByRecordId {
            nodes {
              id
              visitDate
              vetName
              notes
            }
          }
        }
      }
    }
  }
`;
