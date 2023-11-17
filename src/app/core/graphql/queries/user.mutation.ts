import { gql } from 'apollo-angular';

export const GET_USERS = gql`
  query Users {
    users {
      _id
      email
      notification
      password
      resident {
        _id
        name {
          first
          middle
          last
          extension
        }
      }
      role
      username
      verified
    }
  }
`;
