import {
  AllRecordTypesQuery,
  CreateAllergyRecordMutation,
  CreateAllergyRecordMutationVariables,
  CreateRecordMutation,
  CreateRecordMutationVariables,
  CreateVaccineRecordMutation,
  CreateVaccineRecordMutationVariables,
  CreateVisitRecordMutation,
  CreateVisitRecordMutationVariables,
  RecordsByAnimalIdQuery,
} from '@/graphql/generated/graphql';
import CreatePetRecordRequest from '@/graphql/mutations/create-record';
import CreatePetAllergyRecordRequest from '@/graphql/mutations/create-record-allergy';
import CreatePetVaccineRecordRequest from '@/graphql/mutations/create-record-vaccine';
import CreateVisitRecordRequest from '@/graphql/mutations/create-record-visit';
import GetRecordTypesRequest from '@/graphql/queries/all-record-types';
import GetAllPetRecordsRequest from '@/graphql/queries/pet-records';
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import useGraphQL from '../graphql/useGraphQL';
import { staticQueryConfig } from '../react-query/defaults';

export enum RECORDS_QUERY_KEYS {
  PET_RECORDS = 'pet_records',
  RECORD_TYPES = 'record_types',
}

export function useRecordsApi(activePetId?: string) {
  const { graphQLClient } = useGraphQL();
  const queryClient = useQueryClient();

  return {
    getRecordsByPetId: useQuery({
      queryKey: [RECORDS_QUERY_KEYS.PET_RECORDS, activePetId],
      queryFn: async () => {
        if (activePetId) {
          return graphQLClient.request<RecordsByAnimalIdQuery>(GetAllPetRecordsRequest, {
            petId: activePetId,
          });
        }

        return null;
      },
      ...staticQueryConfig,
    }),
    getRecordTypes: useQuery({
      queryKey: [RECORDS_QUERY_KEYS.RECORD_TYPES],
      queryFn: async () => graphQLClient.request<AllRecordTypesQuery>(GetRecordTypesRequest),
      ...staticQueryConfig,
    }),
    addRecordForPet: useMutation({
      mutationFn: (data: CreateRecordMutationVariables) =>
        graphQLClient.request<CreateRecordMutation>(CreatePetRecordRequest, data),
    }),
    addVaccineRecordForPet: useMutation({
      mutationFn: (data: CreateVaccineRecordMutationVariables) =>
        graphQLClient.request<CreateVaccineRecordMutation>(CreatePetVaccineRecordRequest, data),
      onSuccess: () => {
        queryClient.invalidateQueries({
          queryKey: [RECORDS_QUERY_KEYS.PET_RECORDS],
        });
        queryClient.refetchQueries({
          queryKey: [RECORDS_QUERY_KEYS.PET_RECORDS],
        });
      },
    }),
    addVisitRecordForPet: useMutation({
      mutationFn: (data: CreateVisitRecordMutationVariables) =>
        graphQLClient.request<CreateVisitRecordMutation>(CreateVisitRecordRequest, data),
      onSuccess: () => {
        queryClient.invalidateQueries({
          queryKey: [RECORDS_QUERY_KEYS.PET_RECORDS],
        });
        queryClient.refetchQueries({
          queryKey: [RECORDS_QUERY_KEYS.PET_RECORDS],
        });
      },
    }),
    addAllergyRecordForPet: useMutation({
      mutationFn: (data: CreateAllergyRecordMutationVariables) =>
        graphQLClient.request<CreateAllergyRecordMutation>(CreatePetAllergyRecordRequest, data),
      onSuccess: () => {
        queryClient.invalidateQueries({
          queryKey: [RECORDS_QUERY_KEYS.PET_RECORDS],
        });
        queryClient.refetchQueries({
          queryKey: [RECORDS_QUERY_KEYS.PET_RECORDS],
        });
      },
    }),
  };
}
