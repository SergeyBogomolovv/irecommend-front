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
    "query Viewer {\n  profile {\n    id\n    email\n    verified\n    profile {\n      name\n      about\n      logo\n    }\n  }\n}": types.ViewerDocument,
    "mutation Login($input: LoginInput!) {\n  login(loginInput: $input) {\n    access_token\n  }\n}": types.LoginDocument,
    "mutation Logout {\n  logout {\n    message\n  }\n}": types.LogoutDocument,
    "mutation Password_reset_request($email: String!) {\n  password_reset_request(email: $email) {\n    message\n    email\n  }\n}": types.Password_Reset_RequestDocument,
    "mutation Password_reset($passwordResetInput: PasswordResetInput!) {\n  password_reset(passwordResetInput: $passwordResetInput) {\n    message\n  }\n}": types.Password_ResetDocument,
    "query Refresh {\n  refresh {\n    access_token\n  }\n}": types.RefreshDocument,
    "mutation Register($input: RegisterInput!) {\n  register(registerInput: $input) {\n    message\n    email\n  }\n}": types.RegisterDocument,
    "mutation VerifyAccount($input: VerifyAccountInput!) {\n  verify_account(verifyAccountInput: $input) {\n    access_token\n  }\n}": types.VerifyAccountDocument,
    "mutation Delete_comment($id: String!) {\n  delete_comment(id: $id) {\n    message\n  }\n}": types.Delete_CommentDocument,
    "mutation Edit_comment($content: String!, $id: String!) {\n  edit_comment(content: $content, id: $id) {\n    message\n  }\n}": types.Edit_CommentDocument,
    "mutation Create_comment($content: String!, $recommendationId: String!) {\n  create_comment(content: $content, recommendationId: $recommendationId) {\n    id\n    content\n    recommendationId\n    created_at\n  }\n}": types.Create_CommentDocument,
    "mutation Add_to_favorites($recommendationId: String!) {\n  add_to_favorites(id: $recommendationId) {\n    message\n  }\n}": types.Add_To_FavoritesDocument,
    "query ViewersFavorites {\n  profile {\n    favorites {\n      id\n    }\n  }\n}": types.ViewersFavoritesDocument,
    "mutation Remove_from_favorites($recommendationId: String!) {\n  remove_from_favorites(id: $recommendationId) {\n    message\n  }\n}": types.Remove_From_FavoritesDocument,
    "mutation Create_recommendation($payload: CreateRecommendationInput!, $images: [Upload!]) {\n  create_recommendation(payload: $payload, images: $images) {\n    message\n  }\n}": types.Create_RecommendationDocument,
    "query Last_recommendations($type: RecommendationType, $page: Int, $limit: Int) {\n  last_recommendations(type: $type, page: $page, limit: $limit) {\n    id\n    title\n    description\n    favoritesCount\n    type\n    link\n    created_at\n    images {\n      id\n      url\n    }\n    comments {\n      id\n      content\n      created_at\n      author {\n        id\n        profile {\n          name\n          logo\n        }\n      }\n    }\n    author {\n      profile {\n        name\n        logo\n      }\n    }\n  }\n}": types.Last_RecommendationsDocument,
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
export function graphql(source: "query Viewer {\n  profile {\n    id\n    email\n    verified\n    profile {\n      name\n      about\n      logo\n    }\n  }\n}"): (typeof documents)["query Viewer {\n  profile {\n    id\n    email\n    verified\n    profile {\n      name\n      about\n      logo\n    }\n  }\n}"];
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
export function graphql(source: "mutation VerifyAccount($input: VerifyAccountInput!) {\n  verify_account(verifyAccountInput: $input) {\n    access_token\n  }\n}"): (typeof documents)["mutation VerifyAccount($input: VerifyAccountInput!) {\n  verify_account(verifyAccountInput: $input) {\n    access_token\n  }\n}"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "mutation Delete_comment($id: String!) {\n  delete_comment(id: $id) {\n    message\n  }\n}"): (typeof documents)["mutation Delete_comment($id: String!) {\n  delete_comment(id: $id) {\n    message\n  }\n}"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "mutation Edit_comment($content: String!, $id: String!) {\n  edit_comment(content: $content, id: $id) {\n    message\n  }\n}"): (typeof documents)["mutation Edit_comment($content: String!, $id: String!) {\n  edit_comment(content: $content, id: $id) {\n    message\n  }\n}"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "mutation Create_comment($content: String!, $recommendationId: String!) {\n  create_comment(content: $content, recommendationId: $recommendationId) {\n    id\n    content\n    recommendationId\n    created_at\n  }\n}"): (typeof documents)["mutation Create_comment($content: String!, $recommendationId: String!) {\n  create_comment(content: $content, recommendationId: $recommendationId) {\n    id\n    content\n    recommendationId\n    created_at\n  }\n}"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "mutation Add_to_favorites($recommendationId: String!) {\n  add_to_favorites(id: $recommendationId) {\n    message\n  }\n}"): (typeof documents)["mutation Add_to_favorites($recommendationId: String!) {\n  add_to_favorites(id: $recommendationId) {\n    message\n  }\n}"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "query ViewersFavorites {\n  profile {\n    favorites {\n      id\n    }\n  }\n}"): (typeof documents)["query ViewersFavorites {\n  profile {\n    favorites {\n      id\n    }\n  }\n}"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "mutation Remove_from_favorites($recommendationId: String!) {\n  remove_from_favorites(id: $recommendationId) {\n    message\n  }\n}"): (typeof documents)["mutation Remove_from_favorites($recommendationId: String!) {\n  remove_from_favorites(id: $recommendationId) {\n    message\n  }\n}"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "mutation Create_recommendation($payload: CreateRecommendationInput!, $images: [Upload!]) {\n  create_recommendation(payload: $payload, images: $images) {\n    message\n  }\n}"): (typeof documents)["mutation Create_recommendation($payload: CreateRecommendationInput!, $images: [Upload!]) {\n  create_recommendation(payload: $payload, images: $images) {\n    message\n  }\n}"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "query Last_recommendations($type: RecommendationType, $page: Int, $limit: Int) {\n  last_recommendations(type: $type, page: $page, limit: $limit) {\n    id\n    title\n    description\n    favoritesCount\n    type\n    link\n    created_at\n    images {\n      id\n      url\n    }\n    comments {\n      id\n      content\n      created_at\n      author {\n        id\n        profile {\n          name\n          logo\n        }\n      }\n    }\n    author {\n      profile {\n        name\n        logo\n      }\n    }\n  }\n}"): (typeof documents)["query Last_recommendations($type: RecommendationType, $page: Int, $limit: Int) {\n  last_recommendations(type: $type, page: $page, limit: $limit) {\n    id\n    title\n    description\n    favoritesCount\n    type\n    link\n    created_at\n    images {\n      id\n      url\n    }\n    comments {\n      id\n      content\n      created_at\n      author {\n        id\n        profile {\n          name\n          logo\n        }\n      }\n    }\n    author {\n      profile {\n        name\n        logo\n      }\n    }\n  }\n}"];

export function graphql(source: string) {
  return (documents as any)[source] ?? {};
}

export type DocumentType<TDocumentNode extends DocumentNode<any, any>> = TDocumentNode extends DocumentNode<  infer TType,  any>  ? TType  : never;