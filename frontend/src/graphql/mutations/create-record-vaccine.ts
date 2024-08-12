import { gql } from 'graphql-request';

export default gql`
  mutation CreateVaccineRecord($recordId: UUID!, $name: String!, $administeredAt: Datetime!) {
    createVaccineRecord(
      input: {
        vaccineRecord: { recordId: $recordId, name: $name, administeredAt: $administeredAt }
      }
    ) {
      vaccineRecord {
        id
      }
    }
  }
`;
