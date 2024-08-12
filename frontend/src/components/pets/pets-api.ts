import {
  AddPetMutation,
  AddPetMutationVariables,
  AdminPetsFullQuery,
  AllAdminPetsQuery,
  AllAnimalsQuery,
  AllPetsQuery,
} from '@/graphql/generated/graphql';
import CreatePetRequest from '@/graphql/mutations/create-pet';
import GetAdminPetsRequest from '@/graphql/queries/admin-pets';
import GetAdminPetsFullRequest from '@/graphql/queries/admin-pets-full';
import GetAnimalRequest from '@/graphql/queries/all-animals';
import GetAllPetsRequest from '@/graphql/queries/all-pets';
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import useGraphQL from '../graphql/useGraphQL';
import { staticQueryConfig } from '../react-query/defaults';

export enum PET_QUERY_KEYS {
  PETS = 'pets',
  ANIMALS = 'animals',
  ADMIN_PETS_FULL = 'admin-pets-full',
}

export function usePetsApi(userRole?: string, userId?: string) {
  const { graphQLClient } = useGraphQL();
  const queryClient = useQueryClient();

  return {
    getAnimals: useQuery({
      queryKey: [PET_QUERY_KEYS.ANIMALS],
      queryFn: async () => graphQLClient.request<AllAnimalsQuery>(GetAnimalRequest),
      ...staticQueryConfig,
    }),
    getPets: useQuery({
      queryKey: [PET_QUERY_KEYS.PETS, userRole, userId],
      queryFn: async () => {
        if (!userRole) {
          return null;
        }
        // ensure by default, admins only receive their pets
        if (userRole === 'role_admin') {
          return graphQLClient.request<AllAdminPetsQuery>(GetAdminPetsRequest, { userId: userId });
        }

        return graphQLClient.request<AllPetsQuery>(GetAllPetsRequest);
      },
      ...staticQueryConfig,
    }),
    addPet: useMutation({
      mutationFn: (data: AddPetMutationVariables) =>
        graphQLClient.request<AddPetMutation>(CreatePetRequest, data),
      onSuccess: () => {
        queryClient.invalidateQueries({
          queryKey: [PET_QUERY_KEYS.PETS],
        });
        queryClient.refetchQueries({
          queryKey: [PET_QUERY_KEYS.PETS],
        });
      },
    }),
    adminGetPetsFull: useQuery({
      queryKey: [PET_QUERY_KEYS.ADMIN_PETS_FULL],
      queryFn: async () => graphQLClient.request<AdminPetsFullQuery>(GetAdminPetsFullRequest),
      ...staticQueryConfig,
    }),
  };
}
