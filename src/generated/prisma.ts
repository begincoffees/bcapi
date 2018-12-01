import { GraphQLResolveInfo, GraphQLSchema } from 'graphql'
import { IResolvers } from 'graphql-tools/dist/Interfaces'
import { Options } from 'graphql-binding'
import { makePrismaBindingClass, BasePrismaOptions } from 'prisma-binding'

export interface Query {
    users: <T = User[]>(args: { where?: UserWhereInput, orderBy?: UserOrderByInput, skip?: Int, after?: String, before?: String, first?: Int, last?: Int }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    carts: <T = Cart[]>(args: { where?: CartWhereInput, orderBy?: CartOrderByInput, skip?: Int, after?: String, before?: String, first?: Int, last?: Int }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    invoices: <T = Invoice[]>(args: { where?: InvoiceWhereInput, orderBy?: InvoiceOrderByInput, skip?: Int, after?: String, before?: String, first?: Int, last?: Int }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    products: <T = Product[]>(args: { where?: ProductWhereInput, orderBy?: ProductOrderByInput, skip?: Int, after?: String, before?: String, first?: Int, last?: Int }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    user: <T = User | null>(args: { where: UserWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    cart: <T = Cart | null>(args: { where: CartWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    invoice: <T = Invoice | null>(args: { where: InvoiceWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    product: <T = Product | null>(args: { where: ProductWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    usersConnection: <T = UserConnection>(args: { where?: UserWhereInput, orderBy?: UserOrderByInput, skip?: Int, after?: String, before?: String, first?: Int, last?: Int }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    cartsConnection: <T = CartConnection>(args: { where?: CartWhereInput, orderBy?: CartOrderByInput, skip?: Int, after?: String, before?: String, first?: Int, last?: Int }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    invoicesConnection: <T = InvoiceConnection>(args: { where?: InvoiceWhereInput, orderBy?: InvoiceOrderByInput, skip?: Int, after?: String, before?: String, first?: Int, last?: Int }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    productsConnection: <T = ProductConnection>(args: { where?: ProductWhereInput, orderBy?: ProductOrderByInput, skip?: Int, after?: String, before?: String, first?: Int, last?: Int }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    node: <T = Node | null>(args: { id: ID_Output }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> 
  }

export interface Mutation {
    createUser: <T = User>(args: { data: UserCreateInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    createCart: <T = Cart>(args: { data: CartCreateInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    createInvoice: <T = Invoice>(args: { data: InvoiceCreateInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    createProduct: <T = Product>(args: { data: ProductCreateInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    updateUser: <T = User | null>(args: { data: UserUpdateInput, where: UserWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    updateCart: <T = Cart | null>(args: { data: CartUpdateInput, where: CartWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    updateInvoice: <T = Invoice | null>(args: { data: InvoiceUpdateInput, where: InvoiceWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    updateProduct: <T = Product | null>(args: { data: ProductUpdateInput, where: ProductWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    deleteUser: <T = User | null>(args: { where: UserWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    deleteCart: <T = Cart | null>(args: { where: CartWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    deleteInvoice: <T = Invoice | null>(args: { where: InvoiceWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    deleteProduct: <T = Product | null>(args: { where: ProductWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    upsertUser: <T = User>(args: { where: UserWhereUniqueInput, create: UserCreateInput, update: UserUpdateInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    upsertCart: <T = Cart>(args: { where: CartWhereUniqueInput, create: CartCreateInput, update: CartUpdateInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    upsertInvoice: <T = Invoice>(args: { where: InvoiceWhereUniqueInput, create: InvoiceCreateInput, update: InvoiceUpdateInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    upsertProduct: <T = Product>(args: { where: ProductWhereUniqueInput, create: ProductCreateInput, update: ProductUpdateInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    updateManyUsers: <T = BatchPayload>(args: { data: UserUpdateInput, where?: UserWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    updateManyCarts: <T = BatchPayload>(args: { data: CartUpdateInput, where?: CartWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    updateManyInvoices: <T = BatchPayload>(args: { data: InvoiceUpdateInput, where?: InvoiceWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    updateManyProducts: <T = BatchPayload>(args: { data: ProductUpdateInput, where?: ProductWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    deleteManyUsers: <T = BatchPayload>(args: { where?: UserWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    deleteManyCarts: <T = BatchPayload>(args: { where?: CartWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    deleteManyInvoices: <T = BatchPayload>(args: { where?: InvoiceWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    deleteManyProducts: <T = BatchPayload>(args: { where?: ProductWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> 
  }

export interface Subscription {
    user: <T = UserSubscriptionPayload | null>(args: { where?: UserSubscriptionWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<AsyncIterator<T>> ,
    cart: <T = CartSubscriptionPayload | null>(args: { where?: CartSubscriptionWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<AsyncIterator<T>> ,
    invoice: <T = InvoiceSubscriptionPayload | null>(args: { where?: InvoiceSubscriptionWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<AsyncIterator<T>> ,
    product: <T = ProductSubscriptionPayload | null>(args: { where?: ProductSubscriptionWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<AsyncIterator<T>> 
  }

export interface Exists {
  User: (where?: UserWhereInput) => Promise<boolean>
  Cart: (where?: CartWhereInput) => Promise<boolean>
  Invoice: (where?: InvoiceWhereInput) => Promise<boolean>
  Product: (where?: ProductWhereInput) => Promise<boolean>
}

export interface Prisma {
  query: Query
  mutation: Mutation
  subscription: Subscription
  exists: Exists
  request: <T = any>(query: string, variables?: {[key: string]: any}) => Promise<T>
  delegate(operation: 'query' | 'mutation', fieldName: string, args: {
    [key: string]: any;
}, infoOrQuery?: GraphQLResolveInfo | string, options?: Options): Promise<any>;
delegateSubscription(fieldName: string, args?: {
    [key: string]: any;
}, infoOrQuery?: GraphQLResolveInfo | string, options?: Options): Promise<AsyncIterator<any>>;
getAbstractResolvers(filterSchema?: GraphQLSchema | string): IResolvers;
}

export interface BindingConstructor<T> {
  new(options: BasePrismaOptions): T
}
/**
 * Type Defs
*/

const typeDefs = `type AggregateCart {
  count: Int!
}

type AggregateInvoice {
  count: Int!
}

type AggregateProduct {
  count: Int!
}

type AggregateUser {
  count: Int!
}

type BatchPayload {
  """The number of nodes that have been affected by the Batch operation."""
  count: Long!
}

type Cart implements Node {
  id: ID!
  itemCount: Int
  totalPrice: String
  items(where: ProductWhereInput, orderBy: ProductOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Product!]
  user(where: UserWhereInput): User!
}

"""A connection to a list of items."""
type CartConnection {
  """Information to aid in pagination."""
  pageInfo: PageInfo!

  """A list of edges."""
  edges: [CartEdge]!
  aggregate: AggregateCart!
}

input CartCreateInput {
  itemCount: Int
  totalPrice: String
  items: ProductCreateManyWithoutCartsInput
  user: UserCreateOneWithoutCartInput!
}

input CartCreateManyWithoutItemsInput {
  create: [CartCreateWithoutItemsInput!]
  connect: [CartWhereUniqueInput!]
}

input CartCreateOneWithoutUserInput {
  create: CartCreateWithoutUserInput
  connect: CartWhereUniqueInput
}

input CartCreateWithoutItemsInput {
  itemCount: Int
  totalPrice: String
  user: UserCreateOneWithoutCartInput!
}

input CartCreateWithoutUserInput {
  itemCount: Int
  totalPrice: String
  items: ProductCreateManyWithoutCartsInput
}

"""An edge in a connection."""
type CartEdge {
  """The item at the end of the edge."""
  node: Cart!

  """A cursor for use in pagination."""
  cursor: String!
}

enum CartOrderByInput {
  id_ASC
  id_DESC
  itemCount_ASC
  itemCount_DESC
  totalPrice_ASC
  totalPrice_DESC
  updatedAt_ASC
  updatedAt_DESC
  createdAt_ASC
  createdAt_DESC
}

type CartPreviousValues {
  id: ID!
  itemCount: Int
  totalPrice: String
}

type CartSubscriptionPayload {
  mutation: MutationType!
  node: Cart
  updatedFields: [String!]
  previousValues: CartPreviousValues
}

input CartSubscriptionWhereInput {
  """Logical AND on all given filters."""
  AND: [CartSubscriptionWhereInput!]

  """Logical OR on all given filters."""
  OR: [CartSubscriptionWhereInput!]

  """Logical NOT on all given filters combined by AND."""
  NOT: [CartSubscriptionWhereInput!]

  """
  The subscription event gets dispatched when it's listed in mutation_in
  """
  mutation_in: [MutationType!]

  """
  The subscription event gets only dispatched when one of the updated fields names is included in this list
  """
  updatedFields_contains: String

  """
  The subscription event gets only dispatched when all of the field names included in this list have been updated
  """
  updatedFields_contains_every: [String!]

  """
  The subscription event gets only dispatched when some of the field names included in this list have been updated
  """
  updatedFields_contains_some: [String!]
  node: CartWhereInput
}

input CartUpdateInput {
  itemCount: Int
  totalPrice: String
  items: ProductUpdateManyWithoutCartsInput
  user: UserUpdateOneWithoutCartInput
}

input CartUpdateManyWithoutItemsInput {
  create: [CartCreateWithoutItemsInput!]
  connect: [CartWhereUniqueInput!]
  disconnect: [CartWhereUniqueInput!]
  delete: [CartWhereUniqueInput!]
  update: [CartUpdateWithWhereUniqueWithoutItemsInput!]
  upsert: [CartUpsertWithWhereUniqueWithoutItemsInput!]
}

input CartUpdateOneWithoutUserInput {
  create: CartCreateWithoutUserInput
  connect: CartWhereUniqueInput
  disconnect: Boolean
  delete: Boolean
  update: CartUpdateWithoutUserDataInput
  upsert: CartUpsertWithoutUserInput
}

input CartUpdateWithoutItemsDataInput {
  itemCount: Int
  totalPrice: String
  user: UserUpdateOneWithoutCartInput
}

input CartUpdateWithoutUserDataInput {
  itemCount: Int
  totalPrice: String
  items: ProductUpdateManyWithoutCartsInput
}

input CartUpdateWithWhereUniqueWithoutItemsInput {
  where: CartWhereUniqueInput!
  data: CartUpdateWithoutItemsDataInput!
}

input CartUpsertWithoutUserInput {
  update: CartUpdateWithoutUserDataInput!
  create: CartCreateWithoutUserInput!
}

input CartUpsertWithWhereUniqueWithoutItemsInput {
  where: CartWhereUniqueInput!
  update: CartUpdateWithoutItemsDataInput!
  create: CartCreateWithoutItemsInput!
}

input CartWhereInput {
  """Logical AND on all given filters."""
  AND: [CartWhereInput!]

  """Logical OR on all given filters."""
  OR: [CartWhereInput!]

  """Logical NOT on all given filters combined by AND."""
  NOT: [CartWhereInput!]
  id: ID

  """All values that are not equal to given value."""
  id_not: ID

  """All values that are contained in given list."""
  id_in: [ID!]

  """All values that are not contained in given list."""
  id_not_in: [ID!]

  """All values less than the given value."""
  id_lt: ID

  """All values less than or equal the given value."""
  id_lte: ID

  """All values greater than the given value."""
  id_gt: ID

  """All values greater than or equal the given value."""
  id_gte: ID

  """All values containing the given string."""
  id_contains: ID

  """All values not containing the given string."""
  id_not_contains: ID

  """All values starting with the given string."""
  id_starts_with: ID

  """All values not starting with the given string."""
  id_not_starts_with: ID

  """All values ending with the given string."""
  id_ends_with: ID

  """All values not ending with the given string."""
  id_not_ends_with: ID
  itemCount: Int

  """All values that are not equal to given value."""
  itemCount_not: Int

  """All values that are contained in given list."""
  itemCount_in: [Int!]

  """All values that are not contained in given list."""
  itemCount_not_in: [Int!]

  """All values less than the given value."""
  itemCount_lt: Int

  """All values less than or equal the given value."""
  itemCount_lte: Int

  """All values greater than the given value."""
  itemCount_gt: Int

  """All values greater than or equal the given value."""
  itemCount_gte: Int
  totalPrice: String

  """All values that are not equal to given value."""
  totalPrice_not: String

  """All values that are contained in given list."""
  totalPrice_in: [String!]

  """All values that are not contained in given list."""
  totalPrice_not_in: [String!]

  """All values less than the given value."""
  totalPrice_lt: String

  """All values less than or equal the given value."""
  totalPrice_lte: String

  """All values greater than the given value."""
  totalPrice_gt: String

  """All values greater than or equal the given value."""
  totalPrice_gte: String

  """All values containing the given string."""
  totalPrice_contains: String

  """All values not containing the given string."""
  totalPrice_not_contains: String

  """All values starting with the given string."""
  totalPrice_starts_with: String

  """All values not starting with the given string."""
  totalPrice_not_starts_with: String

  """All values ending with the given string."""
  totalPrice_ends_with: String

  """All values not ending with the given string."""
  totalPrice_not_ends_with: String
  items_every: ProductWhereInput
  items_some: ProductWhereInput
  items_none: ProductWhereInput
  user: UserWhereInput
}

input CartWhereUniqueInput {
  id: ID
}

type Invoice implements Node {
  id: ID!
  items(where: ProductWhereInput, orderBy: ProductOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Product!]
  amount: String
  email: String!
  customer(where: UserWhereInput): User
  vendors(where: UserWhereInput, orderBy: UserOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [User!]
}

"""A connection to a list of items."""
type InvoiceConnection {
  """Information to aid in pagination."""
  pageInfo: PageInfo!

  """A list of edges."""
  edges: [InvoiceEdge]!
  aggregate: AggregateInvoice!
}

input InvoiceCreateInput {
  amount: String
  email: String!
  items: ProductCreateManyInput
  customer: UserCreateOneWithoutPurchasesInput
  vendors: UserCreateManyWithoutSalesInput
}

input InvoiceCreateManyWithoutCustomerInput {
  create: [InvoiceCreateWithoutCustomerInput!]
  connect: [InvoiceWhereUniqueInput!]
}

input InvoiceCreateManyWithoutVendorsInput {
  create: [InvoiceCreateWithoutVendorsInput!]
  connect: [InvoiceWhereUniqueInput!]
}

input InvoiceCreateWithoutCustomerInput {
  amount: String
  email: String!
  items: ProductCreateManyInput
  vendors: UserCreateManyWithoutSalesInput
}

input InvoiceCreateWithoutVendorsInput {
  amount: String
  email: String!
  items: ProductCreateManyInput
  customer: UserCreateOneWithoutPurchasesInput
}

"""An edge in a connection."""
type InvoiceEdge {
  """The item at the end of the edge."""
  node: Invoice!

  """A cursor for use in pagination."""
  cursor: String!
}

enum InvoiceOrderByInput {
  id_ASC
  id_DESC
  amount_ASC
  amount_DESC
  email_ASC
  email_DESC
  updatedAt_ASC
  updatedAt_DESC
  createdAt_ASC
  createdAt_DESC
}

type InvoicePreviousValues {
  id: ID!
  amount: String
  email: String!
}

type InvoiceSubscriptionPayload {
  mutation: MutationType!
  node: Invoice
  updatedFields: [String!]
  previousValues: InvoicePreviousValues
}

input InvoiceSubscriptionWhereInput {
  """Logical AND on all given filters."""
  AND: [InvoiceSubscriptionWhereInput!]

  """Logical OR on all given filters."""
  OR: [InvoiceSubscriptionWhereInput!]

  """Logical NOT on all given filters combined by AND."""
  NOT: [InvoiceSubscriptionWhereInput!]

  """
  The subscription event gets dispatched when it's listed in mutation_in
  """
  mutation_in: [MutationType!]

  """
  The subscription event gets only dispatched when one of the updated fields names is included in this list
  """
  updatedFields_contains: String

  """
  The subscription event gets only dispatched when all of the field names included in this list have been updated
  """
  updatedFields_contains_every: [String!]

  """
  The subscription event gets only dispatched when some of the field names included in this list have been updated
  """
  updatedFields_contains_some: [String!]
  node: InvoiceWhereInput
}

input InvoiceUpdateInput {
  amount: String
  email: String
  items: ProductUpdateManyInput
  customer: UserUpdateOneWithoutPurchasesInput
  vendors: UserUpdateManyWithoutSalesInput
}

input InvoiceUpdateManyWithoutCustomerInput {
  create: [InvoiceCreateWithoutCustomerInput!]
  connect: [InvoiceWhereUniqueInput!]
  disconnect: [InvoiceWhereUniqueInput!]
  delete: [InvoiceWhereUniqueInput!]
  update: [InvoiceUpdateWithWhereUniqueWithoutCustomerInput!]
  upsert: [InvoiceUpsertWithWhereUniqueWithoutCustomerInput!]
}

input InvoiceUpdateManyWithoutVendorsInput {
  create: [InvoiceCreateWithoutVendorsInput!]
  connect: [InvoiceWhereUniqueInput!]
  disconnect: [InvoiceWhereUniqueInput!]
  delete: [InvoiceWhereUniqueInput!]
  update: [InvoiceUpdateWithWhereUniqueWithoutVendorsInput!]
  upsert: [InvoiceUpsertWithWhereUniqueWithoutVendorsInput!]
}

input InvoiceUpdateWithoutCustomerDataInput {
  amount: String
  email: String
  items: ProductUpdateManyInput
  vendors: UserUpdateManyWithoutSalesInput
}

input InvoiceUpdateWithoutVendorsDataInput {
  amount: String
  email: String
  items: ProductUpdateManyInput
  customer: UserUpdateOneWithoutPurchasesInput
}

input InvoiceUpdateWithWhereUniqueWithoutCustomerInput {
  where: InvoiceWhereUniqueInput!
  data: InvoiceUpdateWithoutCustomerDataInput!
}

input InvoiceUpdateWithWhereUniqueWithoutVendorsInput {
  where: InvoiceWhereUniqueInput!
  data: InvoiceUpdateWithoutVendorsDataInput!
}

input InvoiceUpsertWithWhereUniqueWithoutCustomerInput {
  where: InvoiceWhereUniqueInput!
  update: InvoiceUpdateWithoutCustomerDataInput!
  create: InvoiceCreateWithoutCustomerInput!
}

input InvoiceUpsertWithWhereUniqueWithoutVendorsInput {
  where: InvoiceWhereUniqueInput!
  update: InvoiceUpdateWithoutVendorsDataInput!
  create: InvoiceCreateWithoutVendorsInput!
}

input InvoiceWhereInput {
  """Logical AND on all given filters."""
  AND: [InvoiceWhereInput!]

  """Logical OR on all given filters."""
  OR: [InvoiceWhereInput!]

  """Logical NOT on all given filters combined by AND."""
  NOT: [InvoiceWhereInput!]
  id: ID

  """All values that are not equal to given value."""
  id_not: ID

  """All values that are contained in given list."""
  id_in: [ID!]

  """All values that are not contained in given list."""
  id_not_in: [ID!]

  """All values less than the given value."""
  id_lt: ID

  """All values less than or equal the given value."""
  id_lte: ID

  """All values greater than the given value."""
  id_gt: ID

  """All values greater than or equal the given value."""
  id_gte: ID

  """All values containing the given string."""
  id_contains: ID

  """All values not containing the given string."""
  id_not_contains: ID

  """All values starting with the given string."""
  id_starts_with: ID

  """All values not starting with the given string."""
  id_not_starts_with: ID

  """All values ending with the given string."""
  id_ends_with: ID

  """All values not ending with the given string."""
  id_not_ends_with: ID
  amount: String

  """All values that are not equal to given value."""
  amount_not: String

  """All values that are contained in given list."""
  amount_in: [String!]

  """All values that are not contained in given list."""
  amount_not_in: [String!]

  """All values less than the given value."""
  amount_lt: String

  """All values less than or equal the given value."""
  amount_lte: String

  """All values greater than the given value."""
  amount_gt: String

  """All values greater than or equal the given value."""
  amount_gte: String

  """All values containing the given string."""
  amount_contains: String

  """All values not containing the given string."""
  amount_not_contains: String

  """All values starting with the given string."""
  amount_starts_with: String

  """All values not starting with the given string."""
  amount_not_starts_with: String

  """All values ending with the given string."""
  amount_ends_with: String

  """All values not ending with the given string."""
  amount_not_ends_with: String
  email: String

  """All values that are not equal to given value."""
  email_not: String

  """All values that are contained in given list."""
  email_in: [String!]

  """All values that are not contained in given list."""
  email_not_in: [String!]

  """All values less than the given value."""
  email_lt: String

  """All values less than or equal the given value."""
  email_lte: String

  """All values greater than the given value."""
  email_gt: String

  """All values greater than or equal the given value."""
  email_gte: String

  """All values containing the given string."""
  email_contains: String

  """All values not containing the given string."""
  email_not_contains: String

  """All values starting with the given string."""
  email_starts_with: String

  """All values not starting with the given string."""
  email_not_starts_with: String

  """All values ending with the given string."""
  email_ends_with: String

  """All values not ending with the given string."""
  email_not_ends_with: String
  items_every: ProductWhereInput
  items_some: ProductWhereInput
  items_none: ProductWhereInput
  customer: UserWhereInput
  vendors_every: UserWhereInput
  vendors_some: UserWhereInput
  vendors_none: UserWhereInput
}

input InvoiceWhereUniqueInput {
  id: ID
}

"""
The \`Long\` scalar type represents non-fractional signed whole numeric values.
Long can represent values between -(2^63) and 2^63 - 1.
"""
scalar Long

type Mutation {
  createUser(data: UserCreateInput!): User!
  createCart(data: CartCreateInput!): Cart!
  createInvoice(data: InvoiceCreateInput!): Invoice!
  createProduct(data: ProductCreateInput!): Product!
  updateUser(data: UserUpdateInput!, where: UserWhereUniqueInput!): User
  updateCart(data: CartUpdateInput!, where: CartWhereUniqueInput!): Cart
  updateInvoice(data: InvoiceUpdateInput!, where: InvoiceWhereUniqueInput!): Invoice
  updateProduct(data: ProductUpdateInput!, where: ProductWhereUniqueInput!): Product
  deleteUser(where: UserWhereUniqueInput!): User
  deleteCart(where: CartWhereUniqueInput!): Cart
  deleteInvoice(where: InvoiceWhereUniqueInput!): Invoice
  deleteProduct(where: ProductWhereUniqueInput!): Product
  upsertUser(where: UserWhereUniqueInput!, create: UserCreateInput!, update: UserUpdateInput!): User!
  upsertCart(where: CartWhereUniqueInput!, create: CartCreateInput!, update: CartUpdateInput!): Cart!
  upsertInvoice(where: InvoiceWhereUniqueInput!, create: InvoiceCreateInput!, update: InvoiceUpdateInput!): Invoice!
  upsertProduct(where: ProductWhereUniqueInput!, create: ProductCreateInput!, update: ProductUpdateInput!): Product!
  updateManyUsers(data: UserUpdateInput!, where: UserWhereInput): BatchPayload!
  updateManyCarts(data: CartUpdateInput!, where: CartWhereInput): BatchPayload!
  updateManyInvoices(data: InvoiceUpdateInput!, where: InvoiceWhereInput): BatchPayload!
  updateManyProducts(data: ProductUpdateInput!, where: ProductWhereInput): BatchPayload!
  deleteManyUsers(where: UserWhereInput): BatchPayload!
  deleteManyCarts(where: CartWhereInput): BatchPayload!
  deleteManyInvoices(where: InvoiceWhereInput): BatchPayload!
  deleteManyProducts(where: ProductWhereInput): BatchPayload!
}

enum MutationType {
  CREATED
  UPDATED
  DELETED
}

"""An object with an ID"""
interface Node {
  """The id of the object."""
  id: ID!
}

"""Information about pagination in a connection."""
type PageInfo {
  """When paginating forwards, are there more items?"""
  hasNextPage: Boolean!

  """When paginating backwards, are there more items?"""
  hasPreviousPage: Boolean!

  """When paginating backwards, the cursor to continue."""
  startCursor: String

  """When paginating forwards, the cursor to continue."""
  endCursor: String
}

type Product implements Node {
  id: ID!
  name: String
  price: String
  description: String
  varietal: String
  vendor(where: UserWhereInput): User
  carts(where: CartWhereInput, orderBy: CartOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Cart!]
}

"""A connection to a list of items."""
type ProductConnection {
  """Information to aid in pagination."""
  pageInfo: PageInfo!

  """A list of edges."""
  edges: [ProductEdge]!
  aggregate: AggregateProduct!
}

input ProductCreateInput {
  name: String
  price: String
  description: String
  varietal: String
  vendor: UserCreateOneWithoutProductsInput
  carts: CartCreateManyWithoutItemsInput
}

input ProductCreateManyInput {
  create: [ProductCreateInput!]
  connect: [ProductWhereUniqueInput!]
}

input ProductCreateManyWithoutCartsInput {
  create: [ProductCreateWithoutCartsInput!]
  connect: [ProductWhereUniqueInput!]
}

input ProductCreateManyWithoutVendorInput {
  create: [ProductCreateWithoutVendorInput!]
  connect: [ProductWhereUniqueInput!]
}

input ProductCreateWithoutCartsInput {
  name: String
  price: String
  description: String
  varietal: String
  vendor: UserCreateOneWithoutProductsInput
}

input ProductCreateWithoutVendorInput {
  name: String
  price: String
  description: String
  varietal: String
  carts: CartCreateManyWithoutItemsInput
}

"""An edge in a connection."""
type ProductEdge {
  """The item at the end of the edge."""
  node: Product!

  """A cursor for use in pagination."""
  cursor: String!
}

enum ProductOrderByInput {
  id_ASC
  id_DESC
  name_ASC
  name_DESC
  price_ASC
  price_DESC
  description_ASC
  description_DESC
  varietal_ASC
  varietal_DESC
  updatedAt_ASC
  updatedAt_DESC
  createdAt_ASC
  createdAt_DESC
}

type ProductPreviousValues {
  id: ID!
  name: String
  price: String
  description: String
  varietal: String
}

type ProductSubscriptionPayload {
  mutation: MutationType!
  node: Product
  updatedFields: [String!]
  previousValues: ProductPreviousValues
}

input ProductSubscriptionWhereInput {
  """Logical AND on all given filters."""
  AND: [ProductSubscriptionWhereInput!]

  """Logical OR on all given filters."""
  OR: [ProductSubscriptionWhereInput!]

  """Logical NOT on all given filters combined by AND."""
  NOT: [ProductSubscriptionWhereInput!]

  """
  The subscription event gets dispatched when it's listed in mutation_in
  """
  mutation_in: [MutationType!]

  """
  The subscription event gets only dispatched when one of the updated fields names is included in this list
  """
  updatedFields_contains: String

  """
  The subscription event gets only dispatched when all of the field names included in this list have been updated
  """
  updatedFields_contains_every: [String!]

  """
  The subscription event gets only dispatched when some of the field names included in this list have been updated
  """
  updatedFields_contains_some: [String!]
  node: ProductWhereInput
}

input ProductUpdateDataInput {
  name: String
  price: String
  description: String
  varietal: String
  vendor: UserUpdateOneWithoutProductsInput
  carts: CartUpdateManyWithoutItemsInput
}

input ProductUpdateInput {
  name: String
  price: String
  description: String
  varietal: String
  vendor: UserUpdateOneWithoutProductsInput
  carts: CartUpdateManyWithoutItemsInput
}

input ProductUpdateManyInput {
  create: [ProductCreateInput!]
  connect: [ProductWhereUniqueInput!]
  disconnect: [ProductWhereUniqueInput!]
  delete: [ProductWhereUniqueInput!]
  update: [ProductUpdateWithWhereUniqueNestedInput!]
  upsert: [ProductUpsertWithWhereUniqueNestedInput!]
}

input ProductUpdateManyWithoutCartsInput {
  create: [ProductCreateWithoutCartsInput!]
  connect: [ProductWhereUniqueInput!]
  disconnect: [ProductWhereUniqueInput!]
  delete: [ProductWhereUniqueInput!]
  update: [ProductUpdateWithWhereUniqueWithoutCartsInput!]
  upsert: [ProductUpsertWithWhereUniqueWithoutCartsInput!]
}

input ProductUpdateManyWithoutVendorInput {
  create: [ProductCreateWithoutVendorInput!]
  connect: [ProductWhereUniqueInput!]
  disconnect: [ProductWhereUniqueInput!]
  delete: [ProductWhereUniqueInput!]
  update: [ProductUpdateWithWhereUniqueWithoutVendorInput!]
  upsert: [ProductUpsertWithWhereUniqueWithoutVendorInput!]
}

input ProductUpdateWithoutCartsDataInput {
  name: String
  price: String
  description: String
  varietal: String
  vendor: UserUpdateOneWithoutProductsInput
}

input ProductUpdateWithoutVendorDataInput {
  name: String
  price: String
  description: String
  varietal: String
  carts: CartUpdateManyWithoutItemsInput
}

input ProductUpdateWithWhereUniqueNestedInput {
  where: ProductWhereUniqueInput!
  data: ProductUpdateDataInput!
}

input ProductUpdateWithWhereUniqueWithoutCartsInput {
  where: ProductWhereUniqueInput!
  data: ProductUpdateWithoutCartsDataInput!
}

input ProductUpdateWithWhereUniqueWithoutVendorInput {
  where: ProductWhereUniqueInput!
  data: ProductUpdateWithoutVendorDataInput!
}

input ProductUpsertWithWhereUniqueNestedInput {
  where: ProductWhereUniqueInput!
  update: ProductUpdateDataInput!
  create: ProductCreateInput!
}

input ProductUpsertWithWhereUniqueWithoutCartsInput {
  where: ProductWhereUniqueInput!
  update: ProductUpdateWithoutCartsDataInput!
  create: ProductCreateWithoutCartsInput!
}

input ProductUpsertWithWhereUniqueWithoutVendorInput {
  where: ProductWhereUniqueInput!
  update: ProductUpdateWithoutVendorDataInput!
  create: ProductCreateWithoutVendorInput!
}

input ProductWhereInput {
  """Logical AND on all given filters."""
  AND: [ProductWhereInput!]

  """Logical OR on all given filters."""
  OR: [ProductWhereInput!]

  """Logical NOT on all given filters combined by AND."""
  NOT: [ProductWhereInput!]
  id: ID

  """All values that are not equal to given value."""
  id_not: ID

  """All values that are contained in given list."""
  id_in: [ID!]

  """All values that are not contained in given list."""
  id_not_in: [ID!]

  """All values less than the given value."""
  id_lt: ID

  """All values less than or equal the given value."""
  id_lte: ID

  """All values greater than the given value."""
  id_gt: ID

  """All values greater than or equal the given value."""
  id_gte: ID

  """All values containing the given string."""
  id_contains: ID

  """All values not containing the given string."""
  id_not_contains: ID

  """All values starting with the given string."""
  id_starts_with: ID

  """All values not starting with the given string."""
  id_not_starts_with: ID

  """All values ending with the given string."""
  id_ends_with: ID

  """All values not ending with the given string."""
  id_not_ends_with: ID
  name: String

  """All values that are not equal to given value."""
  name_not: String

  """All values that are contained in given list."""
  name_in: [String!]

  """All values that are not contained in given list."""
  name_not_in: [String!]

  """All values less than the given value."""
  name_lt: String

  """All values less than or equal the given value."""
  name_lte: String

  """All values greater than the given value."""
  name_gt: String

  """All values greater than or equal the given value."""
  name_gte: String

  """All values containing the given string."""
  name_contains: String

  """All values not containing the given string."""
  name_not_contains: String

  """All values starting with the given string."""
  name_starts_with: String

  """All values not starting with the given string."""
  name_not_starts_with: String

  """All values ending with the given string."""
  name_ends_with: String

  """All values not ending with the given string."""
  name_not_ends_with: String
  price: String

  """All values that are not equal to given value."""
  price_not: String

  """All values that are contained in given list."""
  price_in: [String!]

  """All values that are not contained in given list."""
  price_not_in: [String!]

  """All values less than the given value."""
  price_lt: String

  """All values less than or equal the given value."""
  price_lte: String

  """All values greater than the given value."""
  price_gt: String

  """All values greater than or equal the given value."""
  price_gte: String

  """All values containing the given string."""
  price_contains: String

  """All values not containing the given string."""
  price_not_contains: String

  """All values starting with the given string."""
  price_starts_with: String

  """All values not starting with the given string."""
  price_not_starts_with: String

  """All values ending with the given string."""
  price_ends_with: String

  """All values not ending with the given string."""
  price_not_ends_with: String
  description: String

  """All values that are not equal to given value."""
  description_not: String

  """All values that are contained in given list."""
  description_in: [String!]

  """All values that are not contained in given list."""
  description_not_in: [String!]

  """All values less than the given value."""
  description_lt: String

  """All values less than or equal the given value."""
  description_lte: String

  """All values greater than the given value."""
  description_gt: String

  """All values greater than or equal the given value."""
  description_gte: String

  """All values containing the given string."""
  description_contains: String

  """All values not containing the given string."""
  description_not_contains: String

  """All values starting with the given string."""
  description_starts_with: String

  """All values not starting with the given string."""
  description_not_starts_with: String

  """All values ending with the given string."""
  description_ends_with: String

  """All values not ending with the given string."""
  description_not_ends_with: String
  varietal: String

  """All values that are not equal to given value."""
  varietal_not: String

  """All values that are contained in given list."""
  varietal_in: [String!]

  """All values that are not contained in given list."""
  varietal_not_in: [String!]

  """All values less than the given value."""
  varietal_lt: String

  """All values less than or equal the given value."""
  varietal_lte: String

  """All values greater than the given value."""
  varietal_gt: String

  """All values greater than or equal the given value."""
  varietal_gte: String

  """All values containing the given string."""
  varietal_contains: String

  """All values not containing the given string."""
  varietal_not_contains: String

  """All values starting with the given string."""
  varietal_starts_with: String

  """All values not starting with the given string."""
  varietal_not_starts_with: String

  """All values ending with the given string."""
  varietal_ends_with: String

  """All values not ending with the given string."""
  varietal_not_ends_with: String
  vendor: UserWhereInput
  carts_every: CartWhereInput
  carts_some: CartWhereInput
  carts_none: CartWhereInput
  _MagicalBackRelation_InvoiceToProduct_every: InvoiceWhereInput
  _MagicalBackRelation_InvoiceToProduct_some: InvoiceWhereInput
  _MagicalBackRelation_InvoiceToProduct_none: InvoiceWhereInput
}

input ProductWhereUniqueInput {
  id: ID
}

type Query {
  users(where: UserWhereInput, orderBy: UserOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [User]!
  carts(where: CartWhereInput, orderBy: CartOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Cart]!
  invoices(where: InvoiceWhereInput, orderBy: InvoiceOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Invoice]!
  products(where: ProductWhereInput, orderBy: ProductOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Product]!
  user(where: UserWhereUniqueInput!): User
  cart(where: CartWhereUniqueInput!): Cart
  invoice(where: InvoiceWhereUniqueInput!): Invoice
  product(where: ProductWhereUniqueInput!): Product
  usersConnection(where: UserWhereInput, orderBy: UserOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): UserConnection!
  cartsConnection(where: CartWhereInput, orderBy: CartOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): CartConnection!
  invoicesConnection(where: InvoiceWhereInput, orderBy: InvoiceOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): InvoiceConnection!
  productsConnection(where: ProductWhereInput, orderBy: ProductOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): ProductConnection!

  """Fetches an object given its ID"""
  node(
    """The ID of an object"""
    id: ID!
  ): Node
}

type Subscription {
  user(where: UserSubscriptionWhereInput): UserSubscriptionPayload
  cart(where: CartSubscriptionWhereInput): CartSubscriptionPayload
  invoice(where: InvoiceSubscriptionWhereInput): InvoiceSubscriptionPayload
  product(where: ProductSubscriptionWhereInput): ProductSubscriptionPayload
}

type User implements Node {
  id: ID!
  role: String
  permissions: [String!]!
  email: String
  firstName: String
  lastName: String
  bizName: String
  password: String
  cart(where: CartWhereInput): Cart
  purchases(where: InvoiceWhereInput, orderBy: InvoiceOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Invoice!]
  products(where: ProductWhereInput, orderBy: ProductOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Product!]
  sales(where: InvoiceWhereInput, orderBy: InvoiceOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Invoice!]
}

"""A connection to a list of items."""
type UserConnection {
  """Information to aid in pagination."""
  pageInfo: PageInfo!

  """A list of edges."""
  edges: [UserEdge]!
  aggregate: AggregateUser!
}

input UserCreateInput {
  role: String
  email: String
  firstName: String
  lastName: String
  bizName: String
  password: String
  permissions: UserCreatepermissionsInput
  cart: CartCreateOneWithoutUserInput
  purchases: InvoiceCreateManyWithoutCustomerInput
  products: ProductCreateManyWithoutVendorInput
  sales: InvoiceCreateManyWithoutVendorsInput
}

input UserCreateManyWithoutSalesInput {
  create: [UserCreateWithoutSalesInput!]
  connect: [UserWhereUniqueInput!]
}

input UserCreateOneWithoutCartInput {
  create: UserCreateWithoutCartInput
  connect: UserWhereUniqueInput
}

input UserCreateOneWithoutProductsInput {
  create: UserCreateWithoutProductsInput
  connect: UserWhereUniqueInput
}

input UserCreateOneWithoutPurchasesInput {
  create: UserCreateWithoutPurchasesInput
  connect: UserWhereUniqueInput
}

input UserCreatepermissionsInput {
  set: [String!]
}

input UserCreateWithoutCartInput {
  role: String
  email: String
  firstName: String
  lastName: String
  bizName: String
  password: String
  permissions: UserCreatepermissionsInput
  purchases: InvoiceCreateManyWithoutCustomerInput
  products: ProductCreateManyWithoutVendorInput
  sales: InvoiceCreateManyWithoutVendorsInput
}

input UserCreateWithoutProductsInput {
  role: String
  email: String
  firstName: String
  lastName: String
  bizName: String
  password: String
  permissions: UserCreatepermissionsInput
  cart: CartCreateOneWithoutUserInput
  purchases: InvoiceCreateManyWithoutCustomerInput
  sales: InvoiceCreateManyWithoutVendorsInput
}

input UserCreateWithoutPurchasesInput {
  role: String
  email: String
  firstName: String
  lastName: String
  bizName: String
  password: String
  permissions: UserCreatepermissionsInput
  cart: CartCreateOneWithoutUserInput
  products: ProductCreateManyWithoutVendorInput
  sales: InvoiceCreateManyWithoutVendorsInput
}

input UserCreateWithoutSalesInput {
  role: String
  email: String
  firstName: String
  lastName: String
  bizName: String
  password: String
  permissions: UserCreatepermissionsInput
  cart: CartCreateOneWithoutUserInput
  purchases: InvoiceCreateManyWithoutCustomerInput
  products: ProductCreateManyWithoutVendorInput
}

"""An edge in a connection."""
type UserEdge {
  """The item at the end of the edge."""
  node: User!

  """A cursor for use in pagination."""
  cursor: String!
}

enum UserOrderByInput {
  id_ASC
  id_DESC
  role_ASC
  role_DESC
  email_ASC
  email_DESC
  firstName_ASC
  firstName_DESC
  lastName_ASC
  lastName_DESC
  bizName_ASC
  bizName_DESC
  password_ASC
  password_DESC
  updatedAt_ASC
  updatedAt_DESC
  createdAt_ASC
  createdAt_DESC
}

type UserPreviousValues {
  id: ID!
  role: String
  permissions: [String!]!
  email: String
  firstName: String
  lastName: String
  bizName: String
  password: String
}

type UserSubscriptionPayload {
  mutation: MutationType!
  node: User
  updatedFields: [String!]
  previousValues: UserPreviousValues
}

input UserSubscriptionWhereInput {
  """Logical AND on all given filters."""
  AND: [UserSubscriptionWhereInput!]

  """Logical OR on all given filters."""
  OR: [UserSubscriptionWhereInput!]

  """Logical NOT on all given filters combined by AND."""
  NOT: [UserSubscriptionWhereInput!]

  """
  The subscription event gets dispatched when it's listed in mutation_in
  """
  mutation_in: [MutationType!]

  """
  The subscription event gets only dispatched when one of the updated fields names is included in this list
  """
  updatedFields_contains: String

  """
  The subscription event gets only dispatched when all of the field names included in this list have been updated
  """
  updatedFields_contains_every: [String!]

  """
  The subscription event gets only dispatched when some of the field names included in this list have been updated
  """
  updatedFields_contains_some: [String!]
  node: UserWhereInput
}

input UserUpdateInput {
  role: String
  email: String
  firstName: String
  lastName: String
  bizName: String
  password: String
  permissions: UserUpdatepermissionsInput
  cart: CartUpdateOneWithoutUserInput
  purchases: InvoiceUpdateManyWithoutCustomerInput
  products: ProductUpdateManyWithoutVendorInput
  sales: InvoiceUpdateManyWithoutVendorsInput
}

input UserUpdateManyWithoutSalesInput {
  create: [UserCreateWithoutSalesInput!]
  connect: [UserWhereUniqueInput!]
  disconnect: [UserWhereUniqueInput!]
  delete: [UserWhereUniqueInput!]
  update: [UserUpdateWithWhereUniqueWithoutSalesInput!]
  upsert: [UserUpsertWithWhereUniqueWithoutSalesInput!]
}

input UserUpdateOneWithoutCartInput {
  create: UserCreateWithoutCartInput
  connect: UserWhereUniqueInput
  delete: Boolean
  update: UserUpdateWithoutCartDataInput
  upsert: UserUpsertWithoutCartInput
}

input UserUpdateOneWithoutProductsInput {
  create: UserCreateWithoutProductsInput
  connect: UserWhereUniqueInput
  disconnect: Boolean
  delete: Boolean
  update: UserUpdateWithoutProductsDataInput
  upsert: UserUpsertWithoutProductsInput
}

input UserUpdateOneWithoutPurchasesInput {
  create: UserCreateWithoutPurchasesInput
  connect: UserWhereUniqueInput
  disconnect: Boolean
  delete: Boolean
  update: UserUpdateWithoutPurchasesDataInput
  upsert: UserUpsertWithoutPurchasesInput
}

input UserUpdatepermissionsInput {
  set: [String!]
}

input UserUpdateWithoutCartDataInput {
  role: String
  email: String
  firstName: String
  lastName: String
  bizName: String
  password: String
  permissions: UserUpdatepermissionsInput
  purchases: InvoiceUpdateManyWithoutCustomerInput
  products: ProductUpdateManyWithoutVendorInput
  sales: InvoiceUpdateManyWithoutVendorsInput
}

input UserUpdateWithoutProductsDataInput {
  role: String
  email: String
  firstName: String
  lastName: String
  bizName: String
  password: String
  permissions: UserUpdatepermissionsInput
  cart: CartUpdateOneWithoutUserInput
  purchases: InvoiceUpdateManyWithoutCustomerInput
  sales: InvoiceUpdateManyWithoutVendorsInput
}

input UserUpdateWithoutPurchasesDataInput {
  role: String
  email: String
  firstName: String
  lastName: String
  bizName: String
  password: String
  permissions: UserUpdatepermissionsInput
  cart: CartUpdateOneWithoutUserInput
  products: ProductUpdateManyWithoutVendorInput
  sales: InvoiceUpdateManyWithoutVendorsInput
}

input UserUpdateWithoutSalesDataInput {
  role: String
  email: String
  firstName: String
  lastName: String
  bizName: String
  password: String
  permissions: UserUpdatepermissionsInput
  cart: CartUpdateOneWithoutUserInput
  purchases: InvoiceUpdateManyWithoutCustomerInput
  products: ProductUpdateManyWithoutVendorInput
}

input UserUpdateWithWhereUniqueWithoutSalesInput {
  where: UserWhereUniqueInput!
  data: UserUpdateWithoutSalesDataInput!
}

input UserUpsertWithoutCartInput {
  update: UserUpdateWithoutCartDataInput!
  create: UserCreateWithoutCartInput!
}

input UserUpsertWithoutProductsInput {
  update: UserUpdateWithoutProductsDataInput!
  create: UserCreateWithoutProductsInput!
}

input UserUpsertWithoutPurchasesInput {
  update: UserUpdateWithoutPurchasesDataInput!
  create: UserCreateWithoutPurchasesInput!
}

input UserUpsertWithWhereUniqueWithoutSalesInput {
  where: UserWhereUniqueInput!
  update: UserUpdateWithoutSalesDataInput!
  create: UserCreateWithoutSalesInput!
}

input UserWhereInput {
  """Logical AND on all given filters."""
  AND: [UserWhereInput!]

  """Logical OR on all given filters."""
  OR: [UserWhereInput!]

  """Logical NOT on all given filters combined by AND."""
  NOT: [UserWhereInput!]
  id: ID

  """All values that are not equal to given value."""
  id_not: ID

  """All values that are contained in given list."""
  id_in: [ID!]

  """All values that are not contained in given list."""
  id_not_in: [ID!]

  """All values less than the given value."""
  id_lt: ID

  """All values less than or equal the given value."""
  id_lte: ID

  """All values greater than the given value."""
  id_gt: ID

  """All values greater than or equal the given value."""
  id_gte: ID

  """All values containing the given string."""
  id_contains: ID

  """All values not containing the given string."""
  id_not_contains: ID

  """All values starting with the given string."""
  id_starts_with: ID

  """All values not starting with the given string."""
  id_not_starts_with: ID

  """All values ending with the given string."""
  id_ends_with: ID

  """All values not ending with the given string."""
  id_not_ends_with: ID
  role: String

  """All values that are not equal to given value."""
  role_not: String

  """All values that are contained in given list."""
  role_in: [String!]

  """All values that are not contained in given list."""
  role_not_in: [String!]

  """All values less than the given value."""
  role_lt: String

  """All values less than or equal the given value."""
  role_lte: String

  """All values greater than the given value."""
  role_gt: String

  """All values greater than or equal the given value."""
  role_gte: String

  """All values containing the given string."""
  role_contains: String

  """All values not containing the given string."""
  role_not_contains: String

  """All values starting with the given string."""
  role_starts_with: String

  """All values not starting with the given string."""
  role_not_starts_with: String

  """All values ending with the given string."""
  role_ends_with: String

  """All values not ending with the given string."""
  role_not_ends_with: String
  email: String

  """All values that are not equal to given value."""
  email_not: String

  """All values that are contained in given list."""
  email_in: [String!]

  """All values that are not contained in given list."""
  email_not_in: [String!]

  """All values less than the given value."""
  email_lt: String

  """All values less than or equal the given value."""
  email_lte: String

  """All values greater than the given value."""
  email_gt: String

  """All values greater than or equal the given value."""
  email_gte: String

  """All values containing the given string."""
  email_contains: String

  """All values not containing the given string."""
  email_not_contains: String

  """All values starting with the given string."""
  email_starts_with: String

  """All values not starting with the given string."""
  email_not_starts_with: String

  """All values ending with the given string."""
  email_ends_with: String

  """All values not ending with the given string."""
  email_not_ends_with: String
  firstName: String

  """All values that are not equal to given value."""
  firstName_not: String

  """All values that are contained in given list."""
  firstName_in: [String!]

  """All values that are not contained in given list."""
  firstName_not_in: [String!]

  """All values less than the given value."""
  firstName_lt: String

  """All values less than or equal the given value."""
  firstName_lte: String

  """All values greater than the given value."""
  firstName_gt: String

  """All values greater than or equal the given value."""
  firstName_gte: String

  """All values containing the given string."""
  firstName_contains: String

  """All values not containing the given string."""
  firstName_not_contains: String

  """All values starting with the given string."""
  firstName_starts_with: String

  """All values not starting with the given string."""
  firstName_not_starts_with: String

  """All values ending with the given string."""
  firstName_ends_with: String

  """All values not ending with the given string."""
  firstName_not_ends_with: String
  lastName: String

  """All values that are not equal to given value."""
  lastName_not: String

  """All values that are contained in given list."""
  lastName_in: [String!]

  """All values that are not contained in given list."""
  lastName_not_in: [String!]

  """All values less than the given value."""
  lastName_lt: String

  """All values less than or equal the given value."""
  lastName_lte: String

  """All values greater than the given value."""
  lastName_gt: String

  """All values greater than or equal the given value."""
  lastName_gte: String

  """All values containing the given string."""
  lastName_contains: String

  """All values not containing the given string."""
  lastName_not_contains: String

  """All values starting with the given string."""
  lastName_starts_with: String

  """All values not starting with the given string."""
  lastName_not_starts_with: String

  """All values ending with the given string."""
  lastName_ends_with: String

  """All values not ending with the given string."""
  lastName_not_ends_with: String
  bizName: String

  """All values that are not equal to given value."""
  bizName_not: String

  """All values that are contained in given list."""
  bizName_in: [String!]

  """All values that are not contained in given list."""
  bizName_not_in: [String!]

  """All values less than the given value."""
  bizName_lt: String

  """All values less than or equal the given value."""
  bizName_lte: String

  """All values greater than the given value."""
  bizName_gt: String

  """All values greater than or equal the given value."""
  bizName_gte: String

  """All values containing the given string."""
  bizName_contains: String

  """All values not containing the given string."""
  bizName_not_contains: String

  """All values starting with the given string."""
  bizName_starts_with: String

  """All values not starting with the given string."""
  bizName_not_starts_with: String

  """All values ending with the given string."""
  bizName_ends_with: String

  """All values not ending with the given string."""
  bizName_not_ends_with: String
  password: String

  """All values that are not equal to given value."""
  password_not: String

  """All values that are contained in given list."""
  password_in: [String!]

  """All values that are not contained in given list."""
  password_not_in: [String!]

  """All values less than the given value."""
  password_lt: String

  """All values less than or equal the given value."""
  password_lte: String

  """All values greater than the given value."""
  password_gt: String

  """All values greater than or equal the given value."""
  password_gte: String

  """All values containing the given string."""
  password_contains: String

  """All values not containing the given string."""
  password_not_contains: String

  """All values starting with the given string."""
  password_starts_with: String

  """All values not starting with the given string."""
  password_not_starts_with: String

  """All values ending with the given string."""
  password_ends_with: String

  """All values not ending with the given string."""
  password_not_ends_with: String
  cart: CartWhereInput
  purchases_every: InvoiceWhereInput
  purchases_some: InvoiceWhereInput
  purchases_none: InvoiceWhereInput
  products_every: ProductWhereInput
  products_some: ProductWhereInput
  products_none: ProductWhereInput
  sales_every: InvoiceWhereInput
  sales_some: InvoiceWhereInput
  sales_none: InvoiceWhereInput
}

input UserWhereUniqueInput {
  id: ID
  email: String
}
`

export const Prisma = makePrismaBindingClass<BindingConstructor<Prisma>>({typeDefs})

/**
 * Types
*/

export type UserOrderByInput =   'id_ASC' |
  'id_DESC' |
  'role_ASC' |
  'role_DESC' |
  'email_ASC' |
  'email_DESC' |
  'firstName_ASC' |
  'firstName_DESC' |
  'lastName_ASC' |
  'lastName_DESC' |
  'bizName_ASC' |
  'bizName_DESC' |
  'password_ASC' |
  'password_DESC' |
  'updatedAt_ASC' |
  'updatedAt_DESC' |
  'createdAt_ASC' |
  'createdAt_DESC'

export type ProductOrderByInput =   'id_ASC' |
  'id_DESC' |
  'name_ASC' |
  'name_DESC' |
  'price_ASC' |
  'price_DESC' |
  'description_ASC' |
  'description_DESC' |
  'varietal_ASC' |
  'varietal_DESC' |
  'updatedAt_ASC' |
  'updatedAt_DESC' |
  'createdAt_ASC' |
  'createdAt_DESC'

export type CartOrderByInput =   'id_ASC' |
  'id_DESC' |
  'itemCount_ASC' |
  'itemCount_DESC' |
  'totalPrice_ASC' |
  'totalPrice_DESC' |
  'updatedAt_ASC' |
  'updatedAt_DESC' |
  'createdAt_ASC' |
  'createdAt_DESC'

export type InvoiceOrderByInput =   'id_ASC' |
  'id_DESC' |
  'amount_ASC' |
  'amount_DESC' |
  'email_ASC' |
  'email_DESC' |
  'updatedAt_ASC' |
  'updatedAt_DESC' |
  'createdAt_ASC' |
  'createdAt_DESC'

export type MutationType =   'CREATED' |
  'UPDATED' |
  'DELETED'

export interface UserUpdateInput {
  role?: String
  email?: String
  firstName?: String
  lastName?: String
  bizName?: String
  password?: String
  permissions?: UserUpdatepermissionsInput
  cart?: CartUpdateOneWithoutUserInput
  purchases?: InvoiceUpdateManyWithoutCustomerInput
  products?: ProductUpdateManyWithoutVendorInput
  sales?: InvoiceUpdateManyWithoutVendorsInput
}

export interface UserWhereInput {
  AND?: UserWhereInput[] | UserWhereInput
  OR?: UserWhereInput[] | UserWhereInput
  NOT?: UserWhereInput[] | UserWhereInput
  id?: ID_Input
  id_not?: ID_Input
  id_in?: ID_Input[] | ID_Input
  id_not_in?: ID_Input[] | ID_Input
  id_lt?: ID_Input
  id_lte?: ID_Input
  id_gt?: ID_Input
  id_gte?: ID_Input
  id_contains?: ID_Input
  id_not_contains?: ID_Input
  id_starts_with?: ID_Input
  id_not_starts_with?: ID_Input
  id_ends_with?: ID_Input
  id_not_ends_with?: ID_Input
  role?: String
  role_not?: String
  role_in?: String[] | String
  role_not_in?: String[] | String
  role_lt?: String
  role_lte?: String
  role_gt?: String
  role_gte?: String
  role_contains?: String
  role_not_contains?: String
  role_starts_with?: String
  role_not_starts_with?: String
  role_ends_with?: String
  role_not_ends_with?: String
  email?: String
  email_not?: String
  email_in?: String[] | String
  email_not_in?: String[] | String
  email_lt?: String
  email_lte?: String
  email_gt?: String
  email_gte?: String
  email_contains?: String
  email_not_contains?: String
  email_starts_with?: String
  email_not_starts_with?: String
  email_ends_with?: String
  email_not_ends_with?: String
  firstName?: String
  firstName_not?: String
  firstName_in?: String[] | String
  firstName_not_in?: String[] | String
  firstName_lt?: String
  firstName_lte?: String
  firstName_gt?: String
  firstName_gte?: String
  firstName_contains?: String
  firstName_not_contains?: String
  firstName_starts_with?: String
  firstName_not_starts_with?: String
  firstName_ends_with?: String
  firstName_not_ends_with?: String
  lastName?: String
  lastName_not?: String
  lastName_in?: String[] | String
  lastName_not_in?: String[] | String
  lastName_lt?: String
  lastName_lte?: String
  lastName_gt?: String
  lastName_gte?: String
  lastName_contains?: String
  lastName_not_contains?: String
  lastName_starts_with?: String
  lastName_not_starts_with?: String
  lastName_ends_with?: String
  lastName_not_ends_with?: String
  bizName?: String
  bizName_not?: String
  bizName_in?: String[] | String
  bizName_not_in?: String[] | String
  bizName_lt?: String
  bizName_lte?: String
  bizName_gt?: String
  bizName_gte?: String
  bizName_contains?: String
  bizName_not_contains?: String
  bizName_starts_with?: String
  bizName_not_starts_with?: String
  bizName_ends_with?: String
  bizName_not_ends_with?: String
  password?: String
  password_not?: String
  password_in?: String[] | String
  password_not_in?: String[] | String
  password_lt?: String
  password_lte?: String
  password_gt?: String
  password_gte?: String
  password_contains?: String
  password_not_contains?: String
  password_starts_with?: String
  password_not_starts_with?: String
  password_ends_with?: String
  password_not_ends_with?: String
  cart?: CartWhereInput
  purchases_every?: InvoiceWhereInput
  purchases_some?: InvoiceWhereInput
  purchases_none?: InvoiceWhereInput
  products_every?: ProductWhereInput
  products_some?: ProductWhereInput
  products_none?: ProductWhereInput
  sales_every?: InvoiceWhereInput
  sales_some?: InvoiceWhereInput
  sales_none?: InvoiceWhereInput
}

export interface CartUpdateWithoutUserDataInput {
  itemCount?: Int
  totalPrice?: String
  items?: ProductUpdateManyWithoutCartsInput
}

export interface InvoiceWhereInput {
  AND?: InvoiceWhereInput[] | InvoiceWhereInput
  OR?: InvoiceWhereInput[] | InvoiceWhereInput
  NOT?: InvoiceWhereInput[] | InvoiceWhereInput
  id?: ID_Input
  id_not?: ID_Input
  id_in?: ID_Input[] | ID_Input
  id_not_in?: ID_Input[] | ID_Input
  id_lt?: ID_Input
  id_lte?: ID_Input
  id_gt?: ID_Input
  id_gte?: ID_Input
  id_contains?: ID_Input
  id_not_contains?: ID_Input
  id_starts_with?: ID_Input
  id_not_starts_with?: ID_Input
  id_ends_with?: ID_Input
  id_not_ends_with?: ID_Input
  amount?: String
  amount_not?: String
  amount_in?: String[] | String
  amount_not_in?: String[] | String
  amount_lt?: String
  amount_lte?: String
  amount_gt?: String
  amount_gte?: String
  amount_contains?: String
  amount_not_contains?: String
  amount_starts_with?: String
  amount_not_starts_with?: String
  amount_ends_with?: String
  amount_not_ends_with?: String
  email?: String
  email_not?: String
  email_in?: String[] | String
  email_not_in?: String[] | String
  email_lt?: String
  email_lte?: String
  email_gt?: String
  email_gte?: String
  email_contains?: String
  email_not_contains?: String
  email_starts_with?: String
  email_not_starts_with?: String
  email_ends_with?: String
  email_not_ends_with?: String
  items_every?: ProductWhereInput
  items_some?: ProductWhereInput
  items_none?: ProductWhereInput
  customer?: UserWhereInput
  vendors_every?: UserWhereInput
  vendors_some?: UserWhereInput
  vendors_none?: UserWhereInput
}

export interface UserCreateWithoutCartInput {
  role?: String
  email?: String
  firstName?: String
  lastName?: String
  bizName?: String
  password?: String
  permissions?: UserCreatepermissionsInput
  purchases?: InvoiceCreateManyWithoutCustomerInput
  products?: ProductCreateManyWithoutVendorInput
  sales?: InvoiceCreateManyWithoutVendorsInput
}

export interface UserUpdateWithoutPurchasesDataInput {
  role?: String
  email?: String
  firstName?: String
  lastName?: String
  bizName?: String
  password?: String
  permissions?: UserUpdatepermissionsInput
  cart?: CartUpdateOneWithoutUserInput
  products?: ProductUpdateManyWithoutVendorInput
  sales?: InvoiceUpdateManyWithoutVendorsInput
}

export interface ProductCreateManyWithoutVendorInput {
  create?: ProductCreateWithoutVendorInput[] | ProductCreateWithoutVendorInput
  connect?: ProductWhereUniqueInput[] | ProductWhereUniqueInput
}

export interface ProductUpdateManyWithoutCartsInput {
  create?: ProductCreateWithoutCartsInput[] | ProductCreateWithoutCartsInput
  connect?: ProductWhereUniqueInput[] | ProductWhereUniqueInput
  disconnect?: ProductWhereUniqueInput[] | ProductWhereUniqueInput
  delete?: ProductWhereUniqueInput[] | ProductWhereUniqueInput
  update?: ProductUpdateWithWhereUniqueWithoutCartsInput[] | ProductUpdateWithWhereUniqueWithoutCartsInput
  upsert?: ProductUpsertWithWhereUniqueWithoutCartsInput[] | ProductUpsertWithWhereUniqueWithoutCartsInput
}

export interface ProductCreateWithoutVendorInput {
  name?: String
  price?: String
  description?: String
  varietal?: String
  carts?: CartCreateManyWithoutItemsInput
}

export interface ProductSubscriptionWhereInput {
  AND?: ProductSubscriptionWhereInput[] | ProductSubscriptionWhereInput
  OR?: ProductSubscriptionWhereInput[] | ProductSubscriptionWhereInput
  NOT?: ProductSubscriptionWhereInput[] | ProductSubscriptionWhereInput
  mutation_in?: MutationType[] | MutationType
  updatedFields_contains?: String
  updatedFields_contains_every?: String[] | String
  updatedFields_contains_some?: String[] | String
  node?: ProductWhereInput
}

export interface InvoiceCreateManyWithoutVendorsInput {
  create?: InvoiceCreateWithoutVendorsInput[] | InvoiceCreateWithoutVendorsInput
  connect?: InvoiceWhereUniqueInput[] | InvoiceWhereUniqueInput
}

export interface CartWhereInput {
  AND?: CartWhereInput[] | CartWhereInput
  OR?: CartWhereInput[] | CartWhereInput
  NOT?: CartWhereInput[] | CartWhereInput
  id?: ID_Input
  id_not?: ID_Input
  id_in?: ID_Input[] | ID_Input
  id_not_in?: ID_Input[] | ID_Input
  id_lt?: ID_Input
  id_lte?: ID_Input
  id_gt?: ID_Input
  id_gte?: ID_Input
  id_contains?: ID_Input
  id_not_contains?: ID_Input
  id_starts_with?: ID_Input
  id_not_starts_with?: ID_Input
  id_ends_with?: ID_Input
  id_not_ends_with?: ID_Input
  itemCount?: Int
  itemCount_not?: Int
  itemCount_in?: Int[] | Int
  itemCount_not_in?: Int[] | Int
  itemCount_lt?: Int
  itemCount_lte?: Int
  itemCount_gt?: Int
  itemCount_gte?: Int
  totalPrice?: String
  totalPrice_not?: String
  totalPrice_in?: String[] | String
  totalPrice_not_in?: String[] | String
  totalPrice_lt?: String
  totalPrice_lte?: String
  totalPrice_gt?: String
  totalPrice_gte?: String
  totalPrice_contains?: String
  totalPrice_not_contains?: String
  totalPrice_starts_with?: String
  totalPrice_not_starts_with?: String
  totalPrice_ends_with?: String
  totalPrice_not_ends_with?: String
  items_every?: ProductWhereInput
  items_some?: ProductWhereInput
  items_none?: ProductWhereInput
  user?: UserWhereInput
}

export interface InvoiceCreateWithoutVendorsInput {
  amount?: String
  email: String
  items?: ProductCreateManyInput
  customer?: UserCreateOneWithoutPurchasesInput
}

export interface UserWhereUniqueInput {
  id?: ID_Input
  email?: String
}

export interface UserCreateOneWithoutPurchasesInput {
  create?: UserCreateWithoutPurchasesInput
  connect?: UserWhereUniqueInput
}

export interface InvoiceWhereUniqueInput {
  id?: ID_Input
}

export interface UserCreateWithoutPurchasesInput {
  role?: String
  email?: String
  firstName?: String
  lastName?: String
  bizName?: String
  password?: String
  permissions?: UserCreatepermissionsInput
  cart?: CartCreateOneWithoutUserInput
  products?: ProductCreateManyWithoutVendorInput
  sales?: InvoiceCreateManyWithoutVendorsInput
}

export interface UserSubscriptionWhereInput {
  AND?: UserSubscriptionWhereInput[] | UserSubscriptionWhereInput
  OR?: UserSubscriptionWhereInput[] | UserSubscriptionWhereInput
  NOT?: UserSubscriptionWhereInput[] | UserSubscriptionWhereInput
  mutation_in?: MutationType[] | MutationType
  updatedFields_contains?: String
  updatedFields_contains_every?: String[] | String
  updatedFields_contains_some?: String[] | String
  node?: UserWhereInput
}

export interface UserCreateManyWithoutSalesInput {
  create?: UserCreateWithoutSalesInput[] | UserCreateWithoutSalesInput
  connect?: UserWhereUniqueInput[] | UserWhereUniqueInput
}

export interface InvoiceUpdateInput {
  amount?: String
  email?: String
  items?: ProductUpdateManyInput
  customer?: UserUpdateOneWithoutPurchasesInput
  vendors?: UserUpdateManyWithoutSalesInput
}

export interface UserCreateWithoutSalesInput {
  role?: String
  email?: String
  firstName?: String
  lastName?: String
  bizName?: String
  password?: String
  permissions?: UserCreatepermissionsInput
  cart?: CartCreateOneWithoutUserInput
  purchases?: InvoiceCreateManyWithoutCustomerInput
  products?: ProductCreateManyWithoutVendorInput
}

export interface CartUpsertWithoutUserInput {
  update: CartUpdateWithoutUserDataInput
  create: CartCreateWithoutUserInput
}

export interface CartCreateInput {
  itemCount?: Int
  totalPrice?: String
  items?: ProductCreateManyWithoutCartsInput
  user: UserCreateOneWithoutCartInput
}

export interface UserUpsertWithoutProductsInput {
  update: UserUpdateWithoutProductsDataInput
  create: UserCreateWithoutProductsInput
}

export interface InvoiceCreateInput {
  amount?: String
  email: String
  items?: ProductCreateManyInput
  customer?: UserCreateOneWithoutPurchasesInput
  vendors?: UserCreateManyWithoutSalesInput
}

export interface UserUpsertWithWhereUniqueWithoutSalesInput {
  where: UserWhereUniqueInput
  update: UserUpdateWithoutSalesDataInput
  create: UserCreateWithoutSalesInput
}

export interface UserUpsertWithoutCartInput {
  update: UserUpdateWithoutCartDataInput
  create: UserCreateWithoutCartInput
}

export interface UserUpdateWithWhereUniqueWithoutSalesInput {
  where: UserWhereUniqueInput
  data: UserUpdateWithoutSalesDataInput
}

export interface UserUpdatepermissionsInput {
  set?: String[] | String
}

export interface ProductUpsertWithWhereUniqueNestedInput {
  where: ProductWhereUniqueInput
  update: ProductUpdateDataInput
  create: ProductCreateInput
}

export interface CartUpdateOneWithoutUserInput {
  create?: CartCreateWithoutUserInput
  connect?: CartWhereUniqueInput
  disconnect?: Boolean
  delete?: Boolean
  update?: CartUpdateWithoutUserDataInput
  upsert?: CartUpsertWithoutUserInput
}

export interface UserCreateInput {
  role?: String
  email?: String
  firstName?: String
  lastName?: String
  bizName?: String
  password?: String
  permissions?: UserCreatepermissionsInput
  cart?: CartCreateOneWithoutUserInput
  purchases?: InvoiceCreateManyWithoutCustomerInput
  products?: ProductCreateManyWithoutVendorInput
  sales?: InvoiceCreateManyWithoutVendorsInput
}

export interface InvoiceUpsertWithWhereUniqueWithoutVendorsInput {
  where: InvoiceWhereUniqueInput
  update: InvoiceUpdateWithoutVendorsDataInput
  create: InvoiceCreateWithoutVendorsInput
}

export interface CartCreateOneWithoutUserInput {
  create?: CartCreateWithoutUserInput
  connect?: CartWhereUniqueInput
}

export interface UserUpsertWithoutPurchasesInput {
  update: UserUpdateWithoutPurchasesDataInput
  create: UserCreateWithoutPurchasesInput
}

export interface ProductCreateManyWithoutCartsInput {
  create?: ProductCreateWithoutCartsInput[] | ProductCreateWithoutCartsInput
  connect?: ProductWhereUniqueInput[] | ProductWhereUniqueInput
}

export interface ProductUpdateWithWhereUniqueWithoutCartsInput {
  where: ProductWhereUniqueInput
  data: ProductUpdateWithoutCartsDataInput
}

export interface UserCreateOneWithoutProductsInput {
  create?: UserCreateWithoutProductsInput
  connect?: UserWhereUniqueInput
}

export interface ProductUpdateWithoutCartsDataInput {
  name?: String
  price?: String
  description?: String
  varietal?: String
  vendor?: UserUpdateOneWithoutProductsInput
}

export interface InvoiceCreateManyWithoutCustomerInput {
  create?: InvoiceCreateWithoutCustomerInput[] | InvoiceCreateWithoutCustomerInput
  connect?: InvoiceWhereUniqueInput[] | InvoiceWhereUniqueInput
}

export interface UserUpdateOneWithoutProductsInput {
  create?: UserCreateWithoutProductsInput
  connect?: UserWhereUniqueInput
  disconnect?: Boolean
  delete?: Boolean
  update?: UserUpdateWithoutProductsDataInput
  upsert?: UserUpsertWithoutProductsInput
}

export interface ProductCreateManyInput {
  create?: ProductCreateInput[] | ProductCreateInput
  connect?: ProductWhereUniqueInput[] | ProductWhereUniqueInput
}

export interface UserUpdateWithoutProductsDataInput {
  role?: String
  email?: String
  firstName?: String
  lastName?: String
  bizName?: String
  password?: String
  permissions?: UserUpdatepermissionsInput
  cart?: CartUpdateOneWithoutUserInput
  purchases?: InvoiceUpdateManyWithoutCustomerInput
  sales?: InvoiceUpdateManyWithoutVendorsInput
}

export interface CartCreateManyWithoutItemsInput {
  create?: CartCreateWithoutItemsInput[] | CartCreateWithoutItemsInput
  connect?: CartWhereUniqueInput[] | CartWhereUniqueInput
}

export interface InvoiceUpdateManyWithoutCustomerInput {
  create?: InvoiceCreateWithoutCustomerInput[] | InvoiceCreateWithoutCustomerInput
  connect?: InvoiceWhereUniqueInput[] | InvoiceWhereUniqueInput
  disconnect?: InvoiceWhereUniqueInput[] | InvoiceWhereUniqueInput
  delete?: InvoiceWhereUniqueInput[] | InvoiceWhereUniqueInput
  update?: InvoiceUpdateWithWhereUniqueWithoutCustomerInput[] | InvoiceUpdateWithWhereUniqueWithoutCustomerInput
  upsert?: InvoiceUpsertWithWhereUniqueWithoutCustomerInput[] | InvoiceUpsertWithWhereUniqueWithoutCustomerInput
}

export interface UserCreateOneWithoutCartInput {
  create?: UserCreateWithoutCartInput
  connect?: UserWhereUniqueInput
}

export interface InvoiceUpdateWithWhereUniqueWithoutCustomerInput {
  where: InvoiceWhereUniqueInput
  data: InvoiceUpdateWithoutCustomerDataInput
}

export interface InvoiceSubscriptionWhereInput {
  AND?: InvoiceSubscriptionWhereInput[] | InvoiceSubscriptionWhereInput
  OR?: InvoiceSubscriptionWhereInput[] | InvoiceSubscriptionWhereInput
  NOT?: InvoiceSubscriptionWhereInput[] | InvoiceSubscriptionWhereInput
  mutation_in?: MutationType[] | MutationType
  updatedFields_contains?: String
  updatedFields_contains_every?: String[] | String
  updatedFields_contains_some?: String[] | String
  node?: InvoiceWhereInput
}

export interface InvoiceUpdateWithoutCustomerDataInput {
  amount?: String
  email?: String
  items?: ProductUpdateManyInput
  vendors?: UserUpdateManyWithoutSalesInput
}

export interface CartWhereUniqueInput {
  id?: ID_Input
}

export interface ProductUpdateManyInput {
  create?: ProductCreateInput[] | ProductCreateInput
  connect?: ProductWhereUniqueInput[] | ProductWhereUniqueInput
  disconnect?: ProductWhereUniqueInput[] | ProductWhereUniqueInput
  delete?: ProductWhereUniqueInput[] | ProductWhereUniqueInput
  update?: ProductUpdateWithWhereUniqueNestedInput[] | ProductUpdateWithWhereUniqueNestedInput
  upsert?: ProductUpsertWithWhereUniqueNestedInput[] | ProductUpsertWithWhereUniqueNestedInput
}

export interface ProductUpdateInput {
  name?: String
  price?: String
  description?: String
  varietal?: String
  vendor?: UserUpdateOneWithoutProductsInput
  carts?: CartUpdateManyWithoutItemsInput
}

export interface ProductUpdateWithWhereUniqueNestedInput {
  where: ProductWhereUniqueInput
  data: ProductUpdateDataInput
}

export interface ProductUpsertWithWhereUniqueWithoutCartsInput {
  where: ProductWhereUniqueInput
  update: ProductUpdateWithoutCartsDataInput
  create: ProductCreateWithoutCartsInput
}

export interface ProductUpdateDataInput {
  name?: String
  price?: String
  description?: String
  varietal?: String
  vendor?: UserUpdateOneWithoutProductsInput
  carts?: CartUpdateManyWithoutItemsInput
}

export interface UserUpdateWithoutSalesDataInput {
  role?: String
  email?: String
  firstName?: String
  lastName?: String
  bizName?: String
  password?: String
  permissions?: UserUpdatepermissionsInput
  cart?: CartUpdateOneWithoutUserInput
  purchases?: InvoiceUpdateManyWithoutCustomerInput
  products?: ProductUpdateManyWithoutVendorInput
}

export interface CartUpdateManyWithoutItemsInput {
  create?: CartCreateWithoutItemsInput[] | CartCreateWithoutItemsInput
  connect?: CartWhereUniqueInput[] | CartWhereUniqueInput
  disconnect?: CartWhereUniqueInput[] | CartWhereUniqueInput
  delete?: CartWhereUniqueInput[] | CartWhereUniqueInput
  update?: CartUpdateWithWhereUniqueWithoutItemsInput[] | CartUpdateWithWhereUniqueWithoutItemsInput
  upsert?: CartUpsertWithWhereUniqueWithoutItemsInput[] | CartUpsertWithWhereUniqueWithoutItemsInput
}

export interface CartUpsertWithWhereUniqueWithoutItemsInput {
  where: CartWhereUniqueInput
  update: CartUpdateWithoutItemsDataInput
  create: CartCreateWithoutItemsInput
}

export interface CartUpdateWithWhereUniqueWithoutItemsInput {
  where: CartWhereUniqueInput
  data: CartUpdateWithoutItemsDataInput
}

export interface CartCreateWithoutUserInput {
  itemCount?: Int
  totalPrice?: String
  items?: ProductCreateManyWithoutCartsInput
}

export interface CartUpdateWithoutItemsDataInput {
  itemCount?: Int
  totalPrice?: String
  user?: UserUpdateOneWithoutCartInput
}

export interface UserCreateWithoutProductsInput {
  role?: String
  email?: String
  firstName?: String
  lastName?: String
  bizName?: String
  password?: String
  permissions?: UserCreatepermissionsInput
  cart?: CartCreateOneWithoutUserInput
  purchases?: InvoiceCreateManyWithoutCustomerInput
  sales?: InvoiceCreateManyWithoutVendorsInput
}

export interface UserUpdateOneWithoutCartInput {
  create?: UserCreateWithoutCartInput
  connect?: UserWhereUniqueInput
  delete?: Boolean
  update?: UserUpdateWithoutCartDataInput
  upsert?: UserUpsertWithoutCartInput
}

export interface ProductCreateInput {
  name?: String
  price?: String
  description?: String
  varietal?: String
  vendor?: UserCreateOneWithoutProductsInput
  carts?: CartCreateManyWithoutItemsInput
}

export interface UserUpdateWithoutCartDataInput {
  role?: String
  email?: String
  firstName?: String
  lastName?: String
  bizName?: String
  password?: String
  permissions?: UserUpdatepermissionsInput
  purchases?: InvoiceUpdateManyWithoutCustomerInput
  products?: ProductUpdateManyWithoutVendorInput
  sales?: InvoiceUpdateManyWithoutVendorsInput
}

export interface ProductWhereInput {
  AND?: ProductWhereInput[] | ProductWhereInput
  OR?: ProductWhereInput[] | ProductWhereInput
  NOT?: ProductWhereInput[] | ProductWhereInput
  id?: ID_Input
  id_not?: ID_Input
  id_in?: ID_Input[] | ID_Input
  id_not_in?: ID_Input[] | ID_Input
  id_lt?: ID_Input
  id_lte?: ID_Input
  id_gt?: ID_Input
  id_gte?: ID_Input
  id_contains?: ID_Input
  id_not_contains?: ID_Input
  id_starts_with?: ID_Input
  id_not_starts_with?: ID_Input
  id_ends_with?: ID_Input
  id_not_ends_with?: ID_Input
  name?: String
  name_not?: String
  name_in?: String[] | String
  name_not_in?: String[] | String
  name_lt?: String
  name_lte?: String
  name_gt?: String
  name_gte?: String
  name_contains?: String
  name_not_contains?: String
  name_starts_with?: String
  name_not_starts_with?: String
  name_ends_with?: String
  name_not_ends_with?: String
  price?: String
  price_not?: String
  price_in?: String[] | String
  price_not_in?: String[] | String
  price_lt?: String
  price_lte?: String
  price_gt?: String
  price_gte?: String
  price_contains?: String
  price_not_contains?: String
  price_starts_with?: String
  price_not_starts_with?: String
  price_ends_with?: String
  price_not_ends_with?: String
  description?: String
  description_not?: String
  description_in?: String[] | String
  description_not_in?: String[] | String
  description_lt?: String
  description_lte?: String
  description_gt?: String
  description_gte?: String
  description_contains?: String
  description_not_contains?: String
  description_starts_with?: String
  description_not_starts_with?: String
  description_ends_with?: String
  description_not_ends_with?: String
  varietal?: String
  varietal_not?: String
  varietal_in?: String[] | String
  varietal_not_in?: String[] | String
  varietal_lt?: String
  varietal_lte?: String
  varietal_gt?: String
  varietal_gte?: String
  varietal_contains?: String
  varietal_not_contains?: String
  varietal_starts_with?: String
  varietal_not_starts_with?: String
  varietal_ends_with?: String
  varietal_not_ends_with?: String
  vendor?: UserWhereInput
  carts_every?: CartWhereInput
  carts_some?: CartWhereInput
  carts_none?: CartWhereInput
  _MagicalBackRelation_InvoiceToProduct_every?: InvoiceWhereInput
  _MagicalBackRelation_InvoiceToProduct_some?: InvoiceWhereInput
  _MagicalBackRelation_InvoiceToProduct_none?: InvoiceWhereInput
}

export interface ProductUpdateManyWithoutVendorInput {
  create?: ProductCreateWithoutVendorInput[] | ProductCreateWithoutVendorInput
  connect?: ProductWhereUniqueInput[] | ProductWhereUniqueInput
  disconnect?: ProductWhereUniqueInput[] | ProductWhereUniqueInput
  delete?: ProductWhereUniqueInput[] | ProductWhereUniqueInput
  update?: ProductUpdateWithWhereUniqueWithoutVendorInput[] | ProductUpdateWithWhereUniqueWithoutVendorInput
  upsert?: ProductUpsertWithWhereUniqueWithoutVendorInput[] | ProductUpsertWithWhereUniqueWithoutVendorInput
}

export interface ProductWhereUniqueInput {
  id?: ID_Input
}

export interface ProductUpdateWithWhereUniqueWithoutVendorInput {
  where: ProductWhereUniqueInput
  data: ProductUpdateWithoutVendorDataInput
}

export interface InvoiceUpsertWithWhereUniqueWithoutCustomerInput {
  where: InvoiceWhereUniqueInput
  update: InvoiceUpdateWithoutCustomerDataInput
  create: InvoiceCreateWithoutCustomerInput
}

export interface ProductUpdateWithoutVendorDataInput {
  name?: String
  price?: String
  description?: String
  varietal?: String
  carts?: CartUpdateManyWithoutItemsInput
}

export interface UserCreatepermissionsInput {
  set?: String[] | String
}

export interface ProductUpsertWithWhereUniqueWithoutVendorInput {
  where: ProductWhereUniqueInput
  update: ProductUpdateWithoutVendorDataInput
  create: ProductCreateWithoutVendorInput
}

export interface InvoiceCreateWithoutCustomerInput {
  amount?: String
  email: String
  items?: ProductCreateManyInput
  vendors?: UserCreateManyWithoutSalesInput
}

export interface CartSubscriptionWhereInput {
  AND?: CartSubscriptionWhereInput[] | CartSubscriptionWhereInput
  OR?: CartSubscriptionWhereInput[] | CartSubscriptionWhereInput
  NOT?: CartSubscriptionWhereInput[] | CartSubscriptionWhereInput
  mutation_in?: MutationType[] | MutationType
  updatedFields_contains?: String
  updatedFields_contains_every?: String[] | String
  updatedFields_contains_some?: String[] | String
  node?: CartWhereInput
}

export interface UserUpdateOneWithoutPurchasesInput {
  create?: UserCreateWithoutPurchasesInput
  connect?: UserWhereUniqueInput
  disconnect?: Boolean
  delete?: Boolean
  update?: UserUpdateWithoutPurchasesDataInput
  upsert?: UserUpsertWithoutPurchasesInput
}

export interface InvoiceUpdateWithoutVendorsDataInput {
  amount?: String
  email?: String
  items?: ProductUpdateManyInput
  customer?: UserUpdateOneWithoutPurchasesInput
}

export interface InvoiceUpdateWithWhereUniqueWithoutVendorsInput {
  where: InvoiceWhereUniqueInput
  data: InvoiceUpdateWithoutVendorsDataInput
}

export interface InvoiceUpdateManyWithoutVendorsInput {
  create?: InvoiceCreateWithoutVendorsInput[] | InvoiceCreateWithoutVendorsInput
  connect?: InvoiceWhereUniqueInput[] | InvoiceWhereUniqueInput
  disconnect?: InvoiceWhereUniqueInput[] | InvoiceWhereUniqueInput
  delete?: InvoiceWhereUniqueInput[] | InvoiceWhereUniqueInput
  update?: InvoiceUpdateWithWhereUniqueWithoutVendorsInput[] | InvoiceUpdateWithWhereUniqueWithoutVendorsInput
  upsert?: InvoiceUpsertWithWhereUniqueWithoutVendorsInput[] | InvoiceUpsertWithWhereUniqueWithoutVendorsInput
}

export interface CartUpdateInput {
  itemCount?: Int
  totalPrice?: String
  items?: ProductUpdateManyWithoutCartsInput
  user?: UserUpdateOneWithoutCartInput
}

export interface CartCreateWithoutItemsInput {
  itemCount?: Int
  totalPrice?: String
  user: UserCreateOneWithoutCartInput
}

export interface ProductCreateWithoutCartsInput {
  name?: String
  price?: String
  description?: String
  varietal?: String
  vendor?: UserCreateOneWithoutProductsInput
}

export interface UserUpdateManyWithoutSalesInput {
  create?: UserCreateWithoutSalesInput[] | UserCreateWithoutSalesInput
  connect?: UserWhereUniqueInput[] | UserWhereUniqueInput
  disconnect?: UserWhereUniqueInput[] | UserWhereUniqueInput
  delete?: UserWhereUniqueInput[] | UserWhereUniqueInput
  update?: UserUpdateWithWhereUniqueWithoutSalesInput[] | UserUpdateWithWhereUniqueWithoutSalesInput
  upsert?: UserUpsertWithWhereUniqueWithoutSalesInput[] | UserUpsertWithWhereUniqueWithoutSalesInput
}

/*
 * An object with an ID

 */
export interface Node {
  id: ID_Output
}

/*
 * Information about pagination in a connection.

 */
export interface PageInfo {
  hasNextPage: Boolean
  hasPreviousPage: Boolean
  startCursor?: String
  endCursor?: String
}

export interface ProductPreviousValues {
  id: ID_Output
  name?: String
  price?: String
  description?: String
  varietal?: String
}

export interface BatchPayload {
  count: Long
}

export interface Cart extends Node {
  id: ID_Output
  itemCount?: Int
  totalPrice?: String
  items?: Product[]
  user: User
}

export interface AggregateProduct {
  count: Int
}

export interface InvoiceSubscriptionPayload {
  mutation: MutationType
  node?: Invoice
  updatedFields?: String[]
  previousValues?: InvoicePreviousValues
}

/*
 * A connection to a list of items.

 */
export interface ProductConnection {
  pageInfo: PageInfo
  edges: ProductEdge[]
  aggregate: AggregateProduct
}

/*
 * An edge in a connection.

 */
export interface ProductEdge {
  node: Product
  cursor: String
}

/*
 * A connection to a list of items.

 */
export interface UserConnection {
  pageInfo: PageInfo
  edges: UserEdge[]
  aggregate: AggregateUser
}

/*
 * An edge in a connection.

 */
export interface InvoiceEdge {
  node: Invoice
  cursor: String
}

export interface Product extends Node {
  id: ID_Output
  name?: String
  price?: String
  description?: String
  varietal?: String
  vendor?: User
  carts?: Cart[]
}

export interface AggregateCart {
  count: Int
}

export interface UserSubscriptionPayload {
  mutation: MutationType
  node?: User
  updatedFields?: String[]
  previousValues?: UserPreviousValues
}

/*
 * A connection to a list of items.

 */
export interface CartConnection {
  pageInfo: PageInfo
  edges: CartEdge[]
  aggregate: AggregateCart
}

export interface UserPreviousValues {
  id: ID_Output
  role?: String
  permissions: String[]
  email?: String
  firstName?: String
  lastName?: String
  bizName?: String
  password?: String
}

/*
 * An edge in a connection.

 */
export interface UserEdge {
  node: User
  cursor: String
}

export interface User extends Node {
  id: ID_Output
  role?: String
  permissions: String[]
  email?: String
  firstName?: String
  lastName?: String
  bizName?: String
  password?: String
  cart?: Cart
  purchases?: Invoice[]
  products?: Product[]
  sales?: Invoice[]
}

export interface InvoicePreviousValues {
  id: ID_Output
  amount?: String
  email: String
}

export interface CartPreviousValues {
  id: ID_Output
  itemCount?: Int
  totalPrice?: String
}

export interface CartSubscriptionPayload {
  mutation: MutationType
  node?: Cart
  updatedFields?: String[]
  previousValues?: CartPreviousValues
}

export interface Invoice extends Node {
  id: ID_Output
  items?: Product[]
  amount?: String
  email: String
  customer?: User
  vendors?: User[]
}

export interface AggregateInvoice {
  count: Int
}

export interface ProductSubscriptionPayload {
  mutation: MutationType
  node?: Product
  updatedFields?: String[]
  previousValues?: ProductPreviousValues
}

export interface AggregateUser {
  count: Int
}

/*
 * An edge in a connection.

 */
export interface CartEdge {
  node: Cart
  cursor: String
}

/*
 * A connection to a list of items.

 */
export interface InvoiceConnection {
  pageInfo: PageInfo
  edges: InvoiceEdge[]
  aggregate: AggregateInvoice
}

/*
The `Long` scalar type represents non-fractional signed whole numeric values.
Long can represent values between -(2^63) and 2^63 - 1.
*/
export type Long = string

/*
The `ID` scalar type represents a unique identifier, often used to refetch an object or as key for a cache. The ID type appears in a JSON response as a String; however, it is not intended to be human-readable. When expected as an input type, any string (such as `"4"`) or integer (such as `4`) input value will be accepted as an ID.
*/
export type ID_Input = string | number
export type ID_Output = string

/*
The `Boolean` scalar type represents `true` or `false`.
*/
export type Boolean = boolean

/*
The `String` scalar type represents textual data, represented as UTF-8 character sequences. The String type is most often used by GraphQL to represent free-form human-readable text.
*/
export type String = string

/*
The `Int` scalar type represents non-fractional signed whole numeric values. Int can represent values between -(2^31) and 2^31 - 1. 
*/
export type Int = number