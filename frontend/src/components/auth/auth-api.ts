import { useMutation } from '@tanstack/react-query';
import {
  SigninInput,
  SigninMutation,
  SignupInput,
  SignupMutation,
  UpdateUserMutation,
  UpdateUserMutationVariables,
} from '../../graphql/generated/graphql';
import SigninRequest from '../../graphql/mutations/signin';
import SignupRequest from '../../graphql/mutations/signup';
import UpdateUserRequest from '../../graphql/mutations/update-user';
import useGraphQL from '../graphql/useGraphQL';

export function useAuthApi() {
  const { graphQLClient } = useGraphQL();

  return {
    signIn: useMutation({
      mutationFn: (data: SigninInput) => graphQLClient.request<SigninMutation>(SigninRequest, data),
    }),
    signUp: useMutation({
      mutationFn: (data: SignupInput) => graphQLClient.request<SignupMutation>(SignupRequest, data),
    }),
    updateUser: useMutation({
      mutationFn: (data: UpdateUserMutationVariables) =>
        graphQLClient.request<UpdateUserMutation>(UpdateUserRequest, data),
    }),
  };
}
