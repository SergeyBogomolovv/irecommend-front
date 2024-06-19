/* eslint-disable */
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
  /** A date-time string at UTC, such as 2019-12-03T09:54:33Z, compliant with the date-time format. */
  DateTime: { input: any; output: any; }
  /** The `Upload` scalar type represents a file upload. */
  Upload: { input: any; output: any; }
};

export type AccessTokenResponse = {
  __typename?: 'AccessTokenResponse';
  access_token: Scalars['String']['output'];
};

export type AddContactDto = {
  type: Contacts;
  url: Scalars['String']['input'];
};

export type Comment = {
  __typename?: 'Comment';
  author?: Maybe<User>;
  content: Scalars['String']['output'];
  created_at: Scalars['DateTime']['output'];
  id: Scalars['ID']['output'];
};

export type Contact = {
  __typename?: 'Contact';
  id: Scalars['ID']['output'];
  type: Contacts;
  url: Scalars['String']['output'];
};

export enum Contacts {
  Discord = 'DISCORD',
  Instagram = 'INSTAGRAM',
  Telegram = 'TELEGRAM',
  Vk = 'VK'
}

export type CreateRecommendationInput = {
  description: Scalars['String']['input'];
  link?: InputMaybe<Scalars['String']['input']>;
  title: Scalars['String']['input'];
  type: RecommendationType;
};

export type FriendRequest = {
  __typename?: 'FriendRequest';
  created_at: Scalars['DateTime']['output'];
  id: Scalars['ID']['output'];
  recipient?: Maybe<User>;
  sender?: Maybe<User>;
};

export type Image = {
  __typename?: 'Image';
  id: Scalars['ID']['output'];
  url: Scalars['String']['output'];
};

export type LoginInput = {
  email: Scalars['String']['input'];
  password: Scalars['String']['input'];
};

export type MessageResponse = {
  __typename?: 'MessageResponse';
  message: Scalars['String']['output'];
};

export type Mutation = {
  __typename?: 'Mutation';
  accept_friend_request: MessageResponse;
  add_contact: MessageResponse;
  add_images_to_recommendation: MessageResponse;
  add_to_favorites: MessageResponse;
  create_comment: MessageResponse;
  create_recommendation: MessageResponse;
  decline_friend_request: MessageResponse;
  delete_comment: MessageResponse;
  delete_friend: MessageResponse;
  delete_image_from_recommendation: MessageResponse;
  delete_profile: MessageResponse;
  delete_recommendation: MessageResponse;
  edit_comment: MessageResponse;
  login: AccessTokenResponse;
  logout: MessageResponse;
  password_reset: MessageResponse;
  password_reset_request: VerifyResponse;
  register: VerifyResponse;
  remove_contact: MessageResponse;
  remove_from_favorites: MessageResponse;
  send_friend_request: MessageResponse;
  update_profile: User;
  update_recommendation: MessageResponse;
  verify_account: AccessTokenResponse;
};


export type MutationAccept_Friend_RequestArgs = {
  requestId: Scalars['String']['input'];
};


export type MutationAdd_ContactArgs = {
  payload: AddContactDto;
};


export type MutationAdd_Images_To_RecommendationArgs = {
  id: Scalars['String']['input'];
  images: Array<Scalars['Upload']['input']>;
};


export type MutationAdd_To_FavoritesArgs = {
  id: Scalars['String']['input'];
};


export type MutationCreate_CommentArgs = {
  content: Scalars['String']['input'];
  recommendationId: Scalars['String']['input'];
};


export type MutationCreate_RecommendationArgs = {
  images: Array<Scalars['Upload']['input']>;
  payload: CreateRecommendationInput;
};


export type MutationDecline_Friend_RequestArgs = {
  requestId: Scalars['String']['input'];
};


export type MutationDelete_CommentArgs = {
  id: Scalars['String']['input'];
};


export type MutationDelete_FriendArgs = {
  friendId: Scalars['String']['input'];
};


export type MutationDelete_Image_From_RecommendationArgs = {
  imageId: Scalars['String']['input'];
};


export type MutationDelete_RecommendationArgs = {
  id: Scalars['String']['input'];
};


export type MutationEdit_CommentArgs = {
  content: Scalars['String']['input'];
  id: Scalars['String']['input'];
};


export type MutationLoginArgs = {
  loginInput: LoginInput;
};


export type MutationPassword_ResetArgs = {
  passwordResetInput: PasswordResetInput;
};


export type MutationPassword_Reset_RequestArgs = {
  email: Scalars['String']['input'];
};


export type MutationRegisterArgs = {
  registerInput: RegisterInput;
};


export type MutationRemove_ContactArgs = {
  contactId: Scalars['String']['input'];
};


export type MutationRemove_From_FavoritesArgs = {
  id: Scalars['String']['input'];
};


export type MutationSend_Friend_RequestArgs = {
  friendId: Scalars['String']['input'];
};


export type MutationUpdate_ProfileArgs = {
  image?: InputMaybe<Scalars['Upload']['input']>;
  payload: UpdateProfileDto;
};


export type MutationUpdate_RecommendationArgs = {
  id: Scalars['String']['input'];
  payload: UpdateRecommendationInput;
};


export type MutationVerify_AccountArgs = {
  verifyAccountInput: VerifyAccountInput;
};

export type PasswordResetInput = {
  code: Scalars['String']['input'];
  email: Scalars['String']['input'];
  newPassword: Scalars['String']['input'];
};

export type Profile = {
  __typename?: 'Profile';
  about?: Maybe<Scalars['String']['output']>;
  contacts?: Maybe<Array<Contact>>;
  id: Scalars['ID']['output'];
  logo?: Maybe<Scalars['String']['output']>;
  name: Scalars['String']['output'];
};

export type Query = {
  __typename?: 'Query';
  get_recommendation_by_id: Recommendation;
  get_recommendations_by_type: Array<Recommendation>;
  one_user: User;
  profile: User;
  refresh: AccessTokenResponse;
  search_recommendations: Array<Recommendation>;
  search_users: Array<User>;
};


export type QueryGet_Recommendation_By_IdArgs = {
  id: Scalars['String']['input'];
};


export type QueryGet_Recommendations_By_TypeArgs = {
  type: RecommendationType;
};


export type QueryOne_UserArgs = {
  id: Scalars['String']['input'];
};


export type QuerySearch_RecommendationsArgs = {
  query: Scalars['String']['input'];
};


export type QuerySearch_UsersArgs = {
  name: Scalars['String']['input'];
};

export type Recommendation = {
  __typename?: 'Recommendation';
  author?: Maybe<User>;
  comments?: Maybe<Array<Comment>>;
  created_at: Scalars['DateTime']['output'];
  description: Scalars['String']['output'];
  favoritesCount: Scalars['Int']['output'];
  id: Scalars['ID']['output'];
  images?: Maybe<Array<Image>>;
  link?: Maybe<Scalars['String']['output']>;
  title: Scalars['String']['output'];
  type: RecommendationType;
};

export enum RecommendationType {
  Anime = 'ANIME',
  Book = 'BOOK',
  Hobby = 'HOBBY',
  Movie = 'MOVIE',
  Music = 'MUSIC',
  Series = 'SERIES',
  Todo = 'TODO'
}

export type RegisterInput = {
  email: Scalars['String']['input'];
  name: Scalars['String']['input'];
  password: Scalars['String']['input'];
};

export type UpdateProfileDto = {
  about?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
};

export type UpdateRecommendationInput = {
  description?: InputMaybe<Scalars['String']['input']>;
  link?: InputMaybe<Scalars['String']['input']>;
  title?: InputMaybe<Scalars['String']['input']>;
};

export type User = {
  __typename?: 'User';
  created_at: Scalars['DateTime']['output'];
  email?: Maybe<Scalars['String']['output']>;
  favorites?: Maybe<Array<Recommendation>>;
  friends?: Maybe<Array<User>>;
  id: Scalars['ID']['output'];
  password?: Maybe<Scalars['String']['output']>;
  profile?: Maybe<Profile>;
  receivedFriendRequests?: Maybe<Array<FriendRequest>>;
  recommendations?: Maybe<Array<Recommendation>>;
  sendedFriendRequests?: Maybe<Array<FriendRequest>>;
  verified: Scalars['Boolean']['output'];
};

export type VerifyAccountInput = {
  code: Scalars['String']['input'];
  email: Scalars['String']['input'];
};

export type VerifyResponse = {
  __typename?: 'VerifyResponse';
  email: Scalars['String']['output'];
  message: Scalars['String']['output'];
};

export type LoginMutationVariables = Exact<{
  input: LoginInput;
}>;


export type LoginMutation = { __typename?: 'Mutation', login: { __typename?: 'AccessTokenResponse', access_token: string } };

export type LogoutMutationVariables = Exact<{ [key: string]: never; }>;


export type LogoutMutation = { __typename?: 'Mutation', logout: { __typename?: 'MessageResponse', message: string } };

export type Password_Reset_RequestMutationVariables = Exact<{
  email: Scalars['String']['input'];
}>;


export type Password_Reset_RequestMutation = { __typename?: 'Mutation', password_reset_request: { __typename?: 'VerifyResponse', message: string, email: string } };

export type Password_ResetMutationVariables = Exact<{
  passwordResetInput: PasswordResetInput;
}>;


export type Password_ResetMutation = { __typename?: 'Mutation', password_reset: { __typename?: 'MessageResponse', message: string } };

export type RefreshQueryVariables = Exact<{ [key: string]: never; }>;


export type RefreshQuery = { __typename?: 'Query', refresh: { __typename?: 'AccessTokenResponse', access_token: string } };

export type RegisterMutationVariables = Exact<{
  input: RegisterInput;
}>;


export type RegisterMutation = { __typename?: 'Mutation', register: { __typename?: 'VerifyResponse', message: string, email: string } };

export type VerifyAccountMutationVariables = Exact<{
  input: VerifyAccountInput;
}>;


export type VerifyAccountMutation = { __typename?: 'Mutation', verify_account: { __typename?: 'AccessTokenResponse', access_token: string } };

export type ViewerQueryVariables = Exact<{ [key: string]: never; }>;


export type ViewerQuery = { __typename?: 'Query', profile: { __typename?: 'User', id: string, email?: string | null, verified: boolean, profile?: { __typename?: 'Profile', name: string, about?: string | null, logo?: string | null } | null } };


export const LoginDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"Login"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"input"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"LoginInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"login"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"loginInput"},"value":{"kind":"Variable","name":{"kind":"Name","value":"input"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"access_token"}}]}}]}}]} as unknown as DocumentNode<LoginMutation, LoginMutationVariables>;
export const LogoutDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"Logout"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"logout"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"message"}}]}}]}}]} as unknown as DocumentNode<LogoutMutation, LogoutMutationVariables>;
export const Password_Reset_RequestDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"Password_reset_request"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"email"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"password_reset_request"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"email"},"value":{"kind":"Variable","name":{"kind":"Name","value":"email"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"message"}},{"kind":"Field","name":{"kind":"Name","value":"email"}}]}}]}}]} as unknown as DocumentNode<Password_Reset_RequestMutation, Password_Reset_RequestMutationVariables>;
export const Password_ResetDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"Password_reset"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"passwordResetInput"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"PasswordResetInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"password_reset"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"passwordResetInput"},"value":{"kind":"Variable","name":{"kind":"Name","value":"passwordResetInput"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"message"}}]}}]}}]} as unknown as DocumentNode<Password_ResetMutation, Password_ResetMutationVariables>;
export const RefreshDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"Refresh"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"refresh"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"access_token"}}]}}]}}]} as unknown as DocumentNode<RefreshQuery, RefreshQueryVariables>;
export const RegisterDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"Register"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"input"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"RegisterInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"register"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"registerInput"},"value":{"kind":"Variable","name":{"kind":"Name","value":"input"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"message"}},{"kind":"Field","name":{"kind":"Name","value":"email"}}]}}]}}]} as unknown as DocumentNode<RegisterMutation, RegisterMutationVariables>;
export const VerifyAccountDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"VerifyAccount"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"input"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"VerifyAccountInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"verify_account"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"verifyAccountInput"},"value":{"kind":"Variable","name":{"kind":"Name","value":"input"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"access_token"}}]}}]}}]} as unknown as DocumentNode<VerifyAccountMutation, VerifyAccountMutationVariables>;
export const ViewerDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"Viewer"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"profile"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"email"}},{"kind":"Field","name":{"kind":"Name","value":"verified"}},{"kind":"Field","name":{"kind":"Name","value":"profile"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"about"}},{"kind":"Field","name":{"kind":"Name","value":"logo"}}]}}]}}]}}]} as unknown as DocumentNode<ViewerQuery, ViewerQueryVariables>;