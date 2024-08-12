export type Maybe<T> = T;
export type InputMaybe<T> = T;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = {
  [_ in K]?: never;
};
export type Incremental<T> =
  | T
  | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string };
  String: { input: string; output: string };
  Boolean: { input: boolean; output: boolean };
  Int: { input: number; output: number };
  Float: { input: number; output: number };
  Cursor: { input: any; output: any };
  Datetime: { input: any; output: any };
  JwtToken: { input: any; output: any };
  UUID: { input: any; output: any };
};

export type Admin = Node & {
  __typename?: 'Admin';
  id: Scalars['UUID']['output'];
  /** A globally unique identifier. Can be used in various places throughout the system to identify this single value. */
  nodeId: Scalars['ID']['output'];
  /** Reads a single `User` that is related to this `Admin`. */
  userByUserId?: Maybe<User>;
  userId?: Maybe<Scalars['UUID']['output']>;
};

/** A condition to be used against `Admin` object types. All fields are tested for equality and combined with a logical ‘and.’ */
export type AdminCondition = {
  /** Checks for equality with the object’s `id` field. */
  id?: InputMaybe<Scalars['UUID']['input']>;
  /** Checks for equality with the object’s `userId` field. */
  userId?: InputMaybe<Scalars['UUID']['input']>;
};

/** An input for mutations affecting `Admin` */
export type AdminInput = {
  id?: InputMaybe<Scalars['UUID']['input']>;
  userId?: InputMaybe<Scalars['UUID']['input']>;
};

/** Represents an update to a `Admin`. Fields that are set will be updated. */
export type AdminPatch = {
  id?: InputMaybe<Scalars['UUID']['input']>;
  userId?: InputMaybe<Scalars['UUID']['input']>;
};

/** A connection to a list of `Admin` values. */
export type AdminsConnection = {
  __typename?: 'AdminsConnection';
  /** A list of edges which contains the `Admin` and cursor to aid in pagination. */
  edges: Array<AdminsEdge>;
  /** A list of `Admin` objects. */
  nodes: Array<Maybe<Admin>>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  /** The count of *all* `Admin` you could get from the connection. */
  totalCount: Scalars['Int']['output'];
};

/** A `Admin` edge in the connection. */
export type AdminsEdge = {
  __typename?: 'AdminsEdge';
  /** A cursor for use in pagination. */
  cursor?: Maybe<Scalars['Cursor']['output']>;
  /** The `Admin` at the end of the edge. */
  node?: Maybe<Admin>;
};

/** Methods to use when ordering `Admin`. */
export enum AdminsOrderBy {
  IdAsc = 'ID_ASC',
  IdDesc = 'ID_DESC',
  Natural = 'NATURAL',
  PrimaryKeyAsc = 'PRIMARY_KEY_ASC',
  PrimaryKeyDesc = 'PRIMARY_KEY_DESC',
  UserIdAsc = 'USER_ID_ASC',
  UserIdDesc = 'USER_ID_DESC',
}

export type AllergyRecord = Node & {
  __typename?: 'AllergyRecord';
  id: Scalars['UUID']['output'];
  name: Scalars['String']['output'];
  /** A globally unique identifier. Can be used in various places throughout the system to identify this single value. */
  nodeId: Scalars['ID']['output'];
  reactions?: Maybe<Scalars['String']['output']>;
  /** Reads a single `Record` that is related to this `AllergyRecord`. */
  recordByRecordId?: Maybe<Record>;
  recordId: Scalars['UUID']['output'];
  severity: AllergySeverity;
};

/**
 * A condition to be used against `AllergyRecord` object types. All fields are
 * tested for equality and combined with a logical ‘and.’
 */
export type AllergyRecordCondition = {
  /** Checks for equality with the object’s `id` field. */
  id?: InputMaybe<Scalars['UUID']['input']>;
  /** Checks for equality with the object’s `name` field. */
  name?: InputMaybe<Scalars['String']['input']>;
  /** Checks for equality with the object’s `reactions` field. */
  reactions?: InputMaybe<Scalars['String']['input']>;
  /** Checks for equality with the object’s `recordId` field. */
  recordId?: InputMaybe<Scalars['UUID']['input']>;
  /** Checks for equality with the object’s `severity` field. */
  severity?: InputMaybe<AllergySeverity>;
};

/** An input for mutations affecting `AllergyRecord` */
export type AllergyRecordInput = {
  id?: InputMaybe<Scalars['UUID']['input']>;
  name: Scalars['String']['input'];
  reactions?: InputMaybe<Scalars['String']['input']>;
  recordId: Scalars['UUID']['input'];
  severity: AllergySeverity;
};

/** Represents an update to a `AllergyRecord`. Fields that are set will be updated. */
export type AllergyRecordPatch = {
  id?: InputMaybe<Scalars['UUID']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  reactions?: InputMaybe<Scalars['String']['input']>;
  recordId?: InputMaybe<Scalars['UUID']['input']>;
  severity?: InputMaybe<AllergySeverity>;
};

/** A connection to a list of `AllergyRecord` values. */
export type AllergyRecordsConnection = {
  __typename?: 'AllergyRecordsConnection';
  /** A list of edges which contains the `AllergyRecord` and cursor to aid in pagination. */
  edges: Array<AllergyRecordsEdge>;
  /** A list of `AllergyRecord` objects. */
  nodes: Array<Maybe<AllergyRecord>>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  /** The count of *all* `AllergyRecord` you could get from the connection. */
  totalCount: Scalars['Int']['output'];
};

/** A `AllergyRecord` edge in the connection. */
export type AllergyRecordsEdge = {
  __typename?: 'AllergyRecordsEdge';
  /** A cursor for use in pagination. */
  cursor?: Maybe<Scalars['Cursor']['output']>;
  /** The `AllergyRecord` at the end of the edge. */
  node?: Maybe<AllergyRecord>;
};

/** Methods to use when ordering `AllergyRecord`. */
export enum AllergyRecordsOrderBy {
  IdAsc = 'ID_ASC',
  IdDesc = 'ID_DESC',
  NameAsc = 'NAME_ASC',
  NameDesc = 'NAME_DESC',
  Natural = 'NATURAL',
  PrimaryKeyAsc = 'PRIMARY_KEY_ASC',
  PrimaryKeyDesc = 'PRIMARY_KEY_DESC',
  ReactionsAsc = 'REACTIONS_ASC',
  ReactionsDesc = 'REACTIONS_DESC',
  RecordIdAsc = 'RECORD_ID_ASC',
  RecordIdDesc = 'RECORD_ID_DESC',
  SeverityAsc = 'SEVERITY_ASC',
  SeverityDesc = 'SEVERITY_DESC',
}

export enum AllergySeverity {
  Mild = 'MILD',
  Severe = 'SEVERE',
}

export type Animal = Node & {
  __typename?: 'Animal';
  id: Scalars['UUID']['output'];
  name: Scalars['String']['output'];
  /** A globally unique identifier. Can be used in various places throughout the system to identify this single value. */
  nodeId: Scalars['ID']['output'];
  /** Reads and enables pagination through a set of `Pet`. */
  petsByAnimalId: PetsConnection;
};

export type AnimalPetsByAnimalIdArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  condition?: InputMaybe<PetCondition>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<PetsOrderBy>>;
};

/** A condition to be used against `Animal` object types. All fields are tested for equality and combined with a logical ‘and.’ */
export type AnimalCondition = {
  /** Checks for equality with the object’s `id` field. */
  id?: InputMaybe<Scalars['UUID']['input']>;
  /** Checks for equality with the object’s `name` field. */
  name?: InputMaybe<Scalars['String']['input']>;
};

/** An input for mutations affecting `Animal` */
export type AnimalInput = {
  id?: InputMaybe<Scalars['UUID']['input']>;
  name: Scalars['String']['input'];
};

/** Represents an update to a `Animal`. Fields that are set will be updated. */
export type AnimalPatch = {
  id?: InputMaybe<Scalars['UUID']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
};

/** A connection to a list of `Animal` values. */
export type AnimalsConnection = {
  __typename?: 'AnimalsConnection';
  /** A list of edges which contains the `Animal` and cursor to aid in pagination. */
  edges: Array<AnimalsEdge>;
  /** A list of `Animal` objects. */
  nodes: Array<Maybe<Animal>>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  /** The count of *all* `Animal` you could get from the connection. */
  totalCount: Scalars['Int']['output'];
};

/** A `Animal` edge in the connection. */
export type AnimalsEdge = {
  __typename?: 'AnimalsEdge';
  /** A cursor for use in pagination. */
  cursor?: Maybe<Scalars['Cursor']['output']>;
  /** The `Animal` at the end of the edge. */
  node?: Maybe<Animal>;
};

/** Methods to use when ordering `Animal`. */
export enum AnimalsOrderBy {
  IdAsc = 'ID_ASC',
  IdDesc = 'ID_DESC',
  NameAsc = 'NAME_ASC',
  NameDesc = 'NAME_DESC',
  Natural = 'NATURAL',
  PrimaryKeyAsc = 'PRIMARY_KEY_ASC',
  PrimaryKeyDesc = 'PRIMARY_KEY_DESC',
}

/** All input for the create `Admin` mutation. */
export type CreateAdminInput = {
  /** The `Admin` to be created by this mutation. */
  admin: AdminInput;
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
};

/** The output of our create `Admin` mutation. */
export type CreateAdminPayload = {
  __typename?: 'CreateAdminPayload';
  /** The `Admin` that was created by this mutation. */
  admin?: Maybe<Admin>;
  /** An edge for our `Admin`. May be used by Relay 1. */
  adminEdge?: Maybe<AdminsEdge>;
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId?: Maybe<Scalars['String']['output']>;
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>;
  /** Reads a single `User` that is related to this `Admin`. */
  userByUserId?: Maybe<User>;
};

/** The output of our create `Admin` mutation. */
export type CreateAdminPayloadAdminEdgeArgs = {
  orderBy?: InputMaybe<Array<AdminsOrderBy>>;
};

/** All input for the create `AllergyRecord` mutation. */
export type CreateAllergyRecordInput = {
  /** The `AllergyRecord` to be created by this mutation. */
  allergyRecord: AllergyRecordInput;
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
};

/** The output of our create `AllergyRecord` mutation. */
export type CreateAllergyRecordPayload = {
  __typename?: 'CreateAllergyRecordPayload';
  /** The `AllergyRecord` that was created by this mutation. */
  allergyRecord?: Maybe<AllergyRecord>;
  /** An edge for our `AllergyRecord`. May be used by Relay 1. */
  allergyRecordEdge?: Maybe<AllergyRecordsEdge>;
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId?: Maybe<Scalars['String']['output']>;
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>;
  /** Reads a single `Record` that is related to this `AllergyRecord`. */
  recordByRecordId?: Maybe<Record>;
};

/** The output of our create `AllergyRecord` mutation. */
export type CreateAllergyRecordPayloadAllergyRecordEdgeArgs = {
  orderBy?: InputMaybe<Array<AllergyRecordsOrderBy>>;
};

/** All input for the create `Animal` mutation. */
export type CreateAnimalInput = {
  /** The `Animal` to be created by this mutation. */
  animal: AnimalInput;
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
};

/** The output of our create `Animal` mutation. */
export type CreateAnimalPayload = {
  __typename?: 'CreateAnimalPayload';
  /** The `Animal` that was created by this mutation. */
  animal?: Maybe<Animal>;
  /** An edge for our `Animal`. May be used by Relay 1. */
  animalEdge?: Maybe<AnimalsEdge>;
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId?: Maybe<Scalars['String']['output']>;
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>;
};

/** The output of our create `Animal` mutation. */
export type CreateAnimalPayloadAnimalEdgeArgs = {
  orderBy?: InputMaybe<Array<AnimalsOrderBy>>;
};

/** All input for the create `Pet` mutation. */
export type CreatePetInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  /** The `Pet` to be created by this mutation. */
  pet: PetInput;
};

/** The output of our create `Pet` mutation. */
export type CreatePetPayload = {
  __typename?: 'CreatePetPayload';
  /** Reads a single `Animal` that is related to this `Pet`. */
  animalByAnimalId?: Maybe<Animal>;
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId?: Maybe<Scalars['String']['output']>;
  /** The `Pet` that was created by this mutation. */
  pet?: Maybe<Pet>;
  /** An edge for our `Pet`. May be used by Relay 1. */
  petEdge?: Maybe<PetsEdge>;
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>;
  /** Reads a single `User` that is related to this `Pet`. */
  userByUserId?: Maybe<User>;
};

/** The output of our create `Pet` mutation. */
export type CreatePetPayloadPetEdgeArgs = {
  orderBy?: InputMaybe<Array<PetsOrderBy>>;
};

/** All input for the create `Record` mutation. */
export type CreateRecordInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  /** The `Record` to be created by this mutation. */
  record: RecordInput;
};

/** The output of our create `Record` mutation. */
export type CreateRecordPayload = {
  __typename?: 'CreateRecordPayload';
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId?: Maybe<Scalars['String']['output']>;
  /** Reads a single `Pet` that is related to this `Record`. */
  petByPetId?: Maybe<Pet>;
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>;
  /** The `Record` that was created by this mutation. */
  record?: Maybe<Record>;
  /** An edge for our `Record`. May be used by Relay 1. */
  recordEdge?: Maybe<RecordsEdge>;
  /** Reads a single `RecordType` that is related to this `Record`. */
  recordTypeByRecordType?: Maybe<RecordType>;
  /** Reads a single `User` that is related to this `Record`. */
  userByUserId?: Maybe<User>;
};

/** The output of our create `Record` mutation. */
export type CreateRecordPayloadRecordEdgeArgs = {
  orderBy?: InputMaybe<Array<RecordsOrderBy>>;
};

/** All input for the create `RecordType` mutation. */
export type CreateRecordTypeInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  /** The `RecordType` to be created by this mutation. */
  recordType: RecordTypeInput;
};

/** The output of our create `RecordType` mutation. */
export type CreateRecordTypePayload = {
  __typename?: 'CreateRecordTypePayload';
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId?: Maybe<Scalars['String']['output']>;
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>;
  /** The `RecordType` that was created by this mutation. */
  recordType?: Maybe<RecordType>;
  /** An edge for our `RecordType`. May be used by Relay 1. */
  recordTypeEdge?: Maybe<RecordTypesEdge>;
};

/** The output of our create `RecordType` mutation. */
export type CreateRecordTypePayloadRecordTypeEdgeArgs = {
  orderBy?: InputMaybe<Array<RecordTypesOrderBy>>;
};

/** All input for the create `User` mutation. */
export type CreateUserInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  /** The `User` to be created by this mutation. */
  user: UserInput;
};

/** The output of our create `User` mutation. */
export type CreateUserPayload = {
  __typename?: 'CreateUserPayload';
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId?: Maybe<Scalars['String']['output']>;
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>;
  /** The `User` that was created by this mutation. */
  user?: Maybe<User>;
  /** An edge for our `User`. May be used by Relay 1. */
  userEdge?: Maybe<UsersEdge>;
};

/** The output of our create `User` mutation. */
export type CreateUserPayloadUserEdgeArgs = {
  orderBy?: InputMaybe<Array<UsersOrderBy>>;
};

/** All input for the create `VaccineRecord` mutation. */
export type CreateVaccineRecordInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  /** The `VaccineRecord` to be created by this mutation. */
  vaccineRecord: VaccineRecordInput;
};

/** The output of our create `VaccineRecord` mutation. */
export type CreateVaccineRecordPayload = {
  __typename?: 'CreateVaccineRecordPayload';
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId?: Maybe<Scalars['String']['output']>;
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>;
  /** Reads a single `Record` that is related to this `VaccineRecord`. */
  recordByRecordId?: Maybe<Record>;
  /** The `VaccineRecord` that was created by this mutation. */
  vaccineRecord?: Maybe<VaccineRecord>;
  /** An edge for our `VaccineRecord`. May be used by Relay 1. */
  vaccineRecordEdge?: Maybe<VaccineRecordsEdge>;
};

/** The output of our create `VaccineRecord` mutation. */
export type CreateVaccineRecordPayloadVaccineRecordEdgeArgs = {
  orderBy?: InputMaybe<Array<VaccineRecordsOrderBy>>;
};

/** All input for the create `VisitRecord` mutation. */
export type CreateVisitRecordInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  /** The `VisitRecord` to be created by this mutation. */
  visitRecord: VisitRecordInput;
};

/** The output of our create `VisitRecord` mutation. */
export type CreateVisitRecordPayload = {
  __typename?: 'CreateVisitRecordPayload';
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId?: Maybe<Scalars['String']['output']>;
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>;
  /** Reads a single `Record` that is related to this `VisitRecord`. */
  recordByRecordId?: Maybe<Record>;
  /** The `VisitRecord` that was created by this mutation. */
  visitRecord?: Maybe<VisitRecord>;
  /** An edge for our `VisitRecord`. May be used by Relay 1. */
  visitRecordEdge?: Maybe<VisitRecordsEdge>;
};

/** The output of our create `VisitRecord` mutation. */
export type CreateVisitRecordPayloadVisitRecordEdgeArgs = {
  orderBy?: InputMaybe<Array<VisitRecordsOrderBy>>;
};

/** All input for the `deleteAdminById` mutation. */
export type DeleteAdminByIdInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  id: Scalars['UUID']['input'];
};

/** All input for the `deleteAdminByUserId` mutation. */
export type DeleteAdminByUserIdInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  userId: Scalars['UUID']['input'];
};

/** All input for the `deleteAdmin` mutation. */
export type DeleteAdminInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  /** The globally unique `ID` which will identify a single `Admin` to be deleted. */
  nodeId: Scalars['ID']['input'];
};

/** The output of our delete `Admin` mutation. */
export type DeleteAdminPayload = {
  __typename?: 'DeleteAdminPayload';
  /** The `Admin` that was deleted by this mutation. */
  admin?: Maybe<Admin>;
  /** An edge for our `Admin`. May be used by Relay 1. */
  adminEdge?: Maybe<AdminsEdge>;
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId?: Maybe<Scalars['String']['output']>;
  deletedAdminId?: Maybe<Scalars['ID']['output']>;
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>;
  /** Reads a single `User` that is related to this `Admin`. */
  userByUserId?: Maybe<User>;
};

/** The output of our delete `Admin` mutation. */
export type DeleteAdminPayloadAdminEdgeArgs = {
  orderBy?: InputMaybe<Array<AdminsOrderBy>>;
};

/** All input for the `deleteAllergyRecordById` mutation. */
export type DeleteAllergyRecordByIdInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  id: Scalars['UUID']['input'];
};

/** All input for the `deleteAllergyRecord` mutation. */
export type DeleteAllergyRecordInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  /** The globally unique `ID` which will identify a single `AllergyRecord` to be deleted. */
  nodeId: Scalars['ID']['input'];
};

/** The output of our delete `AllergyRecord` mutation. */
export type DeleteAllergyRecordPayload = {
  __typename?: 'DeleteAllergyRecordPayload';
  /** The `AllergyRecord` that was deleted by this mutation. */
  allergyRecord?: Maybe<AllergyRecord>;
  /** An edge for our `AllergyRecord`. May be used by Relay 1. */
  allergyRecordEdge?: Maybe<AllergyRecordsEdge>;
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId?: Maybe<Scalars['String']['output']>;
  deletedAllergyRecordId?: Maybe<Scalars['ID']['output']>;
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>;
  /** Reads a single `Record` that is related to this `AllergyRecord`. */
  recordByRecordId?: Maybe<Record>;
};

/** The output of our delete `AllergyRecord` mutation. */
export type DeleteAllergyRecordPayloadAllergyRecordEdgeArgs = {
  orderBy?: InputMaybe<Array<AllergyRecordsOrderBy>>;
};

/** All input for the `deleteAnimalById` mutation. */
export type DeleteAnimalByIdInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  id: Scalars['UUID']['input'];
};

/** All input for the `deleteAnimal` mutation. */
export type DeleteAnimalInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  /** The globally unique `ID` which will identify a single `Animal` to be deleted. */
  nodeId: Scalars['ID']['input'];
};

/** The output of our delete `Animal` mutation. */
export type DeleteAnimalPayload = {
  __typename?: 'DeleteAnimalPayload';
  /** The `Animal` that was deleted by this mutation. */
  animal?: Maybe<Animal>;
  /** An edge for our `Animal`. May be used by Relay 1. */
  animalEdge?: Maybe<AnimalsEdge>;
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId?: Maybe<Scalars['String']['output']>;
  deletedAnimalId?: Maybe<Scalars['ID']['output']>;
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>;
};

/** The output of our delete `Animal` mutation. */
export type DeleteAnimalPayloadAnimalEdgeArgs = {
  orderBy?: InputMaybe<Array<AnimalsOrderBy>>;
};

/** All input for the `deletePetById` mutation. */
export type DeletePetByIdInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  id: Scalars['UUID']['input'];
};

/** All input for the `deletePet` mutation. */
export type DeletePetInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  /** The globally unique `ID` which will identify a single `Pet` to be deleted. */
  nodeId: Scalars['ID']['input'];
};

/** The output of our delete `Pet` mutation. */
export type DeletePetPayload = {
  __typename?: 'DeletePetPayload';
  /** Reads a single `Animal` that is related to this `Pet`. */
  animalByAnimalId?: Maybe<Animal>;
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId?: Maybe<Scalars['String']['output']>;
  deletedPetId?: Maybe<Scalars['ID']['output']>;
  /** The `Pet` that was deleted by this mutation. */
  pet?: Maybe<Pet>;
  /** An edge for our `Pet`. May be used by Relay 1. */
  petEdge?: Maybe<PetsEdge>;
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>;
  /** Reads a single `User` that is related to this `Pet`. */
  userByUserId?: Maybe<User>;
};

/** The output of our delete `Pet` mutation. */
export type DeletePetPayloadPetEdgeArgs = {
  orderBy?: InputMaybe<Array<PetsOrderBy>>;
};

/** All input for the `deleteRecordById` mutation. */
export type DeleteRecordByIdInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  id: Scalars['UUID']['input'];
};

/** All input for the `deleteRecord` mutation. */
export type DeleteRecordInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  /** The globally unique `ID` which will identify a single `Record` to be deleted. */
  nodeId: Scalars['ID']['input'];
};

/** The output of our delete `Record` mutation. */
export type DeleteRecordPayload = {
  __typename?: 'DeleteRecordPayload';
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId?: Maybe<Scalars['String']['output']>;
  deletedRecordId?: Maybe<Scalars['ID']['output']>;
  /** Reads a single `Pet` that is related to this `Record`. */
  petByPetId?: Maybe<Pet>;
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>;
  /** The `Record` that was deleted by this mutation. */
  record?: Maybe<Record>;
  /** An edge for our `Record`. May be used by Relay 1. */
  recordEdge?: Maybe<RecordsEdge>;
  /** Reads a single `RecordType` that is related to this `Record`. */
  recordTypeByRecordType?: Maybe<RecordType>;
  /** Reads a single `User` that is related to this `Record`. */
  userByUserId?: Maybe<User>;
};

/** The output of our delete `Record` mutation. */
export type DeleteRecordPayloadRecordEdgeArgs = {
  orderBy?: InputMaybe<Array<RecordsOrderBy>>;
};

/** All input for the `deleteRecordTypeById` mutation. */
export type DeleteRecordTypeByIdInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  id: Scalars['UUID']['input'];
};

/** All input for the `deleteRecordType` mutation. */
export type DeleteRecordTypeInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  /** The globally unique `ID` which will identify a single `RecordType` to be deleted. */
  nodeId: Scalars['ID']['input'];
};

/** The output of our delete `RecordType` mutation. */
export type DeleteRecordTypePayload = {
  __typename?: 'DeleteRecordTypePayload';
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId?: Maybe<Scalars['String']['output']>;
  deletedRecordTypeId?: Maybe<Scalars['ID']['output']>;
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>;
  /** The `RecordType` that was deleted by this mutation. */
  recordType?: Maybe<RecordType>;
  /** An edge for our `RecordType`. May be used by Relay 1. */
  recordTypeEdge?: Maybe<RecordTypesEdge>;
};

/** The output of our delete `RecordType` mutation. */
export type DeleteRecordTypePayloadRecordTypeEdgeArgs = {
  orderBy?: InputMaybe<Array<RecordTypesOrderBy>>;
};

/** All input for the `deleteUserByEmail` mutation. */
export type DeleteUserByEmailInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  email: Scalars['String']['input'];
};

/** All input for the `deleteUserById` mutation. */
export type DeleteUserByIdInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  id: Scalars['UUID']['input'];
};

/** All input for the `deleteUser` mutation. */
export type DeleteUserInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  /** The globally unique `ID` which will identify a single `User` to be deleted. */
  nodeId: Scalars['ID']['input'];
};

/** The output of our delete `User` mutation. */
export type DeleteUserPayload = {
  __typename?: 'DeleteUserPayload';
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId?: Maybe<Scalars['String']['output']>;
  deletedUserId?: Maybe<Scalars['ID']['output']>;
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>;
  /** The `User` that was deleted by this mutation. */
  user?: Maybe<User>;
  /** An edge for our `User`. May be used by Relay 1. */
  userEdge?: Maybe<UsersEdge>;
};

/** The output of our delete `User` mutation. */
export type DeleteUserPayloadUserEdgeArgs = {
  orderBy?: InputMaybe<Array<UsersOrderBy>>;
};

/** All input for the `deleteVaccineRecordById` mutation. */
export type DeleteVaccineRecordByIdInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  id: Scalars['UUID']['input'];
};

/** All input for the `deleteVaccineRecord` mutation. */
export type DeleteVaccineRecordInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  /** The globally unique `ID` which will identify a single `VaccineRecord` to be deleted. */
  nodeId: Scalars['ID']['input'];
};

/** The output of our delete `VaccineRecord` mutation. */
export type DeleteVaccineRecordPayload = {
  __typename?: 'DeleteVaccineRecordPayload';
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId?: Maybe<Scalars['String']['output']>;
  deletedVaccineRecordId?: Maybe<Scalars['ID']['output']>;
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>;
  /** Reads a single `Record` that is related to this `VaccineRecord`. */
  recordByRecordId?: Maybe<Record>;
  /** The `VaccineRecord` that was deleted by this mutation. */
  vaccineRecord?: Maybe<VaccineRecord>;
  /** An edge for our `VaccineRecord`. May be used by Relay 1. */
  vaccineRecordEdge?: Maybe<VaccineRecordsEdge>;
};

/** The output of our delete `VaccineRecord` mutation. */
export type DeleteVaccineRecordPayloadVaccineRecordEdgeArgs = {
  orderBy?: InputMaybe<Array<VaccineRecordsOrderBy>>;
};

/** All input for the `deleteVisitRecordById` mutation. */
export type DeleteVisitRecordByIdInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  id: Scalars['UUID']['input'];
};

/** All input for the `deleteVisitRecord` mutation. */
export type DeleteVisitRecordInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  /** The globally unique `ID` which will identify a single `VisitRecord` to be deleted. */
  nodeId: Scalars['ID']['input'];
};

/** The output of our delete `VisitRecord` mutation. */
export type DeleteVisitRecordPayload = {
  __typename?: 'DeleteVisitRecordPayload';
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId?: Maybe<Scalars['String']['output']>;
  deletedVisitRecordId?: Maybe<Scalars['ID']['output']>;
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>;
  /** Reads a single `Record` that is related to this `VisitRecord`. */
  recordByRecordId?: Maybe<Record>;
  /** The `VisitRecord` that was deleted by this mutation. */
  visitRecord?: Maybe<VisitRecord>;
  /** An edge for our `VisitRecord`. May be used by Relay 1. */
  visitRecordEdge?: Maybe<VisitRecordsEdge>;
};

/** The output of our delete `VisitRecord` mutation. */
export type DeleteVisitRecordPayloadVisitRecordEdgeArgs = {
  orderBy?: InputMaybe<Array<VisitRecordsOrderBy>>;
};

/** The root mutation type which contains root level fields which mutate data. */
export type Mutation = {
  __typename?: 'Mutation';
  /** Creates a single `Admin`. */
  createAdmin?: Maybe<CreateAdminPayload>;
  /** Creates a single `AllergyRecord`. */
  createAllergyRecord?: Maybe<CreateAllergyRecordPayload>;
  /** Creates a single `Animal`. */
  createAnimal?: Maybe<CreateAnimalPayload>;
  /** Creates a single `Pet`. */
  createPet?: Maybe<CreatePetPayload>;
  /** Creates a single `Record`. */
  createRecord?: Maybe<CreateRecordPayload>;
  /** Creates a single `RecordType`. */
  createRecordType?: Maybe<CreateRecordTypePayload>;
  /** Creates a single `User`. */
  createUser?: Maybe<CreateUserPayload>;
  /** Creates a single `VaccineRecord`. */
  createVaccineRecord?: Maybe<CreateVaccineRecordPayload>;
  /** Creates a single `VisitRecord`. */
  createVisitRecord?: Maybe<CreateVisitRecordPayload>;
  /** Deletes a single `Admin` using its globally unique id. */
  deleteAdmin?: Maybe<DeleteAdminPayload>;
  /** Deletes a single `Admin` using a unique key. */
  deleteAdminById?: Maybe<DeleteAdminPayload>;
  /** Deletes a single `Admin` using a unique key. */
  deleteAdminByUserId?: Maybe<DeleteAdminPayload>;
  /** Deletes a single `AllergyRecord` using its globally unique id. */
  deleteAllergyRecord?: Maybe<DeleteAllergyRecordPayload>;
  /** Deletes a single `AllergyRecord` using a unique key. */
  deleteAllergyRecordById?: Maybe<DeleteAllergyRecordPayload>;
  /** Deletes a single `Animal` using its globally unique id. */
  deleteAnimal?: Maybe<DeleteAnimalPayload>;
  /** Deletes a single `Animal` using a unique key. */
  deleteAnimalById?: Maybe<DeleteAnimalPayload>;
  /** Deletes a single `Pet` using its globally unique id. */
  deletePet?: Maybe<DeletePetPayload>;
  /** Deletes a single `Pet` using a unique key. */
  deletePetById?: Maybe<DeletePetPayload>;
  /** Deletes a single `Record` using its globally unique id. */
  deleteRecord?: Maybe<DeleteRecordPayload>;
  /** Deletes a single `Record` using a unique key. */
  deleteRecordById?: Maybe<DeleteRecordPayload>;
  /** Deletes a single `RecordType` using its globally unique id. */
  deleteRecordType?: Maybe<DeleteRecordTypePayload>;
  /** Deletes a single `RecordType` using a unique key. */
  deleteRecordTypeById?: Maybe<DeleteRecordTypePayload>;
  /** Deletes a single `User` using its globally unique id. */
  deleteUser?: Maybe<DeleteUserPayload>;
  /** Deletes a single `User` using a unique key. */
  deleteUserByEmail?: Maybe<DeleteUserPayload>;
  /** Deletes a single `User` using a unique key. */
  deleteUserById?: Maybe<DeleteUserPayload>;
  /** Deletes a single `VaccineRecord` using its globally unique id. */
  deleteVaccineRecord?: Maybe<DeleteVaccineRecordPayload>;
  /** Deletes a single `VaccineRecord` using a unique key. */
  deleteVaccineRecordById?: Maybe<DeleteVaccineRecordPayload>;
  /** Deletes a single `VisitRecord` using its globally unique id. */
  deleteVisitRecord?: Maybe<DeleteVisitRecordPayload>;
  /** Deletes a single `VisitRecord` using a unique key. */
  deleteVisitRecordById?: Maybe<DeleteVisitRecordPayload>;
  signin?: Maybe<SigninPayload>;
  signup?: Maybe<SignupPayload>;
  /** Updates a single `Admin` using its globally unique id and a patch. */
  updateAdmin?: Maybe<UpdateAdminPayload>;
  /** Updates a single `Admin` using a unique key and a patch. */
  updateAdminById?: Maybe<UpdateAdminPayload>;
  /** Updates a single `Admin` using a unique key and a patch. */
  updateAdminByUserId?: Maybe<UpdateAdminPayload>;
  /** Updates a single `AllergyRecord` using its globally unique id and a patch. */
  updateAllergyRecord?: Maybe<UpdateAllergyRecordPayload>;
  /** Updates a single `AllergyRecord` using a unique key and a patch. */
  updateAllergyRecordById?: Maybe<UpdateAllergyRecordPayload>;
  /** Updates a single `Animal` using its globally unique id and a patch. */
  updateAnimal?: Maybe<UpdateAnimalPayload>;
  /** Updates a single `Animal` using a unique key and a patch. */
  updateAnimalById?: Maybe<UpdateAnimalPayload>;
  /** Updates a single `Pet` using its globally unique id and a patch. */
  updatePet?: Maybe<UpdatePetPayload>;
  /** Updates a single `Pet` using a unique key and a patch. */
  updatePetById?: Maybe<UpdatePetPayload>;
  /** Updates a single `Record` using its globally unique id and a patch. */
  updateRecord?: Maybe<UpdateRecordPayload>;
  /** Updates a single `Record` using a unique key and a patch. */
  updateRecordById?: Maybe<UpdateRecordPayload>;
  /** Updates a single `RecordType` using its globally unique id and a patch. */
  updateRecordType?: Maybe<UpdateRecordTypePayload>;
  /** Updates a single `RecordType` using a unique key and a patch. */
  updateRecordTypeById?: Maybe<UpdateRecordTypePayload>;
  /** Updates a single `User` using its globally unique id and a patch. */
  updateUser?: Maybe<UpdateUserPayload>;
  /** Updates a single `User` using a unique key and a patch. */
  updateUserByEmail?: Maybe<UpdateUserPayload>;
  /** Updates a single `User` using a unique key and a patch. */
  updateUserById?: Maybe<UpdateUserPayload>;
  /** Updates a single `VaccineRecord` using its globally unique id and a patch. */
  updateVaccineRecord?: Maybe<UpdateVaccineRecordPayload>;
  /** Updates a single `VaccineRecord` using a unique key and a patch. */
  updateVaccineRecordById?: Maybe<UpdateVaccineRecordPayload>;
  /** Updates a single `VisitRecord` using its globally unique id and a patch. */
  updateVisitRecord?: Maybe<UpdateVisitRecordPayload>;
  /** Updates a single `VisitRecord` using a unique key and a patch. */
  updateVisitRecordById?: Maybe<UpdateVisitRecordPayload>;
};

/** The root mutation type which contains root level fields which mutate data. */
export type MutationCreateAdminArgs = {
  input: CreateAdminInput;
};

/** The root mutation type which contains root level fields which mutate data. */
export type MutationCreateAllergyRecordArgs = {
  input: CreateAllergyRecordInput;
};

/** The root mutation type which contains root level fields which mutate data. */
export type MutationCreateAnimalArgs = {
  input: CreateAnimalInput;
};

/** The root mutation type which contains root level fields which mutate data. */
export type MutationCreatePetArgs = {
  input: CreatePetInput;
};

/** The root mutation type which contains root level fields which mutate data. */
export type MutationCreateRecordArgs = {
  input: CreateRecordInput;
};

/** The root mutation type which contains root level fields which mutate data. */
export type MutationCreateRecordTypeArgs = {
  input: CreateRecordTypeInput;
};

/** The root mutation type which contains root level fields which mutate data. */
export type MutationCreateUserArgs = {
  input: CreateUserInput;
};

/** The root mutation type which contains root level fields which mutate data. */
export type MutationCreateVaccineRecordArgs = {
  input: CreateVaccineRecordInput;
};

/** The root mutation type which contains root level fields which mutate data. */
export type MutationCreateVisitRecordArgs = {
  input: CreateVisitRecordInput;
};

/** The root mutation type which contains root level fields which mutate data. */
export type MutationDeleteAdminArgs = {
  input: DeleteAdminInput;
};

/** The root mutation type which contains root level fields which mutate data. */
export type MutationDeleteAdminByIdArgs = {
  input: DeleteAdminByIdInput;
};

/** The root mutation type which contains root level fields which mutate data. */
export type MutationDeleteAdminByUserIdArgs = {
  input: DeleteAdminByUserIdInput;
};

/** The root mutation type which contains root level fields which mutate data. */
export type MutationDeleteAllergyRecordArgs = {
  input: DeleteAllergyRecordInput;
};

/** The root mutation type which contains root level fields which mutate data. */
export type MutationDeleteAllergyRecordByIdArgs = {
  input: DeleteAllergyRecordByIdInput;
};

/** The root mutation type which contains root level fields which mutate data. */
export type MutationDeleteAnimalArgs = {
  input: DeleteAnimalInput;
};

/** The root mutation type which contains root level fields which mutate data. */
export type MutationDeleteAnimalByIdArgs = {
  input: DeleteAnimalByIdInput;
};

/** The root mutation type which contains root level fields which mutate data. */
export type MutationDeletePetArgs = {
  input: DeletePetInput;
};

/** The root mutation type which contains root level fields which mutate data. */
export type MutationDeletePetByIdArgs = {
  input: DeletePetByIdInput;
};

/** The root mutation type which contains root level fields which mutate data. */
export type MutationDeleteRecordArgs = {
  input: DeleteRecordInput;
};

/** The root mutation type which contains root level fields which mutate data. */
export type MutationDeleteRecordByIdArgs = {
  input: DeleteRecordByIdInput;
};

/** The root mutation type which contains root level fields which mutate data. */
export type MutationDeleteRecordTypeArgs = {
  input: DeleteRecordTypeInput;
};

/** The root mutation type which contains root level fields which mutate data. */
export type MutationDeleteRecordTypeByIdArgs = {
  input: DeleteRecordTypeByIdInput;
};

/** The root mutation type which contains root level fields which mutate data. */
export type MutationDeleteUserArgs = {
  input: DeleteUserInput;
};

/** The root mutation type which contains root level fields which mutate data. */
export type MutationDeleteUserByEmailArgs = {
  input: DeleteUserByEmailInput;
};

/** The root mutation type which contains root level fields which mutate data. */
export type MutationDeleteUserByIdArgs = {
  input: DeleteUserByIdInput;
};

/** The root mutation type which contains root level fields which mutate data. */
export type MutationDeleteVaccineRecordArgs = {
  input: DeleteVaccineRecordInput;
};

/** The root mutation type which contains root level fields which mutate data. */
export type MutationDeleteVaccineRecordByIdArgs = {
  input: DeleteVaccineRecordByIdInput;
};

/** The root mutation type which contains root level fields which mutate data. */
export type MutationDeleteVisitRecordArgs = {
  input: DeleteVisitRecordInput;
};

/** The root mutation type which contains root level fields which mutate data. */
export type MutationDeleteVisitRecordByIdArgs = {
  input: DeleteVisitRecordByIdInput;
};

/** The root mutation type which contains root level fields which mutate data. */
export type MutationSigninArgs = {
  input: SigninInput;
};

/** The root mutation type which contains root level fields which mutate data. */
export type MutationSignupArgs = {
  input: SignupInput;
};

/** The root mutation type which contains root level fields which mutate data. */
export type MutationUpdateAdminArgs = {
  input: UpdateAdminInput;
};

/** The root mutation type which contains root level fields which mutate data. */
export type MutationUpdateAdminByIdArgs = {
  input: UpdateAdminByIdInput;
};

/** The root mutation type which contains root level fields which mutate data. */
export type MutationUpdateAdminByUserIdArgs = {
  input: UpdateAdminByUserIdInput;
};

/** The root mutation type which contains root level fields which mutate data. */
export type MutationUpdateAllergyRecordArgs = {
  input: UpdateAllergyRecordInput;
};

/** The root mutation type which contains root level fields which mutate data. */
export type MutationUpdateAllergyRecordByIdArgs = {
  input: UpdateAllergyRecordByIdInput;
};

/** The root mutation type which contains root level fields which mutate data. */
export type MutationUpdateAnimalArgs = {
  input: UpdateAnimalInput;
};

/** The root mutation type which contains root level fields which mutate data. */
export type MutationUpdateAnimalByIdArgs = {
  input: UpdateAnimalByIdInput;
};

/** The root mutation type which contains root level fields which mutate data. */
export type MutationUpdatePetArgs = {
  input: UpdatePetInput;
};

/** The root mutation type which contains root level fields which mutate data. */
export type MutationUpdatePetByIdArgs = {
  input: UpdatePetByIdInput;
};

/** The root mutation type which contains root level fields which mutate data. */
export type MutationUpdateRecordArgs = {
  input: UpdateRecordInput;
};

/** The root mutation type which contains root level fields which mutate data. */
export type MutationUpdateRecordByIdArgs = {
  input: UpdateRecordByIdInput;
};

/** The root mutation type which contains root level fields which mutate data. */
export type MutationUpdateRecordTypeArgs = {
  input: UpdateRecordTypeInput;
};

/** The root mutation type which contains root level fields which mutate data. */
export type MutationUpdateRecordTypeByIdArgs = {
  input: UpdateRecordTypeByIdInput;
};

/** The root mutation type which contains root level fields which mutate data. */
export type MutationUpdateUserArgs = {
  input: UpdateUserInput;
};

/** The root mutation type which contains root level fields which mutate data. */
export type MutationUpdateUserByEmailArgs = {
  input: UpdateUserByEmailInput;
};

/** The root mutation type which contains root level fields which mutate data. */
export type MutationUpdateUserByIdArgs = {
  input: UpdateUserByIdInput;
};

/** The root mutation type which contains root level fields which mutate data. */
export type MutationUpdateVaccineRecordArgs = {
  input: UpdateVaccineRecordInput;
};

/** The root mutation type which contains root level fields which mutate data. */
export type MutationUpdateVaccineRecordByIdArgs = {
  input: UpdateVaccineRecordByIdInput;
};

/** The root mutation type which contains root level fields which mutate data. */
export type MutationUpdateVisitRecordArgs = {
  input: UpdateVisitRecordInput;
};

/** The root mutation type which contains root level fields which mutate data. */
export type MutationUpdateVisitRecordByIdArgs = {
  input: UpdateVisitRecordByIdInput;
};

/** An object with a globally unique `ID`. */
export type Node = {
  /** A globally unique identifier. Can be used in various places throughout the system to identify this single value. */
  nodeId: Scalars['ID']['output'];
};

/** Information about pagination in a connection. */
export type PageInfo = {
  __typename?: 'PageInfo';
  /** When paginating forwards, the cursor to continue. */
  endCursor?: Maybe<Scalars['Cursor']['output']>;
  /** When paginating forwards, are there more items? */
  hasNextPage: Scalars['Boolean']['output'];
  /** When paginating backwards, are there more items? */
  hasPreviousPage: Scalars['Boolean']['output'];
  /** When paginating backwards, the cursor to continue. */
  startCursor?: Maybe<Scalars['Cursor']['output']>;
};

export type Pet = Node & {
  __typename?: 'Pet';
  /** Reads a single `Animal` that is related to this `Pet`. */
  animalByAnimalId?: Maybe<Animal>;
  animalId: Scalars['UUID']['output'];
  createdAt?: Maybe<Scalars['Datetime']['output']>;
  dob: Scalars['Datetime']['output'];
  id: Scalars['UUID']['output'];
  name: Scalars['String']['output'];
  /** A globally unique identifier. Can be used in various places throughout the system to identify this single value. */
  nodeId: Scalars['ID']['output'];
  /** Reads and enables pagination through a set of `Record`. */
  recordsByPetId: RecordsConnection;
  /** Reads a single `User` that is related to this `Pet`. */
  userByUserId?: Maybe<User>;
  userId: Scalars['UUID']['output'];
};

export type PetRecordsByPetIdArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  condition?: InputMaybe<RecordCondition>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<RecordsOrderBy>>;
};

/** A condition to be used against `Pet` object types. All fields are tested for equality and combined with a logical ‘and.’ */
export type PetCondition = {
  /** Checks for equality with the object’s `animalId` field. */
  animalId?: InputMaybe<Scalars['UUID']['input']>;
  /** Checks for equality with the object’s `createdAt` field. */
  createdAt?: InputMaybe<Scalars['Datetime']['input']>;
  /** Checks for equality with the object’s `dob` field. */
  dob?: InputMaybe<Scalars['Datetime']['input']>;
  /** Checks for equality with the object’s `id` field. */
  id?: InputMaybe<Scalars['UUID']['input']>;
  /** Checks for equality with the object’s `name` field. */
  name?: InputMaybe<Scalars['String']['input']>;
  /** Checks for equality with the object’s `userId` field. */
  userId?: InputMaybe<Scalars['UUID']['input']>;
};

/** An input for mutations affecting `Pet` */
export type PetInput = {
  animalId: Scalars['UUID']['input'];
  createdAt?: InputMaybe<Scalars['Datetime']['input']>;
  dob: Scalars['Datetime']['input'];
  id?: InputMaybe<Scalars['UUID']['input']>;
  name: Scalars['String']['input'];
  userId: Scalars['UUID']['input'];
};

/** Represents an update to a `Pet`. Fields that are set will be updated. */
export type PetPatch = {
  animalId?: InputMaybe<Scalars['UUID']['input']>;
  createdAt?: InputMaybe<Scalars['Datetime']['input']>;
  dob?: InputMaybe<Scalars['Datetime']['input']>;
  id?: InputMaybe<Scalars['UUID']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  userId?: InputMaybe<Scalars['UUID']['input']>;
};

/** A connection to a list of `Pet` values. */
export type PetsConnection = {
  __typename?: 'PetsConnection';
  /** A list of edges which contains the `Pet` and cursor to aid in pagination. */
  edges: Array<PetsEdge>;
  /** A list of `Pet` objects. */
  nodes: Array<Maybe<Pet>>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  /** The count of *all* `Pet` you could get from the connection. */
  totalCount: Scalars['Int']['output'];
};

/** A `Pet` edge in the connection. */
export type PetsEdge = {
  __typename?: 'PetsEdge';
  /** A cursor for use in pagination. */
  cursor?: Maybe<Scalars['Cursor']['output']>;
  /** The `Pet` at the end of the edge. */
  node?: Maybe<Pet>;
};

/** Methods to use when ordering `Pet`. */
export enum PetsOrderBy {
  AnimalIdAsc = 'ANIMAL_ID_ASC',
  AnimalIdDesc = 'ANIMAL_ID_DESC',
  CreatedAtAsc = 'CREATED_AT_ASC',
  CreatedAtDesc = 'CREATED_AT_DESC',
  DobAsc = 'DOB_ASC',
  DobDesc = 'DOB_DESC',
  IdAsc = 'ID_ASC',
  IdDesc = 'ID_DESC',
  NameAsc = 'NAME_ASC',
  NameDesc = 'NAME_DESC',
  Natural = 'NATURAL',
  PrimaryKeyAsc = 'PRIMARY_KEY_ASC',
  PrimaryKeyDesc = 'PRIMARY_KEY_DESC',
  UserIdAsc = 'USER_ID_ASC',
  UserIdDesc = 'USER_ID_DESC',
}

/** The root query type which gives access points into the data universe. */
export type Query = Node & {
  __typename?: 'Query';
  /** Reads a single `Admin` using its globally unique `ID`. */
  admin?: Maybe<Admin>;
  adminById?: Maybe<Admin>;
  adminByUserId?: Maybe<Admin>;
  /** Reads and enables pagination through a set of `Admin`. */
  allAdmins?: Maybe<AdminsConnection>;
  /** Reads and enables pagination through a set of `AllergyRecord`. */
  allAllergyRecords?: Maybe<AllergyRecordsConnection>;
  /** Reads and enables pagination through a set of `Animal`. */
  allAnimals?: Maybe<AnimalsConnection>;
  /** Reads and enables pagination through a set of `Pet`. */
  allPets?: Maybe<PetsConnection>;
  /** Reads and enables pagination through a set of `RecordType`. */
  allRecordTypes?: Maybe<RecordTypesConnection>;
  /** Reads and enables pagination through a set of `Record`. */
  allRecords?: Maybe<RecordsConnection>;
  /** Reads and enables pagination through a set of `User`. */
  allUsers?: Maybe<UsersConnection>;
  /** Reads and enables pagination through a set of `VaccineRecord`. */
  allVaccineRecords?: Maybe<VaccineRecordsConnection>;
  /** Reads and enables pagination through a set of `VisitRecord`. */
  allVisitRecords?: Maybe<VisitRecordsConnection>;
  /** Reads a single `AllergyRecord` using its globally unique `ID`. */
  allergyRecord?: Maybe<AllergyRecord>;
  allergyRecordById?: Maybe<AllergyRecord>;
  /** Reads a single `Animal` using its globally unique `ID`. */
  animal?: Maybe<Animal>;
  animalById?: Maybe<Animal>;
  /** Fetches an object given its globally unique `ID`. */
  node?: Maybe<Node>;
  /** The root query type must be a `Node` to work well with Relay 1 mutations. This just resolves to `query`. */
  nodeId: Scalars['ID']['output'];
  /** Reads a single `Pet` using its globally unique `ID`. */
  pet?: Maybe<Pet>;
  petById?: Maybe<Pet>;
  /**
   * Exposes the root query type nested one level down. This is helpful for Relay 1
   * which can only query top level fields if they are in a particular form.
   */
  query: Query;
  /** Reads a single `Record` using its globally unique `ID`. */
  record?: Maybe<Record>;
  recordById?: Maybe<Record>;
  /** Reads a single `RecordType` using its globally unique `ID`. */
  recordType?: Maybe<RecordType>;
  recordTypeById?: Maybe<RecordType>;
  /** Reads a single `User` using its globally unique `ID`. */
  user?: Maybe<User>;
  userByEmail?: Maybe<User>;
  userById?: Maybe<User>;
  /** Reads a single `VaccineRecord` using its globally unique `ID`. */
  vaccineRecord?: Maybe<VaccineRecord>;
  vaccineRecordById?: Maybe<VaccineRecord>;
  /** Reads a single `VisitRecord` using its globally unique `ID`. */
  visitRecord?: Maybe<VisitRecord>;
  visitRecordById?: Maybe<VisitRecord>;
};

/** The root query type which gives access points into the data universe. */
export type QueryAdminArgs = {
  nodeId: Scalars['ID']['input'];
};

/** The root query type which gives access points into the data universe. */
export type QueryAdminByIdArgs = {
  id: Scalars['UUID']['input'];
};

/** The root query type which gives access points into the data universe. */
export type QueryAdminByUserIdArgs = {
  userId: Scalars['UUID']['input'];
};

/** The root query type which gives access points into the data universe. */
export type QueryAllAdminsArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  condition?: InputMaybe<AdminCondition>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<AdminsOrderBy>>;
};

/** The root query type which gives access points into the data universe. */
export type QueryAllAllergyRecordsArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  condition?: InputMaybe<AllergyRecordCondition>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<AllergyRecordsOrderBy>>;
};

/** The root query type which gives access points into the data universe. */
export type QueryAllAnimalsArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  condition?: InputMaybe<AnimalCondition>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<AnimalsOrderBy>>;
};

/** The root query type which gives access points into the data universe. */
export type QueryAllPetsArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  condition?: InputMaybe<PetCondition>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<PetsOrderBy>>;
};

/** The root query type which gives access points into the data universe. */
export type QueryAllRecordTypesArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  condition?: InputMaybe<RecordTypeCondition>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<RecordTypesOrderBy>>;
};

/** The root query type which gives access points into the data universe. */
export type QueryAllRecordsArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  condition?: InputMaybe<RecordCondition>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<RecordsOrderBy>>;
};

/** The root query type which gives access points into the data universe. */
export type QueryAllUsersArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  condition?: InputMaybe<UserCondition>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<UsersOrderBy>>;
};

/** The root query type which gives access points into the data universe. */
export type QueryAllVaccineRecordsArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  condition?: InputMaybe<VaccineRecordCondition>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<VaccineRecordsOrderBy>>;
};

/** The root query type which gives access points into the data universe. */
export type QueryAllVisitRecordsArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  condition?: InputMaybe<VisitRecordCondition>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<VisitRecordsOrderBy>>;
};

/** The root query type which gives access points into the data universe. */
export type QueryAllergyRecordArgs = {
  nodeId: Scalars['ID']['input'];
};

/** The root query type which gives access points into the data universe. */
export type QueryAllergyRecordByIdArgs = {
  id: Scalars['UUID']['input'];
};

/** The root query type which gives access points into the data universe. */
export type QueryAnimalArgs = {
  nodeId: Scalars['ID']['input'];
};

/** The root query type which gives access points into the data universe. */
export type QueryAnimalByIdArgs = {
  id: Scalars['UUID']['input'];
};

/** The root query type which gives access points into the data universe. */
export type QueryNodeArgs = {
  nodeId: Scalars['ID']['input'];
};

/** The root query type which gives access points into the data universe. */
export type QueryPetArgs = {
  nodeId: Scalars['ID']['input'];
};

/** The root query type which gives access points into the data universe. */
export type QueryPetByIdArgs = {
  id: Scalars['UUID']['input'];
};

/** The root query type which gives access points into the data universe. */
export type QueryRecordArgs = {
  nodeId: Scalars['ID']['input'];
};

/** The root query type which gives access points into the data universe. */
export type QueryRecordByIdArgs = {
  id: Scalars['UUID']['input'];
};

/** The root query type which gives access points into the data universe. */
export type QueryRecordTypeArgs = {
  nodeId: Scalars['ID']['input'];
};

/** The root query type which gives access points into the data universe. */
export type QueryRecordTypeByIdArgs = {
  id: Scalars['UUID']['input'];
};

/** The root query type which gives access points into the data universe. */
export type QueryUserArgs = {
  nodeId: Scalars['ID']['input'];
};

/** The root query type which gives access points into the data universe. */
export type QueryUserByEmailArgs = {
  email: Scalars['String']['input'];
};

/** The root query type which gives access points into the data universe. */
export type QueryUserByIdArgs = {
  id: Scalars['UUID']['input'];
};

/** The root query type which gives access points into the data universe. */
export type QueryVaccineRecordArgs = {
  nodeId: Scalars['ID']['input'];
};

/** The root query type which gives access points into the data universe. */
export type QueryVaccineRecordByIdArgs = {
  id: Scalars['UUID']['input'];
};

/** The root query type which gives access points into the data universe. */
export type QueryVisitRecordArgs = {
  nodeId: Scalars['ID']['input'];
};

/** The root query type which gives access points into the data universe. */
export type QueryVisitRecordByIdArgs = {
  id: Scalars['UUID']['input'];
};

export type Record = Node & {
  __typename?: 'Record';
  /** Reads and enables pagination through a set of `AllergyRecord`. */
  allergyRecordsByRecordId: AllergyRecordsConnection;
  createdAt?: Maybe<Scalars['Datetime']['output']>;
  id: Scalars['UUID']['output'];
  /** A globally unique identifier. Can be used in various places throughout the system to identify this single value. */
  nodeId: Scalars['ID']['output'];
  /** Reads a single `Pet` that is related to this `Record`. */
  petByPetId?: Maybe<Pet>;
  petId: Scalars['UUID']['output'];
  recordType: Scalars['UUID']['output'];
  /** Reads a single `RecordType` that is related to this `Record`. */
  recordTypeByRecordType?: Maybe<RecordType>;
  /** Reads a single `User` that is related to this `Record`. */
  userByUserId?: Maybe<User>;
  userId: Scalars['UUID']['output'];
  /** Reads and enables pagination through a set of `VaccineRecord`. */
  vaccineRecordsByRecordId: VaccineRecordsConnection;
  /** Reads and enables pagination through a set of `VisitRecord`. */
  visitRecordsByRecordId: VisitRecordsConnection;
};

export type RecordAllergyRecordsByRecordIdArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  condition?: InputMaybe<AllergyRecordCondition>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<AllergyRecordsOrderBy>>;
};

export type RecordVaccineRecordsByRecordIdArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  condition?: InputMaybe<VaccineRecordCondition>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<VaccineRecordsOrderBy>>;
};

export type RecordVisitRecordsByRecordIdArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  condition?: InputMaybe<VisitRecordCondition>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<VisitRecordsOrderBy>>;
};

/** A condition to be used against `Record` object types. All fields are tested for equality and combined with a logical ‘and.’ */
export type RecordCondition = {
  /** Checks for equality with the object’s `createdAt` field. */
  createdAt?: InputMaybe<Scalars['Datetime']['input']>;
  /** Checks for equality with the object’s `id` field. */
  id?: InputMaybe<Scalars['UUID']['input']>;
  /** Checks for equality with the object’s `petId` field. */
  petId?: InputMaybe<Scalars['UUID']['input']>;
  /** Checks for equality with the object’s `recordType` field. */
  recordType?: InputMaybe<Scalars['UUID']['input']>;
  /** Checks for equality with the object’s `userId` field. */
  userId?: InputMaybe<Scalars['UUID']['input']>;
};

/** An input for mutations affecting `Record` */
export type RecordInput = {
  createdAt?: InputMaybe<Scalars['Datetime']['input']>;
  id?: InputMaybe<Scalars['UUID']['input']>;
  petId: Scalars['UUID']['input'];
  recordType: Scalars['UUID']['input'];
  userId: Scalars['UUID']['input'];
};

/** Represents an update to a `Record`. Fields that are set will be updated. */
export type RecordPatch = {
  createdAt?: InputMaybe<Scalars['Datetime']['input']>;
  id?: InputMaybe<Scalars['UUID']['input']>;
  petId?: InputMaybe<Scalars['UUID']['input']>;
  recordType?: InputMaybe<Scalars['UUID']['input']>;
  userId?: InputMaybe<Scalars['UUID']['input']>;
};

export type RecordType = Node & {
  __typename?: 'RecordType';
  id: Scalars['UUID']['output'];
  name: Scalars['String']['output'];
  /** A globally unique identifier. Can be used in various places throughout the system to identify this single value. */
  nodeId: Scalars['ID']['output'];
  /** Reads and enables pagination through a set of `Record`. */
  recordsByRecordType: RecordsConnection;
};

export type RecordTypeRecordsByRecordTypeArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  condition?: InputMaybe<RecordCondition>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<RecordsOrderBy>>;
};

/**
 * A condition to be used against `RecordType` object types. All fields are tested
 * for equality and combined with a logical ‘and.’
 */
export type RecordTypeCondition = {
  /** Checks for equality with the object’s `id` field. */
  id?: InputMaybe<Scalars['UUID']['input']>;
  /** Checks for equality with the object’s `name` field. */
  name?: InputMaybe<Scalars['String']['input']>;
};

/** An input for mutations affecting `RecordType` */
export type RecordTypeInput = {
  id?: InputMaybe<Scalars['UUID']['input']>;
  name: Scalars['String']['input'];
};

/** Represents an update to a `RecordType`. Fields that are set will be updated. */
export type RecordTypePatch = {
  id?: InputMaybe<Scalars['UUID']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
};

/** A connection to a list of `RecordType` values. */
export type RecordTypesConnection = {
  __typename?: 'RecordTypesConnection';
  /** A list of edges which contains the `RecordType` and cursor to aid in pagination. */
  edges: Array<RecordTypesEdge>;
  /** A list of `RecordType` objects. */
  nodes: Array<Maybe<RecordType>>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  /** The count of *all* `RecordType` you could get from the connection. */
  totalCount: Scalars['Int']['output'];
};

/** A `RecordType` edge in the connection. */
export type RecordTypesEdge = {
  __typename?: 'RecordTypesEdge';
  /** A cursor for use in pagination. */
  cursor?: Maybe<Scalars['Cursor']['output']>;
  /** The `RecordType` at the end of the edge. */
  node?: Maybe<RecordType>;
};

/** Methods to use when ordering `RecordType`. */
export enum RecordTypesOrderBy {
  IdAsc = 'ID_ASC',
  IdDesc = 'ID_DESC',
  NameAsc = 'NAME_ASC',
  NameDesc = 'NAME_DESC',
  Natural = 'NATURAL',
  PrimaryKeyAsc = 'PRIMARY_KEY_ASC',
  PrimaryKeyDesc = 'PRIMARY_KEY_DESC',
}

/** A connection to a list of `Record` values. */
export type RecordsConnection = {
  __typename?: 'RecordsConnection';
  /** A list of edges which contains the `Record` and cursor to aid in pagination. */
  edges: Array<RecordsEdge>;
  /** A list of `Record` objects. */
  nodes: Array<Maybe<Record>>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  /** The count of *all* `Record` you could get from the connection. */
  totalCount: Scalars['Int']['output'];
};

/** A `Record` edge in the connection. */
export type RecordsEdge = {
  __typename?: 'RecordsEdge';
  /** A cursor for use in pagination. */
  cursor?: Maybe<Scalars['Cursor']['output']>;
  /** The `Record` at the end of the edge. */
  node?: Maybe<Record>;
};

/** Methods to use when ordering `Record`. */
export enum RecordsOrderBy {
  CreatedAtAsc = 'CREATED_AT_ASC',
  CreatedAtDesc = 'CREATED_AT_DESC',
  IdAsc = 'ID_ASC',
  IdDesc = 'ID_DESC',
  Natural = 'NATURAL',
  PetIdAsc = 'PET_ID_ASC',
  PetIdDesc = 'PET_ID_DESC',
  PrimaryKeyAsc = 'PRIMARY_KEY_ASC',
  PrimaryKeyDesc = 'PRIMARY_KEY_DESC',
  RecordTypeAsc = 'RECORD_TYPE_ASC',
  RecordTypeDesc = 'RECORD_TYPE_DESC',
  UserIdAsc = 'USER_ID_ASC',
  UserIdDesc = 'USER_ID_DESC',
}

/** All input for the `signin` mutation. */
export type SigninInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  inputEmail?: InputMaybe<Scalars['String']['input']>;
  inputPassword?: InputMaybe<Scalars['String']['input']>;
};

/** The output of our `signin` mutation. */
export type SigninPayload = {
  __typename?: 'SigninPayload';
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId?: Maybe<Scalars['String']['output']>;
  jwtToken?: Maybe<Scalars['JwtToken']['output']>;
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>;
};

/** All input for the `signup` mutation. */
export type SignupInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  inputEmail?: InputMaybe<Scalars['String']['input']>;
  inputPassword?: InputMaybe<Scalars['String']['input']>;
};

/** The output of our `signup` mutation. */
export type SignupPayload = {
  __typename?: 'SignupPayload';
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId?: Maybe<Scalars['String']['output']>;
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>;
  signupResult?: Maybe<SignupResult>;
};

export type SignupResult = {
  __typename?: 'SignupResult';
  jwtToken?: Maybe<Scalars['JwtToken']['output']>;
  status?: Maybe<Scalars['String']['output']>;
};

/** All input for the `updateAdminById` mutation. */
export type UpdateAdminByIdInput = {
  /** An object where the defined keys will be set on the `Admin` being updated. */
  adminPatch: AdminPatch;
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  id: Scalars['UUID']['input'];
};

/** All input for the `updateAdminByUserId` mutation. */
export type UpdateAdminByUserIdInput = {
  /** An object where the defined keys will be set on the `Admin` being updated. */
  adminPatch: AdminPatch;
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  userId: Scalars['UUID']['input'];
};

/** All input for the `updateAdmin` mutation. */
export type UpdateAdminInput = {
  /** An object where the defined keys will be set on the `Admin` being updated. */
  adminPatch: AdminPatch;
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  /** The globally unique `ID` which will identify a single `Admin` to be updated. */
  nodeId: Scalars['ID']['input'];
};

/** The output of our update `Admin` mutation. */
export type UpdateAdminPayload = {
  __typename?: 'UpdateAdminPayload';
  /** The `Admin` that was updated by this mutation. */
  admin?: Maybe<Admin>;
  /** An edge for our `Admin`. May be used by Relay 1. */
  adminEdge?: Maybe<AdminsEdge>;
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId?: Maybe<Scalars['String']['output']>;
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>;
  /** Reads a single `User` that is related to this `Admin`. */
  userByUserId?: Maybe<User>;
};

/** The output of our update `Admin` mutation. */
export type UpdateAdminPayloadAdminEdgeArgs = {
  orderBy?: InputMaybe<Array<AdminsOrderBy>>;
};

/** All input for the `updateAllergyRecordById` mutation. */
export type UpdateAllergyRecordByIdInput = {
  /** An object where the defined keys will be set on the `AllergyRecord` being updated. */
  allergyRecordPatch: AllergyRecordPatch;
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  id: Scalars['UUID']['input'];
};

/** All input for the `updateAllergyRecord` mutation. */
export type UpdateAllergyRecordInput = {
  /** An object where the defined keys will be set on the `AllergyRecord` being updated. */
  allergyRecordPatch: AllergyRecordPatch;
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  /** The globally unique `ID` which will identify a single `AllergyRecord` to be updated. */
  nodeId: Scalars['ID']['input'];
};

/** The output of our update `AllergyRecord` mutation. */
export type UpdateAllergyRecordPayload = {
  __typename?: 'UpdateAllergyRecordPayload';
  /** The `AllergyRecord` that was updated by this mutation. */
  allergyRecord?: Maybe<AllergyRecord>;
  /** An edge for our `AllergyRecord`. May be used by Relay 1. */
  allergyRecordEdge?: Maybe<AllergyRecordsEdge>;
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId?: Maybe<Scalars['String']['output']>;
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>;
  /** Reads a single `Record` that is related to this `AllergyRecord`. */
  recordByRecordId?: Maybe<Record>;
};

/** The output of our update `AllergyRecord` mutation. */
export type UpdateAllergyRecordPayloadAllergyRecordEdgeArgs = {
  orderBy?: InputMaybe<Array<AllergyRecordsOrderBy>>;
};

/** All input for the `updateAnimalById` mutation. */
export type UpdateAnimalByIdInput = {
  /** An object where the defined keys will be set on the `Animal` being updated. */
  animalPatch: AnimalPatch;
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  id: Scalars['UUID']['input'];
};

/** All input for the `updateAnimal` mutation. */
export type UpdateAnimalInput = {
  /** An object where the defined keys will be set on the `Animal` being updated. */
  animalPatch: AnimalPatch;
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  /** The globally unique `ID` which will identify a single `Animal` to be updated. */
  nodeId: Scalars['ID']['input'];
};

/** The output of our update `Animal` mutation. */
export type UpdateAnimalPayload = {
  __typename?: 'UpdateAnimalPayload';
  /** The `Animal` that was updated by this mutation. */
  animal?: Maybe<Animal>;
  /** An edge for our `Animal`. May be used by Relay 1. */
  animalEdge?: Maybe<AnimalsEdge>;
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId?: Maybe<Scalars['String']['output']>;
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>;
};

/** The output of our update `Animal` mutation. */
export type UpdateAnimalPayloadAnimalEdgeArgs = {
  orderBy?: InputMaybe<Array<AnimalsOrderBy>>;
};

/** All input for the `updatePetById` mutation. */
export type UpdatePetByIdInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  id: Scalars['UUID']['input'];
  /** An object where the defined keys will be set on the `Pet` being updated. */
  petPatch: PetPatch;
};

/** All input for the `updatePet` mutation. */
export type UpdatePetInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  /** The globally unique `ID` which will identify a single `Pet` to be updated. */
  nodeId: Scalars['ID']['input'];
  /** An object where the defined keys will be set on the `Pet` being updated. */
  petPatch: PetPatch;
};

/** The output of our update `Pet` mutation. */
export type UpdatePetPayload = {
  __typename?: 'UpdatePetPayload';
  /** Reads a single `Animal` that is related to this `Pet`. */
  animalByAnimalId?: Maybe<Animal>;
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId?: Maybe<Scalars['String']['output']>;
  /** The `Pet` that was updated by this mutation. */
  pet?: Maybe<Pet>;
  /** An edge for our `Pet`. May be used by Relay 1. */
  petEdge?: Maybe<PetsEdge>;
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>;
  /** Reads a single `User` that is related to this `Pet`. */
  userByUserId?: Maybe<User>;
};

/** The output of our update `Pet` mutation. */
export type UpdatePetPayloadPetEdgeArgs = {
  orderBy?: InputMaybe<Array<PetsOrderBy>>;
};

/** All input for the `updateRecordById` mutation. */
export type UpdateRecordByIdInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  id: Scalars['UUID']['input'];
  /** An object where the defined keys will be set on the `Record` being updated. */
  recordPatch: RecordPatch;
};

/** All input for the `updateRecord` mutation. */
export type UpdateRecordInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  /** The globally unique `ID` which will identify a single `Record` to be updated. */
  nodeId: Scalars['ID']['input'];
  /** An object where the defined keys will be set on the `Record` being updated. */
  recordPatch: RecordPatch;
};

/** The output of our update `Record` mutation. */
export type UpdateRecordPayload = {
  __typename?: 'UpdateRecordPayload';
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId?: Maybe<Scalars['String']['output']>;
  /** Reads a single `Pet` that is related to this `Record`. */
  petByPetId?: Maybe<Pet>;
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>;
  /** The `Record` that was updated by this mutation. */
  record?: Maybe<Record>;
  /** An edge for our `Record`. May be used by Relay 1. */
  recordEdge?: Maybe<RecordsEdge>;
  /** Reads a single `RecordType` that is related to this `Record`. */
  recordTypeByRecordType?: Maybe<RecordType>;
  /** Reads a single `User` that is related to this `Record`. */
  userByUserId?: Maybe<User>;
};

/** The output of our update `Record` mutation. */
export type UpdateRecordPayloadRecordEdgeArgs = {
  orderBy?: InputMaybe<Array<RecordsOrderBy>>;
};

/** All input for the `updateRecordTypeById` mutation. */
export type UpdateRecordTypeByIdInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  id: Scalars['UUID']['input'];
  /** An object where the defined keys will be set on the `RecordType` being updated. */
  recordTypePatch: RecordTypePatch;
};

/** All input for the `updateRecordType` mutation. */
export type UpdateRecordTypeInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  /** The globally unique `ID` which will identify a single `RecordType` to be updated. */
  nodeId: Scalars['ID']['input'];
  /** An object where the defined keys will be set on the `RecordType` being updated. */
  recordTypePatch: RecordTypePatch;
};

/** The output of our update `RecordType` mutation. */
export type UpdateRecordTypePayload = {
  __typename?: 'UpdateRecordTypePayload';
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId?: Maybe<Scalars['String']['output']>;
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>;
  /** The `RecordType` that was updated by this mutation. */
  recordType?: Maybe<RecordType>;
  /** An edge for our `RecordType`. May be used by Relay 1. */
  recordTypeEdge?: Maybe<RecordTypesEdge>;
};

/** The output of our update `RecordType` mutation. */
export type UpdateRecordTypePayloadRecordTypeEdgeArgs = {
  orderBy?: InputMaybe<Array<RecordTypesOrderBy>>;
};

/** All input for the `updateUserByEmail` mutation. */
export type UpdateUserByEmailInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  email: Scalars['String']['input'];
  /** An object where the defined keys will be set on the `User` being updated. */
  userPatch: UserPatch;
};

/** All input for the `updateUserById` mutation. */
export type UpdateUserByIdInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  id: Scalars['UUID']['input'];
  /** An object where the defined keys will be set on the `User` being updated. */
  userPatch: UserPatch;
};

/** All input for the `updateUser` mutation. */
export type UpdateUserInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  /** The globally unique `ID` which will identify a single `User` to be updated. */
  nodeId: Scalars['ID']['input'];
  /** An object where the defined keys will be set on the `User` being updated. */
  userPatch: UserPatch;
};

/** The output of our update `User` mutation. */
export type UpdateUserPayload = {
  __typename?: 'UpdateUserPayload';
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId?: Maybe<Scalars['String']['output']>;
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>;
  /** The `User` that was updated by this mutation. */
  user?: Maybe<User>;
  /** An edge for our `User`. May be used by Relay 1. */
  userEdge?: Maybe<UsersEdge>;
};

/** The output of our update `User` mutation. */
export type UpdateUserPayloadUserEdgeArgs = {
  orderBy?: InputMaybe<Array<UsersOrderBy>>;
};

/** All input for the `updateVaccineRecordById` mutation. */
export type UpdateVaccineRecordByIdInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  id: Scalars['UUID']['input'];
  /** An object where the defined keys will be set on the `VaccineRecord` being updated. */
  vaccineRecordPatch: VaccineRecordPatch;
};

/** All input for the `updateVaccineRecord` mutation. */
export type UpdateVaccineRecordInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  /** The globally unique `ID` which will identify a single `VaccineRecord` to be updated. */
  nodeId: Scalars['ID']['input'];
  /** An object where the defined keys will be set on the `VaccineRecord` being updated. */
  vaccineRecordPatch: VaccineRecordPatch;
};

/** The output of our update `VaccineRecord` mutation. */
export type UpdateVaccineRecordPayload = {
  __typename?: 'UpdateVaccineRecordPayload';
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId?: Maybe<Scalars['String']['output']>;
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>;
  /** Reads a single `Record` that is related to this `VaccineRecord`. */
  recordByRecordId?: Maybe<Record>;
  /** The `VaccineRecord` that was updated by this mutation. */
  vaccineRecord?: Maybe<VaccineRecord>;
  /** An edge for our `VaccineRecord`. May be used by Relay 1. */
  vaccineRecordEdge?: Maybe<VaccineRecordsEdge>;
};

/** The output of our update `VaccineRecord` mutation. */
export type UpdateVaccineRecordPayloadVaccineRecordEdgeArgs = {
  orderBy?: InputMaybe<Array<VaccineRecordsOrderBy>>;
};

/** All input for the `updateVisitRecordById` mutation. */
export type UpdateVisitRecordByIdInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  id: Scalars['UUID']['input'];
  /** An object where the defined keys will be set on the `VisitRecord` being updated. */
  visitRecordPatch: VisitRecordPatch;
};

/** All input for the `updateVisitRecord` mutation. */
export type UpdateVisitRecordInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  /** The globally unique `ID` which will identify a single `VisitRecord` to be updated. */
  nodeId: Scalars['ID']['input'];
  /** An object where the defined keys will be set on the `VisitRecord` being updated. */
  visitRecordPatch: VisitRecordPatch;
};

/** The output of our update `VisitRecord` mutation. */
export type UpdateVisitRecordPayload = {
  __typename?: 'UpdateVisitRecordPayload';
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId?: Maybe<Scalars['String']['output']>;
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>;
  /** Reads a single `Record` that is related to this `VisitRecord`. */
  recordByRecordId?: Maybe<Record>;
  /** The `VisitRecord` that was updated by this mutation. */
  visitRecord?: Maybe<VisitRecord>;
  /** An edge for our `VisitRecord`. May be used by Relay 1. */
  visitRecordEdge?: Maybe<VisitRecordsEdge>;
};

/** The output of our update `VisitRecord` mutation. */
export type UpdateVisitRecordPayloadVisitRecordEdgeArgs = {
  orderBy?: InputMaybe<Array<VisitRecordsOrderBy>>;
};

export type User = Node & {
  __typename?: 'User';
  /** Reads a single `Admin` that is related to this `User`. */
  adminByUserId?: Maybe<Admin>;
  /**
   * Reads and enables pagination through a set of `Admin`.
   * @deprecated Please use adminByUserId instead
   */
  adminsByUserId: AdminsConnection;
  email: Scalars['String']['output'];
  firstName?: Maybe<Scalars['String']['output']>;
  id: Scalars['UUID']['output'];
  lastName?: Maybe<Scalars['String']['output']>;
  /** A globally unique identifier. Can be used in various places throughout the system to identify this single value. */
  nodeId: Scalars['ID']['output'];
  password?: Maybe<Scalars['String']['output']>;
  /** Reads and enables pagination through a set of `Pet`. */
  petsByUserId: PetsConnection;
  /** Reads and enables pagination through a set of `Record`. */
  recordsByUserId: RecordsConnection;
  role?: Maybe<UserRole>;
};

export type UserAdminsByUserIdArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  condition?: InputMaybe<AdminCondition>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<AdminsOrderBy>>;
};

export type UserPetsByUserIdArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  condition?: InputMaybe<PetCondition>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<PetsOrderBy>>;
};

export type UserRecordsByUserIdArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  condition?: InputMaybe<RecordCondition>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<RecordsOrderBy>>;
};

/** A condition to be used against `User` object types. All fields are tested for equality and combined with a logical ‘and.’ */
export type UserCondition = {
  /** Checks for equality with the object’s `email` field. */
  email?: InputMaybe<Scalars['String']['input']>;
  /** Checks for equality with the object’s `firstName` field. */
  firstName?: InputMaybe<Scalars['String']['input']>;
  /** Checks for equality with the object’s `id` field. */
  id?: InputMaybe<Scalars['UUID']['input']>;
  /** Checks for equality with the object’s `lastName` field. */
  lastName?: InputMaybe<Scalars['String']['input']>;
  /** Checks for equality with the object’s `password` field. */
  password?: InputMaybe<Scalars['String']['input']>;
  /** Checks for equality with the object’s `role` field. */
  role?: InputMaybe<UserRole>;
};

/** An input for mutations affecting `User` */
export type UserInput = {
  email: Scalars['String']['input'];
  firstName?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['UUID']['input']>;
  lastName?: InputMaybe<Scalars['String']['input']>;
  password?: InputMaybe<Scalars['String']['input']>;
  role?: InputMaybe<UserRole>;
};

/** Represents an update to a `User`. Fields that are set will be updated. */
export type UserPatch = {
  email?: InputMaybe<Scalars['String']['input']>;
  firstName?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['UUID']['input']>;
  lastName?: InputMaybe<Scalars['String']['input']>;
  password?: InputMaybe<Scalars['String']['input']>;
  role?: InputMaybe<UserRole>;
};

export enum UserRole {
  Admin = 'ADMIN',
  User = 'USER',
}

/** A connection to a list of `User` values. */
export type UsersConnection = {
  __typename?: 'UsersConnection';
  /** A list of edges which contains the `User` and cursor to aid in pagination. */
  edges: Array<UsersEdge>;
  /** A list of `User` objects. */
  nodes: Array<Maybe<User>>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  /** The count of *all* `User` you could get from the connection. */
  totalCount: Scalars['Int']['output'];
};

/** A `User` edge in the connection. */
export type UsersEdge = {
  __typename?: 'UsersEdge';
  /** A cursor for use in pagination. */
  cursor?: Maybe<Scalars['Cursor']['output']>;
  /** The `User` at the end of the edge. */
  node?: Maybe<User>;
};

/** Methods to use when ordering `User`. */
export enum UsersOrderBy {
  EmailAsc = 'EMAIL_ASC',
  EmailDesc = 'EMAIL_DESC',
  FirstNameAsc = 'FIRST_NAME_ASC',
  FirstNameDesc = 'FIRST_NAME_DESC',
  IdAsc = 'ID_ASC',
  IdDesc = 'ID_DESC',
  LastNameAsc = 'LAST_NAME_ASC',
  LastNameDesc = 'LAST_NAME_DESC',
  Natural = 'NATURAL',
  PasswordAsc = 'PASSWORD_ASC',
  PasswordDesc = 'PASSWORD_DESC',
  PrimaryKeyAsc = 'PRIMARY_KEY_ASC',
  PrimaryKeyDesc = 'PRIMARY_KEY_DESC',
  RoleAsc = 'ROLE_ASC',
  RoleDesc = 'ROLE_DESC',
}

export type VaccineRecord = Node & {
  __typename?: 'VaccineRecord';
  administeredAt: Scalars['Datetime']['output'];
  id: Scalars['UUID']['output'];
  name: Scalars['String']['output'];
  /** A globally unique identifier. Can be used in various places throughout the system to identify this single value. */
  nodeId: Scalars['ID']['output'];
  /** Reads a single `Record` that is related to this `VaccineRecord`. */
  recordByRecordId?: Maybe<Record>;
  recordId: Scalars['UUID']['output'];
};

/**
 * A condition to be used against `VaccineRecord` object types. All fields are
 * tested for equality and combined with a logical ‘and.’
 */
export type VaccineRecordCondition = {
  /** Checks for equality with the object’s `administeredAt` field. */
  administeredAt?: InputMaybe<Scalars['Datetime']['input']>;
  /** Checks for equality with the object’s `id` field. */
  id?: InputMaybe<Scalars['UUID']['input']>;
  /** Checks for equality with the object’s `name` field. */
  name?: InputMaybe<Scalars['String']['input']>;
  /** Checks for equality with the object’s `recordId` field. */
  recordId?: InputMaybe<Scalars['UUID']['input']>;
};

/** An input for mutations affecting `VaccineRecord` */
export type VaccineRecordInput = {
  administeredAt: Scalars['Datetime']['input'];
  id?: InputMaybe<Scalars['UUID']['input']>;
  name: Scalars['String']['input'];
  recordId: Scalars['UUID']['input'];
};

/** Represents an update to a `VaccineRecord`. Fields that are set will be updated. */
export type VaccineRecordPatch = {
  administeredAt?: InputMaybe<Scalars['Datetime']['input']>;
  id?: InputMaybe<Scalars['UUID']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  recordId?: InputMaybe<Scalars['UUID']['input']>;
};

/** A connection to a list of `VaccineRecord` values. */
export type VaccineRecordsConnection = {
  __typename?: 'VaccineRecordsConnection';
  /** A list of edges which contains the `VaccineRecord` and cursor to aid in pagination. */
  edges: Array<VaccineRecordsEdge>;
  /** A list of `VaccineRecord` objects. */
  nodes: Array<Maybe<VaccineRecord>>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  /** The count of *all* `VaccineRecord` you could get from the connection. */
  totalCount: Scalars['Int']['output'];
};

/** A `VaccineRecord` edge in the connection. */
export type VaccineRecordsEdge = {
  __typename?: 'VaccineRecordsEdge';
  /** A cursor for use in pagination. */
  cursor?: Maybe<Scalars['Cursor']['output']>;
  /** The `VaccineRecord` at the end of the edge. */
  node?: Maybe<VaccineRecord>;
};

/** Methods to use when ordering `VaccineRecord`. */
export enum VaccineRecordsOrderBy {
  AdministeredAtAsc = 'ADMINISTERED_AT_ASC',
  AdministeredAtDesc = 'ADMINISTERED_AT_DESC',
  IdAsc = 'ID_ASC',
  IdDesc = 'ID_DESC',
  NameAsc = 'NAME_ASC',
  NameDesc = 'NAME_DESC',
  Natural = 'NATURAL',
  PrimaryKeyAsc = 'PRIMARY_KEY_ASC',
  PrimaryKeyDesc = 'PRIMARY_KEY_DESC',
  RecordIdAsc = 'RECORD_ID_ASC',
  RecordIdDesc = 'RECORD_ID_DESC',
}

export type VisitRecord = Node & {
  __typename?: 'VisitRecord';
  id: Scalars['UUID']['output'];
  /** A globally unique identifier. Can be used in various places throughout the system to identify this single value. */
  nodeId: Scalars['ID']['output'];
  notes?: Maybe<Scalars['String']['output']>;
  /** Reads a single `Record` that is related to this `VisitRecord`. */
  recordByRecordId?: Maybe<Record>;
  recordId: Scalars['UUID']['output'];
  vetName: Scalars['String']['output'];
  visitDate: Scalars['Datetime']['output'];
};

/**
 * A condition to be used against `VisitRecord` object types. All fields are tested
 * for equality and combined with a logical ‘and.’
 */
export type VisitRecordCondition = {
  /** Checks for equality with the object’s `id` field. */
  id?: InputMaybe<Scalars['UUID']['input']>;
  /** Checks for equality with the object’s `notes` field. */
  notes?: InputMaybe<Scalars['String']['input']>;
  /** Checks for equality with the object’s `recordId` field. */
  recordId?: InputMaybe<Scalars['UUID']['input']>;
  /** Checks for equality with the object’s `vetName` field. */
  vetName?: InputMaybe<Scalars['String']['input']>;
  /** Checks for equality with the object’s `visitDate` field. */
  visitDate?: InputMaybe<Scalars['Datetime']['input']>;
};

/** An input for mutations affecting `VisitRecord` */
export type VisitRecordInput = {
  id?: InputMaybe<Scalars['UUID']['input']>;
  notes?: InputMaybe<Scalars['String']['input']>;
  recordId: Scalars['UUID']['input'];
  vetName: Scalars['String']['input'];
  visitDate: Scalars['Datetime']['input'];
};

/** Represents an update to a `VisitRecord`. Fields that are set will be updated. */
export type VisitRecordPatch = {
  id?: InputMaybe<Scalars['UUID']['input']>;
  notes?: InputMaybe<Scalars['String']['input']>;
  recordId?: InputMaybe<Scalars['UUID']['input']>;
  vetName?: InputMaybe<Scalars['String']['input']>;
  visitDate?: InputMaybe<Scalars['Datetime']['input']>;
};

/** A connection to a list of `VisitRecord` values. */
export type VisitRecordsConnection = {
  __typename?: 'VisitRecordsConnection';
  /** A list of edges which contains the `VisitRecord` and cursor to aid in pagination. */
  edges: Array<VisitRecordsEdge>;
  /** A list of `VisitRecord` objects. */
  nodes: Array<Maybe<VisitRecord>>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  /** The count of *all* `VisitRecord` you could get from the connection. */
  totalCount: Scalars['Int']['output'];
};

/** A `VisitRecord` edge in the connection. */
export type VisitRecordsEdge = {
  __typename?: 'VisitRecordsEdge';
  /** A cursor for use in pagination. */
  cursor?: Maybe<Scalars['Cursor']['output']>;
  /** The `VisitRecord` at the end of the edge. */
  node?: Maybe<VisitRecord>;
};

/** Methods to use when ordering `VisitRecord`. */
export enum VisitRecordsOrderBy {
  IdAsc = 'ID_ASC',
  IdDesc = 'ID_DESC',
  Natural = 'NATURAL',
  NotesAsc = 'NOTES_ASC',
  NotesDesc = 'NOTES_DESC',
  PrimaryKeyAsc = 'PRIMARY_KEY_ASC',
  PrimaryKeyDesc = 'PRIMARY_KEY_DESC',
  RecordIdAsc = 'RECORD_ID_ASC',
  RecordIdDesc = 'RECORD_ID_DESC',
  VetNameAsc = 'VET_NAME_ASC',
  VetNameDesc = 'VET_NAME_DESC',
  VisitDateAsc = 'VISIT_DATE_ASC',
  VisitDateDesc = 'VISIT_DATE_DESC',
}

export type AddPetMutationVariables = Exact<{
  animalId: Scalars['UUID']['input'];
  userId: Scalars['UUID']['input'];
  name: Scalars['String']['input'];
  dob: Scalars['Datetime']['input'];
}>;

export type AddPetMutation = {
  __typename?: 'Mutation';
  createPet?: {
    __typename?: 'CreatePetPayload';
    pet?: { __typename?: 'Pet'; id: any; name: string; dob: any; userId: any; nodeId: string };
  };
};

export type CreateAllergyRecordMutationVariables = Exact<{
  recordId: Scalars['UUID']['input'];
  name: Scalars['String']['input'];
  reactions?: InputMaybe<Scalars['String']['input']>;
  severity: AllergySeverity;
}>;

export type CreateAllergyRecordMutation = {
  __typename?: 'Mutation';
  createAllergyRecord?: {
    __typename?: 'CreateAllergyRecordPayload';
    allergyRecord?: { __typename?: 'AllergyRecord'; id: any };
  };
};

export type CreateVaccineRecordMutationVariables = Exact<{
  recordId: Scalars['UUID']['input'];
  name: Scalars['String']['input'];
  administeredAt: Scalars['Datetime']['input'];
}>;

export type CreateVaccineRecordMutation = {
  __typename?: 'Mutation';
  createVaccineRecord?: {
    __typename?: 'CreateVaccineRecordPayload';
    vaccineRecord?: { __typename?: 'VaccineRecord'; id: any };
  };
};

export type CreateVisitRecordMutationVariables = Exact<{
  recordId: Scalars['UUID']['input'];
  vetName: Scalars['String']['input'];
  notes?: InputMaybe<Scalars['String']['input']>;
  visitDate: Scalars['Datetime']['input'];
}>;

export type CreateVisitRecordMutation = {
  __typename?: 'Mutation';
  createVisitRecord?: {
    __typename?: 'CreateVisitRecordPayload';
    visitRecord?: { __typename?: 'VisitRecord'; id: any };
  };
};

export type CreateRecordMutationVariables = Exact<{
  petId: Scalars['UUID']['input'];
  userId: Scalars['UUID']['input'];
  recordTypeId: Scalars['UUID']['input'];
}>;

export type CreateRecordMutation = {
  __typename?: 'Mutation';
  createRecord?: {
    __typename?: 'CreateRecordPayload';
    record?: { __typename?: 'Record'; id: any; recordType: any };
  };
};

export type SigninMutationVariables = Exact<{
  email: Scalars['String']['input'];
  password: Scalars['String']['input'];
}>;

export type SigninMutation = {
  __typename?: 'Mutation';
  signin?: { __typename?: 'SigninPayload'; jwtToken?: any };
};

export type SignupMutationVariables = Exact<{
  email: Scalars['String']['input'];
  password: Scalars['String']['input'];
}>;

export type SignupMutation = {
  __typename?: 'Mutation';
  signup?: {
    __typename?: 'SignupPayload';
    signupResult?: { __typename?: 'SignupResult'; status?: string; jwtToken?: any };
  };
};

export type UpdateUserMutationVariables = Exact<{
  id: Scalars['UUID']['input'];
  patch: UserPatch;
}>;

export type UpdateUserMutation = {
  __typename?: 'Mutation';
  updateUserById?: {
    __typename?: 'UpdateUserPayload';
    user?: {
      __typename?: 'User';
      id: any;
      email: string;
      firstName?: string;
      lastName?: string;
      nodeId: string;
    };
  };
};

export type AdminPetsFullQueryVariables = Exact<{ [key: string]: never }>;

export type AdminPetsFullQuery = {
  __typename?: 'Query';
  allPets?: {
    __typename?: 'PetsConnection';
    totalCount: number;
    nodes: Array<{
      __typename?: 'Pet';
      id: any;
      name: string;
      dob: any;
      userId: any;
      animalId: any;
      createdAt?: any;
      nodeId: string;
      animalByAnimalId?: { __typename?: 'Animal'; id: any; name: string; nodeId: string };
      userByUserId?: {
        __typename?: 'User';
        id: any;
        email: string;
        firstName?: string;
        lastName?: string;
      };
      recordsByPetId: {
        __typename?: 'RecordsConnection';
        nodes: Array<{
          __typename?: 'Record';
          id: any;
          userId: any;
          petId: any;
          recordType: any;
          createdAt?: any;
          allergyRecordsByRecordId: {
            __typename?: 'AllergyRecordsConnection';
            nodes: Array<{
              __typename?: 'AllergyRecord';
              id: any;
              name: string;
              reactions?: string;
              severity: AllergySeverity;
            }>;
          };
          vaccineRecordsByRecordId: {
            __typename?: 'VaccineRecordsConnection';
            nodes: Array<{
              __typename?: 'VaccineRecord';
              id: any;
              name: string;
              administeredAt: any;
            }>;
          };
        }>;
      };
    }>;
  };
};

export type AllAdminPetsQueryVariables = Exact<{
  userId: Scalars['UUID']['input'];
}>;

export type AllAdminPetsQuery = {
  __typename?: 'Query';
  allPets?: {
    __typename?: 'PetsConnection';
    totalCount: number;
    nodes: Array<{
      __typename?: 'Pet';
      id: any;
      name: string;
      dob: any;
      userId: any;
      animalId: any;
      createdAt?: any;
      nodeId: string;
      animalByAnimalId?: { __typename?: 'Animal'; id: any; name: string; nodeId: string };
    }>;
  };
};

export type AdminAllUsersQueryVariables = Exact<{ [key: string]: never }>;

export type AdminAllUsersQuery = {
  __typename?: 'Query';
  allUsers?: {
    __typename?: 'UsersConnection';
    totalCount: number;
    nodes: Array<{
      __typename?: 'User';
      id: any;
      email: string;
      firstName?: string;
      lastName?: string;
      role?: UserRole;
    }>;
  };
};

export type AllAnimalsQueryVariables = Exact<{ [key: string]: never }>;

export type AllAnimalsQuery = {
  __typename?: 'Query';
  allAnimals?: {
    __typename?: 'AnimalsConnection';
    totalCount: number;
    nodes: Array<{ __typename?: 'Animal'; id: any; name: string; nodeId: string }>;
  };
};

export type AllPetsQueryVariables = Exact<{ [key: string]: never }>;

export type AllPetsQuery = {
  __typename?: 'Query';
  allPets?: {
    __typename?: 'PetsConnection';
    totalCount: number;
    nodes: Array<{
      __typename?: 'Pet';
      id: any;
      name: string;
      dob: any;
      userId: any;
      animalId: any;
      createdAt?: any;
      nodeId: string;
      animalByAnimalId?: { __typename?: 'Animal'; id: any; name: string; nodeId: string };
    }>;
  };
};

export type AllRecordTypesQueryVariables = Exact<{ [key: string]: never }>;

export type AllRecordTypesQuery = {
  __typename?: 'Query';
  allRecordTypes?: {
    __typename?: 'RecordTypesConnection';
    nodes: Array<{ __typename?: 'RecordType'; id: any; name: string; nodeId: string }>;
  };
};

export type RecordsByAnimalIdQueryVariables = Exact<{
  petId: Scalars['UUID']['input'];
}>;

export type RecordsByAnimalIdQuery = {
  __typename?: 'Query';
  petById?: {
    __typename?: 'Pet';
    recordsByPetId: {
      __typename?: 'RecordsConnection';
      nodes: Array<{
        __typename?: 'Record';
        id: any;
        userId: any;
        petId: any;
        recordType: any;
        createdAt?: any;
        allergyRecordsByRecordId: {
          __typename?: 'AllergyRecordsConnection';
          nodes: Array<{
            __typename?: 'AllergyRecord';
            id: any;
            name: string;
            reactions?: string;
            severity: AllergySeverity;
          }>;
        };
        vaccineRecordsByRecordId: {
          __typename?: 'VaccineRecordsConnection';
          nodes: Array<{
            __typename?: 'VaccineRecord';
            id: any;
            name: string;
            administeredAt: any;
          }>;
        };
        visitRecordsByRecordId: {
          __typename?: 'VisitRecordsConnection';
          nodes: Array<{
            __typename?: 'VisitRecord';
            id: any;
            visitDate: any;
            vetName: string;
            notes?: string;
          }>;
        };
      }>;
    };
  };
};
