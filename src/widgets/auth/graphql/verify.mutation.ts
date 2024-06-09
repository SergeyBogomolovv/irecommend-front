import { gql } from '@apollo/client';

export const VERIFY_ACCOUNT = gql`
  mutation Verify_account($input: VerifyAccountInput!) {
    verify_account(verifyAccountInput: $input) {
      access_token
    }
  }
`;
