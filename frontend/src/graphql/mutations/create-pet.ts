import { gql } from 'graphql-request';

export default gql`
  mutation AddPet($animalId: UUID!, $userId: UUID!, $name: String!, $dob: Datetime!) {
    createPet(input: { pet: { animalId: $animalId, userId: $userId, name: $name, dob: $dob } }) {
      pet {
        id
        name
        dob
        userId
        nodeId
      }
    }
  }
`;
