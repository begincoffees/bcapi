export const typeDefs = /* GraphQL */ `type AggregateCart {
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
  count: Long!
}

type Cart {
  id: ID!
  itemCount: Int
  totalPrice: String
  items(where: ProductWhereInput, orderBy: ProductOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Product!]
  user: User!
}

type CartConnection {
  pageInfo: PageInfo!
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

type CartEdge {
  node: Cart!
  cursor: String!
}

enum CartOrderByInput {
  id_ASC
  id_DESC
  itemCount_ASC
  itemCount_DESC
  totalPrice_ASC
  totalPrice_DESC
  createdAt_ASC
  createdAt_DESC
  updatedAt_ASC
  updatedAt_DESC
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
  mutation_in: [MutationType!]
  updatedFields_contains: String
  updatedFields_contains_every: [String!]
  updatedFields_contains_some: [String!]
  node: CartWhereInput
  AND: [CartSubscriptionWhereInput!]
  OR: [CartSubscriptionWhereInput!]
  NOT: [CartSubscriptionWhereInput!]
}

input CartUpdateInput {
  itemCount: Int
  totalPrice: String
  items: ProductUpdateManyWithoutCartsInput
  user: UserUpdateOneRequiredWithoutCartInput
}

input CartUpdateManyMutationInput {
  itemCount: Int
  totalPrice: String
}

input CartUpdateManyWithoutItemsInput {
  create: [CartCreateWithoutItemsInput!]
  delete: [CartWhereUniqueInput!]
  connect: [CartWhereUniqueInput!]
  disconnect: [CartWhereUniqueInput!]
  update: [CartUpdateWithWhereUniqueWithoutItemsInput!]
  upsert: [CartUpsertWithWhereUniqueWithoutItemsInput!]
}

input CartUpdateOneWithoutUserInput {
  create: CartCreateWithoutUserInput
  update: CartUpdateWithoutUserDataInput
  upsert: CartUpsertWithoutUserInput
  delete: Boolean
  disconnect: Boolean
  connect: CartWhereUniqueInput
}

input CartUpdateWithoutItemsDataInput {
  itemCount: Int
  totalPrice: String
  user: UserUpdateOneRequiredWithoutCartInput
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
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  itemCount: Int
  itemCount_not: Int
  itemCount_in: [Int!]
  itemCount_not_in: [Int!]
  itemCount_lt: Int
  itemCount_lte: Int
  itemCount_gt: Int
  itemCount_gte: Int
  totalPrice: String
  totalPrice_not: String
  totalPrice_in: [String!]
  totalPrice_not_in: [String!]
  totalPrice_lt: String
  totalPrice_lte: String
  totalPrice_gt: String
  totalPrice_gte: String
  totalPrice_contains: String
  totalPrice_not_contains: String
  totalPrice_starts_with: String
  totalPrice_not_starts_with: String
  totalPrice_ends_with: String
  totalPrice_not_ends_with: String
  items_every: ProductWhereInput
  items_some: ProductWhereInput
  items_none: ProductWhereInput
  user: UserWhereInput
  AND: [CartWhereInput!]
  OR: [CartWhereInput!]
  NOT: [CartWhereInput!]
}

input CartWhereUniqueInput {
  id: ID
}

type Invoice {
  id: ID!
  items(where: ProductWhereInput, orderBy: ProductOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Product!]
  amount: String
  email: String!
  customer: User
  vendors(where: UserWhereInput, orderBy: UserOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [User!]
}

type InvoiceConnection {
  pageInfo: PageInfo!
  edges: [InvoiceEdge]!
  aggregate: AggregateInvoice!
}

input InvoiceCreateInput {
  items: ProductCreateManyInput
  amount: String
  email: String!
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
  items: ProductCreateManyInput
  amount: String
  email: String!
  vendors: UserCreateManyWithoutSalesInput
}

input InvoiceCreateWithoutVendorsInput {
  items: ProductCreateManyInput
  amount: String
  email: String!
  customer: UserCreateOneWithoutPurchasesInput
}

type InvoiceEdge {
  node: Invoice!
  cursor: String!
}

enum InvoiceOrderByInput {
  id_ASC
  id_DESC
  amount_ASC
  amount_DESC
  email_ASC
  email_DESC
  createdAt_ASC
  createdAt_DESC
  updatedAt_ASC
  updatedAt_DESC
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
  mutation_in: [MutationType!]
  updatedFields_contains: String
  updatedFields_contains_every: [String!]
  updatedFields_contains_some: [String!]
  node: InvoiceWhereInput
  AND: [InvoiceSubscriptionWhereInput!]
  OR: [InvoiceSubscriptionWhereInput!]
  NOT: [InvoiceSubscriptionWhereInput!]
}

input InvoiceUpdateInput {
  items: ProductUpdateManyInput
  amount: String
  email: String
  customer: UserUpdateOneWithoutPurchasesInput
  vendors: UserUpdateManyWithoutSalesInput
}

input InvoiceUpdateManyMutationInput {
  amount: String
  email: String
}

input InvoiceUpdateManyWithoutCustomerInput {
  create: [InvoiceCreateWithoutCustomerInput!]
  delete: [InvoiceWhereUniqueInput!]
  connect: [InvoiceWhereUniqueInput!]
  disconnect: [InvoiceWhereUniqueInput!]
  update: [InvoiceUpdateWithWhereUniqueWithoutCustomerInput!]
  upsert: [InvoiceUpsertWithWhereUniqueWithoutCustomerInput!]
}

input InvoiceUpdateManyWithoutVendorsInput {
  create: [InvoiceCreateWithoutVendorsInput!]
  delete: [InvoiceWhereUniqueInput!]
  connect: [InvoiceWhereUniqueInput!]
  disconnect: [InvoiceWhereUniqueInput!]
  update: [InvoiceUpdateWithWhereUniqueWithoutVendorsInput!]
  upsert: [InvoiceUpsertWithWhereUniqueWithoutVendorsInput!]
}

input InvoiceUpdateWithoutCustomerDataInput {
  items: ProductUpdateManyInput
  amount: String
  email: String
  vendors: UserUpdateManyWithoutSalesInput
}

input InvoiceUpdateWithoutVendorsDataInput {
  items: ProductUpdateManyInput
  amount: String
  email: String
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
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  items_every: ProductWhereInput
  items_some: ProductWhereInput
  items_none: ProductWhereInput
  amount: String
  amount_not: String
  amount_in: [String!]
  amount_not_in: [String!]
  amount_lt: String
  amount_lte: String
  amount_gt: String
  amount_gte: String
  amount_contains: String
  amount_not_contains: String
  amount_starts_with: String
  amount_not_starts_with: String
  amount_ends_with: String
  amount_not_ends_with: String
  email: String
  email_not: String
  email_in: [String!]
  email_not_in: [String!]
  email_lt: String
  email_lte: String
  email_gt: String
  email_gte: String
  email_contains: String
  email_not_contains: String
  email_starts_with: String
  email_not_starts_with: String
  email_ends_with: String
  email_not_ends_with: String
  customer: UserWhereInput
  vendors_every: UserWhereInput
  vendors_some: UserWhereInput
  vendors_none: UserWhereInput
  AND: [InvoiceWhereInput!]
  OR: [InvoiceWhereInput!]
  NOT: [InvoiceWhereInput!]
}

input InvoiceWhereUniqueInput {
  id: ID
}

scalar Long

type Mutation {
  createCart(data: CartCreateInput!): Cart!
  updateCart(data: CartUpdateInput!, where: CartWhereUniqueInput!): Cart
  updateManyCarts(data: CartUpdateManyMutationInput!, where: CartWhereInput): BatchPayload!
  upsertCart(where: CartWhereUniqueInput!, create: CartCreateInput!, update: CartUpdateInput!): Cart!
  deleteCart(where: CartWhereUniqueInput!): Cart
  deleteManyCarts(where: CartWhereInput): BatchPayload!
  createInvoice(data: InvoiceCreateInput!): Invoice!
  updateInvoice(data: InvoiceUpdateInput!, where: InvoiceWhereUniqueInput!): Invoice
  updateManyInvoices(data: InvoiceUpdateManyMutationInput!, where: InvoiceWhereInput): BatchPayload!
  upsertInvoice(where: InvoiceWhereUniqueInput!, create: InvoiceCreateInput!, update: InvoiceUpdateInput!): Invoice!
  deleteInvoice(where: InvoiceWhereUniqueInput!): Invoice
  deleteManyInvoices(where: InvoiceWhereInput): BatchPayload!
  createProduct(data: ProductCreateInput!): Product!
  updateProduct(data: ProductUpdateInput!, where: ProductWhereUniqueInput!): Product
  updateManyProducts(data: ProductUpdateManyMutationInput!, where: ProductWhereInput): BatchPayload!
  upsertProduct(where: ProductWhereUniqueInput!, create: ProductCreateInput!, update: ProductUpdateInput!): Product!
  deleteProduct(where: ProductWhereUniqueInput!): Product
  deleteManyProducts(where: ProductWhereInput): BatchPayload!
  createUser(data: UserCreateInput!): User!
  updateUser(data: UserUpdateInput!, where: UserWhereUniqueInput!): User
  updateManyUsers(data: UserUpdateManyMutationInput!, where: UserWhereInput): BatchPayload!
  upsertUser(where: UserWhereUniqueInput!, create: UserCreateInput!, update: UserUpdateInput!): User!
  deleteUser(where: UserWhereUniqueInput!): User
  deleteManyUsers(where: UserWhereInput): BatchPayload!
}

enum MutationType {
  CREATED
  UPDATED
  DELETED
}

interface Node {
  id: ID!
}

type PageInfo {
  hasNextPage: Boolean!
  hasPreviousPage: Boolean!
  startCursor: String
  endCursor: String
}

type Product {
  id: ID!
  name: String
  price: String
  description: String
  varietal: String
  vendor: User
  carts(where: CartWhereInput, orderBy: CartOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Cart!]
}

type ProductConnection {
  pageInfo: PageInfo!
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

type ProductEdge {
  node: Product!
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
  createdAt_ASC
  createdAt_DESC
  updatedAt_ASC
  updatedAt_DESC
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
  mutation_in: [MutationType!]
  updatedFields_contains: String
  updatedFields_contains_every: [String!]
  updatedFields_contains_some: [String!]
  node: ProductWhereInput
  AND: [ProductSubscriptionWhereInput!]
  OR: [ProductSubscriptionWhereInput!]
  NOT: [ProductSubscriptionWhereInput!]
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
  update: [ProductUpdateWithWhereUniqueNestedInput!]
  upsert: [ProductUpsertWithWhereUniqueNestedInput!]
  delete: [ProductWhereUniqueInput!]
  connect: [ProductWhereUniqueInput!]
  disconnect: [ProductWhereUniqueInput!]
}

input ProductUpdateManyMutationInput {
  name: String
  price: String
  description: String
  varietal: String
}

input ProductUpdateManyWithoutCartsInput {
  create: [ProductCreateWithoutCartsInput!]
  delete: [ProductWhereUniqueInput!]
  connect: [ProductWhereUniqueInput!]
  disconnect: [ProductWhereUniqueInput!]
  update: [ProductUpdateWithWhereUniqueWithoutCartsInput!]
  upsert: [ProductUpsertWithWhereUniqueWithoutCartsInput!]
}

input ProductUpdateManyWithoutVendorInput {
  create: [ProductCreateWithoutVendorInput!]
  delete: [ProductWhereUniqueInput!]
  connect: [ProductWhereUniqueInput!]
  disconnect: [ProductWhereUniqueInput!]
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
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  name: String
  name_not: String
  name_in: [String!]
  name_not_in: [String!]
  name_lt: String
  name_lte: String
  name_gt: String
  name_gte: String
  name_contains: String
  name_not_contains: String
  name_starts_with: String
  name_not_starts_with: String
  name_ends_with: String
  name_not_ends_with: String
  price: String
  price_not: String
  price_in: [String!]
  price_not_in: [String!]
  price_lt: String
  price_lte: String
  price_gt: String
  price_gte: String
  price_contains: String
  price_not_contains: String
  price_starts_with: String
  price_not_starts_with: String
  price_ends_with: String
  price_not_ends_with: String
  description: String
  description_not: String
  description_in: [String!]
  description_not_in: [String!]
  description_lt: String
  description_lte: String
  description_gt: String
  description_gte: String
  description_contains: String
  description_not_contains: String
  description_starts_with: String
  description_not_starts_with: String
  description_ends_with: String
  description_not_ends_with: String
  varietal: String
  varietal_not: String
  varietal_in: [String!]
  varietal_not_in: [String!]
  varietal_lt: String
  varietal_lte: String
  varietal_gt: String
  varietal_gte: String
  varietal_contains: String
  varietal_not_contains: String
  varietal_starts_with: String
  varietal_not_starts_with: String
  varietal_ends_with: String
  varietal_not_ends_with: String
  vendor: UserWhereInput
  carts_every: CartWhereInput
  carts_some: CartWhereInput
  carts_none: CartWhereInput
  AND: [ProductWhereInput!]
  OR: [ProductWhereInput!]
  NOT: [ProductWhereInput!]
}

input ProductWhereUniqueInput {
  id: ID
}

type Query {
  cart(where: CartWhereUniqueInput!): Cart
  carts(where: CartWhereInput, orderBy: CartOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Cart]!
  cartsConnection(where: CartWhereInput, orderBy: CartOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): CartConnection!
  invoice(where: InvoiceWhereUniqueInput!): Invoice
  invoices(where: InvoiceWhereInput, orderBy: InvoiceOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Invoice]!
  invoicesConnection(where: InvoiceWhereInput, orderBy: InvoiceOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): InvoiceConnection!
  product(where: ProductWhereUniqueInput!): Product
  products(where: ProductWhereInput, orderBy: ProductOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Product]!
  productsConnection(where: ProductWhereInput, orderBy: ProductOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): ProductConnection!
  user(where: UserWhereUniqueInput!): User
  users(where: UserWhereInput, orderBy: UserOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [User]!
  usersConnection(where: UserWhereInput, orderBy: UserOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): UserConnection!
  node(id: ID!): Node
}

type Subscription {
  cart(where: CartSubscriptionWhereInput): CartSubscriptionPayload
  invoice(where: InvoiceSubscriptionWhereInput): InvoiceSubscriptionPayload
  product(where: ProductSubscriptionWhereInput): ProductSubscriptionPayload
  user(where: UserSubscriptionWhereInput): UserSubscriptionPayload
}

type User {
  id: ID!
  role: String
  permissions: [String!]!
  email: String
  firstName: String
  lastName: String
  bizName: String
  password: String
  cart: Cart
  purchases(where: InvoiceWhereInput, orderBy: InvoiceOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Invoice!]
  products(where: ProductWhereInput, orderBy: ProductOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Product!]
  sales(where: InvoiceWhereInput, orderBy: InvoiceOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Invoice!]
}

type UserConnection {
  pageInfo: PageInfo!
  edges: [UserEdge]!
  aggregate: AggregateUser!
}

input UserCreateInput {
  role: String
  permissions: UserCreatepermissionsInput
  email: String
  firstName: String
  lastName: String
  bizName: String
  password: String
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
  permissions: UserCreatepermissionsInput
  email: String
  firstName: String
  lastName: String
  bizName: String
  password: String
  purchases: InvoiceCreateManyWithoutCustomerInput
  products: ProductCreateManyWithoutVendorInput
  sales: InvoiceCreateManyWithoutVendorsInput
}

input UserCreateWithoutProductsInput {
  role: String
  permissions: UserCreatepermissionsInput
  email: String
  firstName: String
  lastName: String
  bizName: String
  password: String
  cart: CartCreateOneWithoutUserInput
  purchases: InvoiceCreateManyWithoutCustomerInput
  sales: InvoiceCreateManyWithoutVendorsInput
}

input UserCreateWithoutPurchasesInput {
  role: String
  permissions: UserCreatepermissionsInput
  email: String
  firstName: String
  lastName: String
  bizName: String
  password: String
  cart: CartCreateOneWithoutUserInput
  products: ProductCreateManyWithoutVendorInput
  sales: InvoiceCreateManyWithoutVendorsInput
}

input UserCreateWithoutSalesInput {
  role: String
  permissions: UserCreatepermissionsInput
  email: String
  firstName: String
  lastName: String
  bizName: String
  password: String
  cart: CartCreateOneWithoutUserInput
  purchases: InvoiceCreateManyWithoutCustomerInput
  products: ProductCreateManyWithoutVendorInput
}

type UserEdge {
  node: User!
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
  createdAt_ASC
  createdAt_DESC
  updatedAt_ASC
  updatedAt_DESC
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
  mutation_in: [MutationType!]
  updatedFields_contains: String
  updatedFields_contains_every: [String!]
  updatedFields_contains_some: [String!]
  node: UserWhereInput
  AND: [UserSubscriptionWhereInput!]
  OR: [UserSubscriptionWhereInput!]
  NOT: [UserSubscriptionWhereInput!]
}

input UserUpdateInput {
  role: String
  permissions: UserUpdatepermissionsInput
  email: String
  firstName: String
  lastName: String
  bizName: String
  password: String
  cart: CartUpdateOneWithoutUserInput
  purchases: InvoiceUpdateManyWithoutCustomerInput
  products: ProductUpdateManyWithoutVendorInput
  sales: InvoiceUpdateManyWithoutVendorsInput
}

input UserUpdateManyMutationInput {
  role: String
  permissions: UserUpdatepermissionsInput
  email: String
  firstName: String
  lastName: String
  bizName: String
  password: String
}

input UserUpdateManyWithoutSalesInput {
  create: [UserCreateWithoutSalesInput!]
  delete: [UserWhereUniqueInput!]
  connect: [UserWhereUniqueInput!]
  disconnect: [UserWhereUniqueInput!]
  update: [UserUpdateWithWhereUniqueWithoutSalesInput!]
  upsert: [UserUpsertWithWhereUniqueWithoutSalesInput!]
}

input UserUpdateOneRequiredWithoutCartInput {
  create: UserCreateWithoutCartInput
  update: UserUpdateWithoutCartDataInput
  upsert: UserUpsertWithoutCartInput
  connect: UserWhereUniqueInput
}

input UserUpdateOneWithoutProductsInput {
  create: UserCreateWithoutProductsInput
  update: UserUpdateWithoutProductsDataInput
  upsert: UserUpsertWithoutProductsInput
  delete: Boolean
  disconnect: Boolean
  connect: UserWhereUniqueInput
}

input UserUpdateOneWithoutPurchasesInput {
  create: UserCreateWithoutPurchasesInput
  update: UserUpdateWithoutPurchasesDataInput
  upsert: UserUpsertWithoutPurchasesInput
  delete: Boolean
  disconnect: Boolean
  connect: UserWhereUniqueInput
}

input UserUpdatepermissionsInput {
  set: [String!]
}

input UserUpdateWithoutCartDataInput {
  role: String
  permissions: UserUpdatepermissionsInput
  email: String
  firstName: String
  lastName: String
  bizName: String
  password: String
  purchases: InvoiceUpdateManyWithoutCustomerInput
  products: ProductUpdateManyWithoutVendorInput
  sales: InvoiceUpdateManyWithoutVendorsInput
}

input UserUpdateWithoutProductsDataInput {
  role: String
  permissions: UserUpdatepermissionsInput
  email: String
  firstName: String
  lastName: String
  bizName: String
  password: String
  cart: CartUpdateOneWithoutUserInput
  purchases: InvoiceUpdateManyWithoutCustomerInput
  sales: InvoiceUpdateManyWithoutVendorsInput
}

input UserUpdateWithoutPurchasesDataInput {
  role: String
  permissions: UserUpdatepermissionsInput
  email: String
  firstName: String
  lastName: String
  bizName: String
  password: String
  cart: CartUpdateOneWithoutUserInput
  products: ProductUpdateManyWithoutVendorInput
  sales: InvoiceUpdateManyWithoutVendorsInput
}

input UserUpdateWithoutSalesDataInput {
  role: String
  permissions: UserUpdatepermissionsInput
  email: String
  firstName: String
  lastName: String
  bizName: String
  password: String
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
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  role: String
  role_not: String
  role_in: [String!]
  role_not_in: [String!]
  role_lt: String
  role_lte: String
  role_gt: String
  role_gte: String
  role_contains: String
  role_not_contains: String
  role_starts_with: String
  role_not_starts_with: String
  role_ends_with: String
  role_not_ends_with: String
  email: String
  email_not: String
  email_in: [String!]
  email_not_in: [String!]
  email_lt: String
  email_lte: String
  email_gt: String
  email_gte: String
  email_contains: String
  email_not_contains: String
  email_starts_with: String
  email_not_starts_with: String
  email_ends_with: String
  email_not_ends_with: String
  firstName: String
  firstName_not: String
  firstName_in: [String!]
  firstName_not_in: [String!]
  firstName_lt: String
  firstName_lte: String
  firstName_gt: String
  firstName_gte: String
  firstName_contains: String
  firstName_not_contains: String
  firstName_starts_with: String
  firstName_not_starts_with: String
  firstName_ends_with: String
  firstName_not_ends_with: String
  lastName: String
  lastName_not: String
  lastName_in: [String!]
  lastName_not_in: [String!]
  lastName_lt: String
  lastName_lte: String
  lastName_gt: String
  lastName_gte: String
  lastName_contains: String
  lastName_not_contains: String
  lastName_starts_with: String
  lastName_not_starts_with: String
  lastName_ends_with: String
  lastName_not_ends_with: String
  bizName: String
  bizName_not: String
  bizName_in: [String!]
  bizName_not_in: [String!]
  bizName_lt: String
  bizName_lte: String
  bizName_gt: String
  bizName_gte: String
  bizName_contains: String
  bizName_not_contains: String
  bizName_starts_with: String
  bizName_not_starts_with: String
  bizName_ends_with: String
  bizName_not_ends_with: String
  password: String
  password_not: String
  password_in: [String!]
  password_not_in: [String!]
  password_lt: String
  password_lte: String
  password_gt: String
  password_gte: String
  password_contains: String
  password_not_contains: String
  password_starts_with: String
  password_not_starts_with: String
  password_ends_with: String
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
  AND: [UserWhereInput!]
  OR: [UserWhereInput!]
  NOT: [UserWhereInput!]
}

input UserWhereUniqueInput {
  id: ID
  email: String
}
`