/* eslint-disable */
import * as types from './graphql';
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';

/**
 * Map of all GraphQL operations in the project.
 *
 * This map has several performance disadvantages:
 * 1. It is not tree-shakeable, so it will include all operations in the project.
 * 2. It is not minifiable, so the string of a GraphQL query will be multiple times inside the bundle.
 * 3. It does not support dead code elimination, so it will add unused operations.
 *
 * Therefore it is highly recommended to use the babel or swc plugin for production.
 */
const documents = {
    "mutation Login($input: LoginInput!) {\n  login(loginInput: $input) {\n    access_token\n  }\n}": types.LoginDocument,
    "mutation Logout {\n  logout {\n    message\n  }\n}": types.LogoutDocument,
    "mutation Password_reset_request($email: String!) {\n  password_reset_request(email: $email) {\n    message\n    email\n  }\n}": types.Password_Reset_RequestDocument,
    "mutation Password_reset($passwordResetInput: PasswordResetInput!) {\n  password_reset(passwordResetInput: $passwordResetInput) {\n    message\n  }\n}": types.Password_ResetDocument,
    "query Refresh {\n  refresh {\n    access_token\n  }\n}": types.RefreshDocument,
    "mutation Register($input: RegisterInput!) {\n  register(registerInput: $input) {\n    message\n    email\n  }\n}": types.RegisterDocument,
    "query Validate_auth($refreshToken: String) {\n  validate_auth(refreshToken: $refreshToken) {\n    authenticated\n  }\n}": types.Validate_AuthDocument,
    "mutation VerifyAccount($input: VerifyAccountInput!) {\n  verify_account(verifyAccountInput: $input) {\n    access_token\n  }\n}": types.VerifyAccountDocument,
    "query Viewer {\n  profile {\n    id\n    email\n    verified\n    profile {\n      name\n      logo\n    }\n  }\n}": types.ViewerDocument,
};

/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 *
 *
 * @example
 * ```ts
 * const query = graphql(`query GetUser($id: ID!) { user(id: $id) { name } }`);
 * ```
 *
 * The query argument is unknown!
 * Please regenerate the types.
 */
export function graphql(source: string): unknown;

/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "mutation Login($input: LoginInput!) {\n  login(loginInput: $input) {\n    access_token\n  }\n}"): (typeof documents)["mutation Login($input: LoginInput!) {\n  login(loginInput: $input) {\n    access_token\n  }\n}"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "mutation Logout {\n  logout {\n    message\n  }\n}"): (typeof documents)["mutation Logout {\n  logout {\n    message\n  }\n}"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "mutation Password_reset_request($email: String!) {\n  password_reset_request(email: $email) {\n    message\n    email\n  }\n}"): (typeof documents)["mutation Password_reset_request($email: String!) {\n  password_reset_request(email: $email) {\n    message\n    email\n  }\n}"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "mutation Password_reset($passwordResetInput: PasswordResetInput!) {\n  password_reset(passwordResetInput: $passwordResetInput) {\n    message\n  }\n}"): (typeof documents)["mutation Password_reset($passwordResetInput: PasswordResetInput!) {\n  password_reset(passwordResetInput: $passwordResetInput) {\n    message\n  }\n}"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "query Refresh {\n  refresh {\n    access_token\n  }\n}"): (typeof documents)["query Refresh {\n  refresh {\n    access_token\n  }\n}"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "mutation Register($input: RegisterInput!) {\n  register(registerInput: $input) {\n    message\n    email\n  }\n}"): (typeof documents)["mutation Register($input: RegisterInput!) {\n  register(registerInput: $input) {\n    message\n    email\n  }\n}"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "query Validate_auth($refreshToken: String) {\n  validate_auth(refreshToken: $refreshToken) {\n    authenticated\n  }\n}"): (typeof documents)["query Validate_auth($refreshToken: String) {\n  validate_auth(refreshToken: $refreshToken) {\n    authenticated\n  }\n}"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "mutation VerifyAccount($input: VerifyAccountInput!) {\n  verify_account(verifyAccountInput: $input) {\n    access_token\n  }\n}"): (typeof documents)["mutation VerifyAccount($input: VerifyAccountInput!) {\n  verify_account(verifyAccountInput: $input) {\n    access_token\n  }\n}"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "query Viewer {\n  profile {\n    id\n    email\n    verified\n    profile {\n      name\n      logo\n    }\n  }\n}"): (typeof documents)["query Viewer {\n  profile {\n    id\n    email\n    verified\n    profile {\n      name\n      logo\n    }\n  }\n}"];

export function graphql(source: string) {
  return (documents as any)[source] ?? {};
}

export type DocumentType<TDocumentNode extends DocumentNode<any, any>> = TDocumentNode extends DocumentNode<  infer TType,  any>  ? TType  : never;