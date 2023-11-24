import { gql } from 'apollo-angular';

export const AUTH_VERIFY_EMAIL = gql`
  mutation Auth_verify($email: String!) {
    auth_verify(email: $email) {
      message
    }
  }
`;

export const AUTH_VERIFY_TOKEN = gql`
  mutation Auth_verify_token($token: String!) {
    auth_verify_token(token: $token) {
      message
    }
  }
`;

export const AUTH_RESET_PASSWORD = gql`
  mutation Auth_reset_password(
    $password: String!
    $confirmPassword: String!
    $token: String!
  ) {
    auth_reset_password(
      password: $password
      confirmPassword: $confirmPassword
      token: $token
    ) {
      message
    }
  }
`;

export const AUTH_LOGIN_USER = gql`
  mutation Auth_login($username: String!, $password: String!) {
    auth_login(username: $username, password: $password) {
      token
      user {
        _id
        email
        notification
        password
        resident {
          _id
        }
        username
        verified
        role
      }
    }
  }
`;
