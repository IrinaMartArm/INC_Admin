import { gql } from '@apollo/client'

export const LOGIN_ADMIN = gql`
  mutation authorizeSuperAdmin($authLoginInput: AuthLoginInput!) {
    authorizeSuperAdmin(authLoginInput: $authLoginInput)
  }
`
