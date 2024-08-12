import { gql } from 'graphql-request';

export default gql`
  query AdminPetsFull {
    allPets(orderBy: NAME_ASC) {
      totalCount
      nodes {
        id
        name
        dob
        userId
        animalId
        animalByAnimalId {
          id
          name
          nodeId
        }
        createdAt
        nodeId
        userByUserId {
          id
          email
          firstName
          lastName
        }
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
          }
        }
      }
    }
  }
`;
