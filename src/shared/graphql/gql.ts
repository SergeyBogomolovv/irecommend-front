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
    "mutation Create_comment($content: String!, $recommendationId: String!) {\n  create_comment(content: $content, recommendationId: $recommendationId) {\n    id\n    content\n    recommendationId\n    created_at\n  }\n}": types.Create_CommentDocument,
    "mutation Delete_comment($id: String!) {\n  delete_comment(id: $id) {\n    message\n  }\n}": types.Delete_CommentDocument,
    "mutation Edit_comment($content: String!, $id: String!) {\n  edit_comment(content: $content, id: $id) {\n    message\n  }\n}": types.Edit_CommentDocument,
    "mutation Add_contact($payload: AddContactDto!) {\n  add_contact(payload: $payload) {\n    message\n  }\n}": types.Add_ContactDocument,
    "mutation Delete_contact($id: String!) {\n  remove_contact(contactId: $id) {\n    message\n  }\n}": types.Delete_ContactDocument,
    "mutation Add_to_favorites($recommendationId: String!) {\n  add_to_favorites(id: $recommendationId) {\n    message\n  }\n}": types.Add_To_FavoritesDocument,
    "query ViewersFavorites {\n  profile {\n    favorites {\n      id\n    }\n  }\n}": types.ViewersFavoritesDocument,
    "mutation Remove_from_favorites($recommendationId: String!) {\n  remove_from_favorites(id: $recommendationId) {\n    message\n  }\n}": types.Remove_From_FavoritesDocument,
    "mutation Delete_image_from_recommendation($imageId: String!) {\n  delete_image_from_recommendation(imageId: $imageId) {\n    message\n  }\n}": types.Delete_Image_From_RecommendationDocument,
    "mutation Add_images_to_recommendation($id: String!, $images: [Upload!]!) {\n  add_images_to_recommendation(id: $id, images: $images) {\n    message\n  }\n}": types.Add_Images_To_RecommendationDocument,
    "mutation Delete_recommendation($id: String!) {\n  delete_recommendation(id: $id) {\n    message\n  }\n}": types.Delete_RecommendationDocument,
    "mutation Update_recommendation($id: String!, $payload: UpdateRecommendationInput!) {\n  update_recommendation(id: $id, payload: $payload) {\n    message\n  }\n}": types.Update_RecommendationDocument,
    "mutation Create_recommendation($payload: CreateRecommendationInput!, $images: [Upload!]) {\n  create_recommendation(payload: $payload, images: $images) {\n    message\n  }\n}": types.Create_RecommendationDocument,
    "mutation Edit_profile($payload: UpdateProfileDto) {\n  update_profile(payload: $payload) {\n    profile {\n      name\n      about\n    }\n  }\n}": types.Edit_ProfileDocument,
    "mutation Update_avatar($image: Upload) {\n  update_profile(image: $image) {\n    id\n  }\n}": types.Update_AvatarDocument,
    "query One_user($id: String!) {\n  one_user(id: $id) {\n    created_at\n    email\n    password\n    verified\n    profileId\n    profile {\n      name\n      about\n      logo\n      contacts {\n        id\n        url\n        nickname\n        type\n      }\n      id\n    }\n  }\n}": types.One_UserDocument,
    "query Get_comments($recommendationId: String!, $count: Int) {\n  get_comments(recommendationId: $recommendationId, count: $count) {\n    totalCount\n    comments {\n      id\n      content\n      created_at\n      author {\n        id\n        profile {\n          name\n          logo\n        }\n      }\n    }\n  }\n}": types.Get_CommentsDocument,
    "query Favorites_recommendations($page: Int) {\n  favorites_recommendations(page: $page) {\n    recommendations {\n      id\n      title\n      description\n      favoritesCount\n      type\n      link\n      created_at\n      images {\n        id\n        url\n      }\n      authorId\n    }\n    pagesCount\n  }\n}": types.Favorites_RecommendationsDocument,
    "query Last_recommendations($type: RecommendationType, $page: Int) {\n  last_recommendations(type: $type, page: $page) {\n    recommendations {\n      id\n      title\n      description\n      favoritesCount\n      type\n      link\n      created_at\n      images {\n        id\n        url\n      }\n      authorId\n    }\n    pagesCount\n  }\n}": types.Last_RecommendationsDocument,
    "query Search_recommendations($query: String!) {\n  search_recommendations(query: $query) {\n    id\n    title\n    description\n    favoritesCount\n    type\n    link\n    created_at\n    images {\n      id\n      url\n    }\n    authorId\n  }\n}": types.Search_RecommendationsDocument,
    "query MyRecommendations {\n  users_recommedations {\n    id\n    title\n    description\n    favoritesCount\n    type\n    link\n    images {\n      id\n      url\n    }\n    authorId\n    created_at\n  }\n}": types.MyRecommendationsDocument,
    "query Profile {\n  profile {\n    id\n    created_at\n    email\n    password\n    profile {\n      name\n      about\n      logo\n      contacts {\n        id\n        url\n        type\n        nickname\n      }\n    }\n  }\n}": types.ProfileDocument,
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
export function graphql(source: "mutation Create_comment($content: String!, $recommendationId: String!) {\n  create_comment(content: $content, recommendationId: $recommendationId) {\n    id\n    content\n    recommendationId\n    created_at\n  }\n}"): (typeof documents)["mutation Create_comment($content: String!, $recommendationId: String!) {\n  create_comment(content: $content, recommendationId: $recommendationId) {\n    id\n    content\n    recommendationId\n    created_at\n  }\n}"];
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
export function graphql(source: "mutation Add_contact($payload: AddContactDto!) {\n  add_contact(payload: $payload) {\n    message\n  }\n}"): (typeof documents)["mutation Add_contact($payload: AddContactDto!) {\n  add_contact(payload: $payload) {\n    message\n  }\n}"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "mutation Delete_contact($id: String!) {\n  remove_contact(contactId: $id) {\n    message\n  }\n}"): (typeof documents)["mutation Delete_contact($id: String!) {\n  remove_contact(contactId: $id) {\n    message\n  }\n}"];
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
export function graphql(source: "mutation Delete_image_from_recommendation($imageId: String!) {\n  delete_image_from_recommendation(imageId: $imageId) {\n    message\n  }\n}"): (typeof documents)["mutation Delete_image_from_recommendation($imageId: String!) {\n  delete_image_from_recommendation(imageId: $imageId) {\n    message\n  }\n}"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "mutation Add_images_to_recommendation($id: String!, $images: [Upload!]!) {\n  add_images_to_recommendation(id: $id, images: $images) {\n    message\n  }\n}"): (typeof documents)["mutation Add_images_to_recommendation($id: String!, $images: [Upload!]!) {\n  add_images_to_recommendation(id: $id, images: $images) {\n    message\n  }\n}"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "mutation Delete_recommendation($id: String!) {\n  delete_recommendation(id: $id) {\n    message\n  }\n}"): (typeof documents)["mutation Delete_recommendation($id: String!) {\n  delete_recommendation(id: $id) {\n    message\n  }\n}"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "mutation Update_recommendation($id: String!, $payload: UpdateRecommendationInput!) {\n  update_recommendation(id: $id, payload: $payload) {\n    message\n  }\n}"): (typeof documents)["mutation Update_recommendation($id: String!, $payload: UpdateRecommendationInput!) {\n  update_recommendation(id: $id, payload: $payload) {\n    message\n  }\n}"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "mutation Create_recommendation($payload: CreateRecommendationInput!, $images: [Upload!]) {\n  create_recommendation(payload: $payload, images: $images) {\n    message\n  }\n}"): (typeof documents)["mutation Create_recommendation($payload: CreateRecommendationInput!, $images: [Upload!]) {\n  create_recommendation(payload: $payload, images: $images) {\n    message\n  }\n}"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "mutation Edit_profile($payload: UpdateProfileDto) {\n  update_profile(payload: $payload) {\n    profile {\n      name\n      about\n    }\n  }\n}"): (typeof documents)["mutation Edit_profile($payload: UpdateProfileDto) {\n  update_profile(payload: $payload) {\n    profile {\n      name\n      about\n    }\n  }\n}"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "mutation Update_avatar($image: Upload) {\n  update_profile(image: $image) {\n    id\n  }\n}"): (typeof documents)["mutation Update_avatar($image: Upload) {\n  update_profile(image: $image) {\n    id\n  }\n}"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "query One_user($id: String!) {\n  one_user(id: $id) {\n    created_at\n    email\n    password\n    verified\n    profileId\n    profile {\n      name\n      about\n      logo\n      contacts {\n        id\n        url\n        nickname\n        type\n      }\n      id\n    }\n  }\n}"): (typeof documents)["query One_user($id: String!) {\n  one_user(id: $id) {\n    created_at\n    email\n    password\n    verified\n    profileId\n    profile {\n      name\n      about\n      logo\n      contacts {\n        id\n        url\n        nickname\n        type\n      }\n      id\n    }\n  }\n}"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "query Get_comments($recommendationId: String!, $count: Int) {\n  get_comments(recommendationId: $recommendationId, count: $count) {\n    totalCount\n    comments {\n      id\n      content\n      created_at\n      author {\n        id\n        profile {\n          name\n          logo\n        }\n      }\n    }\n  }\n}"): (typeof documents)["query Get_comments($recommendationId: String!, $count: Int) {\n  get_comments(recommendationId: $recommendationId, count: $count) {\n    totalCount\n    comments {\n      id\n      content\n      created_at\n      author {\n        id\n        profile {\n          name\n          logo\n        }\n      }\n    }\n  }\n}"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "query Favorites_recommendations($page: Int) {\n  favorites_recommendations(page: $page) {\n    recommendations {\n      id\n      title\n      description\n      favoritesCount\n      type\n      link\n      created_at\n      images {\n        id\n        url\n      }\n      authorId\n    }\n    pagesCount\n  }\n}"): (typeof documents)["query Favorites_recommendations($page: Int) {\n  favorites_recommendations(page: $page) {\n    recommendations {\n      id\n      title\n      description\n      favoritesCount\n      type\n      link\n      created_at\n      images {\n        id\n        url\n      }\n      authorId\n    }\n    pagesCount\n  }\n}"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "query Last_recommendations($type: RecommendationType, $page: Int) {\n  last_recommendations(type: $type, page: $page) {\n    recommendations {\n      id\n      title\n      description\n      favoritesCount\n      type\n      link\n      created_at\n      images {\n        id\n        url\n      }\n      authorId\n    }\n    pagesCount\n  }\n}"): (typeof documents)["query Last_recommendations($type: RecommendationType, $page: Int) {\n  last_recommendations(type: $type, page: $page) {\n    recommendations {\n      id\n      title\n      description\n      favoritesCount\n      type\n      link\n      created_at\n      images {\n        id\n        url\n      }\n      authorId\n    }\n    pagesCount\n  }\n}"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "query Search_recommendations($query: String!) {\n  search_recommendations(query: $query) {\n    id\n    title\n    description\n    favoritesCount\n    type\n    link\n    created_at\n    images {\n      id\n      url\n    }\n    authorId\n  }\n}"): (typeof documents)["query Search_recommendations($query: String!) {\n  search_recommendations(query: $query) {\n    id\n    title\n    description\n    favoritesCount\n    type\n    link\n    created_at\n    images {\n      id\n      url\n    }\n    authorId\n  }\n}"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "query MyRecommendations {\n  users_recommedations {\n    id\n    title\n    description\n    favoritesCount\n    type\n    link\n    images {\n      id\n      url\n    }\n    authorId\n    created_at\n  }\n}"): (typeof documents)["query MyRecommendations {\n  users_recommedations {\n    id\n    title\n    description\n    favoritesCount\n    type\n    link\n    images {\n      id\n      url\n    }\n    authorId\n    created_at\n  }\n}"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "query Profile {\n  profile {\n    id\n    created_at\n    email\n    password\n    profile {\n      name\n      about\n      logo\n      contacts {\n        id\n        url\n        type\n        nickname\n      }\n    }\n  }\n}"): (typeof documents)["query Profile {\n  profile {\n    id\n    created_at\n    email\n    password\n    profile {\n      name\n      about\n      logo\n      contacts {\n        id\n        url\n        type\n        nickname\n      }\n    }\n  }\n}"];

export function graphql(source: string) {
  return (documents as any)[source] ?? {};
}

export type DocumentType<TDocumentNode extends DocumentNode<any, any>> = TDocumentNode extends DocumentNode<  infer TType,  any>  ? TType  : never;