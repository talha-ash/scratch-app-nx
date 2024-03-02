import request from 'graphql-request';

import { graphql } from 'gql.tada';
import { HOST } from '../constants/urls';

import { useQuery } from '@tanstack/react-query';

const UserInfoQuery = graphql(`
  query getUserInfo {
    getUserInfo {
      id
      email
      username
      age
    }
  }
`);

export const useGetUserInfoQueryHook = () => {
  const result = useQuery({
    queryKey: ['getUserInfo'],
    queryFn: async () => request(HOST, UserInfoQuery),
  });
  return result;
};
