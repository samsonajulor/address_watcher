import {gql} from "@apollo/client";

export const USER_DATA = gql(`
  query UserData($nodeId: ID!) {
    # viewer {
    #   id
    # }
    node(id: $nodeId) {
      ... on CeramicAccount {
        id
        userData {
          address
          email
        }
      }
    }
  }
`);

export const ADD_EMAIL = gql(`
  mutation AddUserData($input: CreateUserDataInput!) {
    createUserData(input: $input) {
      document {
        id
        email
        address
      }
    }
  }
`);