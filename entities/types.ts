export type Maybe<T> = T | null
export type InputMaybe<T> = Maybe<T>
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] }
export type MakeOptional<T, K extends keyof T> = { [SubKey in K]?: Maybe<T[SubKey]> } & Omit<T, K>
export type MakeMaybe<T, K extends keyof T> = { [SubKey in K]: Maybe<T[SubKey]> } & Omit<T, K>
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = {
  [_ in K]?: never
}
export type Incremental<T> =
  | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never }
  | T
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  Boolean: { input: boolean; output: boolean }
  DateTime: { input: any; output: any }
  Float: { input: number; output: number }
  ID: { input: string; output: string }
  Int: { input: number; output: number }
  String: { input: string; output: string }
}

export enum AccountType {
  Business = 'BUSINESS',
  Personal = 'PERSONAL',
}

export type AuthLoginInput = {
  email: Scalars['String']['input']
  password: Scalars['String']['input']
}

export type Mutation = {
  __typename?: 'Mutation'
  authorizeSuperAdmin: Scalars['String']['output']
  deleteUser: Scalars['Boolean']['output']
}

export type MutationAuthorizeSuperAdminArgs = {
  authLoginInput: AuthLoginInput
}

export type MutationDeleteUserArgs = {
  userId: Scalars['String']['input']
}

export type PaginatedUserModel = {
  __typename?: 'PaginatedUserModel'
  items: Array<UserModel>
  page: Scalars['Int']['output']
  pageSize: Scalars['Int']['output']
  pagesCount: Scalars['Int']['output']
  totalCount: Scalars['Int']['output']
}

export type Query = {
  __typename?: 'Query'
  getUsers: PaginatedUserModel
  loginSa: Scalars['String']['output']
  sayHello: Scalars['String']['output']
}

export type QueryGetUsersArgs = {
  page?: InputMaybe<Scalars['Float']['input']>
  pageSize?: InputMaybe<Scalars['Float']['input']>
  search?: InputMaybe<Scalars['String']['input']>
  sortBy?: Scalars['String']['input']
  sortOrder?: SortDirection
}

export enum SortDirection {
  Asc = 'ASC',
  Desc = 'DESC',
}

export type UserModel = {
  __typename?: 'UserModel'
  aboutMe?: Maybe<Scalars['String']['output']>
  accountType: AccountType
  autoRenewal: Scalars['Boolean']['output']
  avatarURL?: Maybe<Scalars['String']['output']>
  birthDate?: Maybe<Scalars['String']['output']>
  city?: Maybe<Scalars['String']['output']>
  country?: Maybe<Scalars['String']['output']>
  createdAt: Scalars['DateTime']['output']
  email: Scalars['String']['output']
  endDateOfSubscription?: Maybe<Scalars['DateTime']['output']>
  firstName?: Maybe<Scalars['String']['output']>
  id: Scalars['String']['output']
  isDeleted: Scalars['Boolean']['output']
  lastName?: Maybe<Scalars['String']['output']>
  profileLink?: Maybe<Scalars['String']['output']>
  username: Scalars['String']['output']
}
