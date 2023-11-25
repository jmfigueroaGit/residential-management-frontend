import { gql } from 'apollo-angular';

export const AUTH_CURRENT_USER = gql`
  query Auth_getMe {
    auth_getMe {
      _id
      email
      notification
      password
      resident {
        _id
      }
      role
      username
      verified
    }
  }
`;
