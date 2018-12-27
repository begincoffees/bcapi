export const typeDefs = /* GraphQL */ `type AggregateCart {
  count: Int!
}

type AggregateInvoice {
  count: Int!
}

type AggregatePaymentRecord {
  count: Int!
}

type AggregateProduct {
  count: Int!
}

type AggregateShippingAddress {
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
  dateCreated: DateTime
  itemCount: Int
  totalPrice: String
  user: User!
  items(where: ProductWhereInput, orderBy: ProductOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Product!]
}

type CartConnection {
  pageInfo: PageInfo!
  edges: [CartEdge]!
  aggregate: AggregateCart!
}

input CartCreateInput {
  dateCreated: DateTime
  itemCount: Int
  totalPrice: String
  user: UserCreateOneWithoutCartInput!
  items: ProductCreateManyWithoutCartsInput
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
  dateCreated: DateTime
  itemCount: Int
  totalPrice: String
  user: UserCreateOneWithoutCartInput!
}

input CartCreateWithoutUserInput {
  dateCreated: DateTime
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
  dateCreated_ASC
  dateCreated_DESC
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
  dateCreated: DateTime
  itemCount: Int
  totalPrice: String
}

input CartScalarWhereInput {
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
  dateCreated: DateTime
  dateCreated_not: DateTime
  dateCreated_in: [DateTime!]
  dateCreated_not_in: [DateTime!]
  dateCreated_lt: DateTime
  dateCreated_lte: DateTime
  dateCreated_gt: DateTime
  dateCreated_gte: DateTime
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
  AND: [CartScalarWhereInput!]
  OR: [CartScalarWhereInput!]
  NOT: [CartScalarWhereInput!]
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
  dateCreated: DateTime
  itemCount: Int
  totalPrice: String
  user: UserUpdateOneRequiredWithoutCartInput
  items: ProductUpdateManyWithoutCartsInput
}

input CartUpdateManyDataInput {
  dateCreated: DateTime
  itemCount: Int
  totalPrice: String
}

input CartUpdateManyMutationInput {
  dateCreated: DateTime
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
  deleteMany: [CartScalarWhereInput!]
  updateMany: [CartUpdateManyWithWhereNestedInput!]
}

input CartUpdateManyWithWhereNestedInput {
  where: CartScalarWhereInput!
  data: CartUpdateManyDataInput!
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
  dateCreated: DateTime
  itemCount: Int
  totalPrice: String
  user: UserUpdateOneRequiredWithoutCartInput
}

input CartUpdateWithoutUserDataInput {
  dateCreated: DateTime
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
  dateCreated: DateTime
  dateCreated_not: DateTime
  dateCreated_in: [DateTime!]
  dateCreated_not_in: [DateTime!]
  dateCreated_lt: DateTime
  dateCreated_lte: DateTime
  dateCreated_gt: DateTime
  dateCreated_gte: DateTime
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
  user: UserWhereInput
  items_every: ProductWhereInput
  items_some: ProductWhereInput
  items_none: ProductWhereInput
  AND: [CartWhereInput!]
  OR: [CartWhereInput!]
  NOT: [CartWhereInput!]
}

input CartWhereUniqueInput {
  id: ID
}

scalar DateTime

type Invoice {
  id: ID!
  dateCreated: DateTime
  items(where: ProductWhereInput, orderBy: ProductOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Product!]
  amount: String
  email: String!
  record: Json
  stripeRecord(where: PaymentRecordWhereInput, orderBy: PaymentRecordOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [PaymentRecord!]
  created: Int
  stripePaymentId: String
  stripeCustomerId: String
  shippingAddress: ShippingAddress
  status: String
  customer: User
  vendors(where: UserWhereInput, orderBy: UserOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [User!]
}

type InvoiceConnection {
  pageInfo: PageInfo!
  edges: [InvoiceEdge]!
  aggregate: AggregateInvoice!
}

input InvoiceCreateInput {
  dateCreated: DateTime
  items: ProductCreateManyWithoutPurchasesInput
  amount: String
  email: String!
  record: Json
  stripeRecord: PaymentRecordCreateManyInput
  created: Int
  stripePaymentId: String
  stripeCustomerId: String
  shippingAddress: ShippingAddressCreateOneInput
  status: String
  customer: UserCreateOneWithoutPurchasesInput
  vendors: UserCreateManyWithoutSalesInput
}

input InvoiceCreateManyWithoutCustomerInput {
  create: [InvoiceCreateWithoutCustomerInput!]
  connect: [InvoiceWhereUniqueInput!]
}

input InvoiceCreateManyWithoutItemsInput {
  create: [InvoiceCreateWithoutItemsInput!]
  connect: [InvoiceWhereUniqueInput!]
}

input InvoiceCreateManyWithoutVendorsInput {
  create: [InvoiceCreateWithoutVendorsInput!]
  connect: [InvoiceWhereUniqueInput!]
}

input InvoiceCreateWithoutCustomerInput {
  dateCreated: DateTime
  items: ProductCreateManyWithoutPurchasesInput
  amount: String
  email: String!
  record: Json
  stripeRecord: PaymentRecordCreateManyInput
  created: Int
  stripePaymentId: String
  stripeCustomerId: String
  shippingAddress: ShippingAddressCreateOneInput
  status: String
  vendors: UserCreateManyWithoutSalesInput
}

input InvoiceCreateWithoutItemsInput {
  dateCreated: DateTime
  amount: String
  email: String!
  record: Json
  stripeRecord: PaymentRecordCreateManyInput
  created: Int
  stripePaymentId: String
  stripeCustomerId: String
  shippingAddress: ShippingAddressCreateOneInput
  status: String
  customer: UserCreateOneWithoutPurchasesInput
  vendors: UserCreateManyWithoutSalesInput
}

input InvoiceCreateWithoutVendorsInput {
  dateCreated: DateTime
  items: ProductCreateManyWithoutPurchasesInput
  amount: String
  email: String!
  record: Json
  stripeRecord: PaymentRecordCreateManyInput
  created: Int
  stripePaymentId: String
  stripeCustomerId: String
  shippingAddress: ShippingAddressCreateOneInput
  status: String
  customer: UserCreateOneWithoutPurchasesInput
}

type InvoiceEdge {
  node: Invoice!
  cursor: String!
}

enum InvoiceOrderByInput {
  id_ASC
  id_DESC
  dateCreated_ASC
  dateCreated_DESC
  amount_ASC
  amount_DESC
  email_ASC
  email_DESC
  record_ASC
  record_DESC
  created_ASC
  created_DESC
  stripePaymentId_ASC
  stripePaymentId_DESC
  stripeCustomerId_ASC
  stripeCustomerId_DESC
  status_ASC
  status_DESC
  createdAt_ASC
  createdAt_DESC
  updatedAt_ASC
  updatedAt_DESC
}

type InvoicePreviousValues {
  id: ID!
  dateCreated: DateTime
  amount: String
  email: String!
  record: Json
  created: Int
  stripePaymentId: String
  stripeCustomerId: String
  status: String
}

input InvoiceScalarWhereInput {
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
  dateCreated: DateTime
  dateCreated_not: DateTime
  dateCreated_in: [DateTime!]
  dateCreated_not_in: [DateTime!]
  dateCreated_lt: DateTime
  dateCreated_lte: DateTime
  dateCreated_gt: DateTime
  dateCreated_gte: DateTime
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
  created: Int
  created_not: Int
  created_in: [Int!]
  created_not_in: [Int!]
  created_lt: Int
  created_lte: Int
  created_gt: Int
  created_gte: Int
  stripePaymentId: String
  stripePaymentId_not: String
  stripePaymentId_in: [String!]
  stripePaymentId_not_in: [String!]
  stripePaymentId_lt: String
  stripePaymentId_lte: String
  stripePaymentId_gt: String
  stripePaymentId_gte: String
  stripePaymentId_contains: String
  stripePaymentId_not_contains: String
  stripePaymentId_starts_with: String
  stripePaymentId_not_starts_with: String
  stripePaymentId_ends_with: String
  stripePaymentId_not_ends_with: String
  stripeCustomerId: String
  stripeCustomerId_not: String
  stripeCustomerId_in: [String!]
  stripeCustomerId_not_in: [String!]
  stripeCustomerId_lt: String
  stripeCustomerId_lte: String
  stripeCustomerId_gt: String
  stripeCustomerId_gte: String
  stripeCustomerId_contains: String
  stripeCustomerId_not_contains: String
  stripeCustomerId_starts_with: String
  stripeCustomerId_not_starts_with: String
  stripeCustomerId_ends_with: String
  stripeCustomerId_not_ends_with: String
  status: String
  status_not: String
  status_in: [String!]
  status_not_in: [String!]
  status_lt: String
  status_lte: String
  status_gt: String
  status_gte: String
  status_contains: String
  status_not_contains: String
  status_starts_with: String
  status_not_starts_with: String
  status_ends_with: String
  status_not_ends_with: String
  AND: [InvoiceScalarWhereInput!]
  OR: [InvoiceScalarWhereInput!]
  NOT: [InvoiceScalarWhereInput!]
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
  dateCreated: DateTime
  items: ProductUpdateManyWithoutPurchasesInput
  amount: String
  email: String
  record: Json
  stripeRecord: PaymentRecordUpdateManyInput
  created: Int
  stripePaymentId: String
  stripeCustomerId: String
  shippingAddress: ShippingAddressUpdateOneInput
  status: String
  customer: UserUpdateOneWithoutPurchasesInput
  vendors: UserUpdateManyWithoutSalesInput
}

input InvoiceUpdateManyDataInput {
  dateCreated: DateTime
  amount: String
  email: String
  record: Json
  created: Int
  stripePaymentId: String
  stripeCustomerId: String
  status: String
}

input InvoiceUpdateManyMutationInput {
  dateCreated: DateTime
  amount: String
  email: String
  record: Json
  created: Int
  stripePaymentId: String
  stripeCustomerId: String
  status: String
}

input InvoiceUpdateManyWithoutCustomerInput {
  create: [InvoiceCreateWithoutCustomerInput!]
  delete: [InvoiceWhereUniqueInput!]
  connect: [InvoiceWhereUniqueInput!]
  disconnect: [InvoiceWhereUniqueInput!]
  update: [InvoiceUpdateWithWhereUniqueWithoutCustomerInput!]
  upsert: [InvoiceUpsertWithWhereUniqueWithoutCustomerInput!]
  deleteMany: [InvoiceScalarWhereInput!]
  updateMany: [InvoiceUpdateManyWithWhereNestedInput!]
}

input InvoiceUpdateManyWithoutItemsInput {
  create: [InvoiceCreateWithoutItemsInput!]
  delete: [InvoiceWhereUniqueInput!]
  connect: [InvoiceWhereUniqueInput!]
  disconnect: [InvoiceWhereUniqueInput!]
  update: [InvoiceUpdateWithWhereUniqueWithoutItemsInput!]
  upsert: [InvoiceUpsertWithWhereUniqueWithoutItemsInput!]
  deleteMany: [InvoiceScalarWhereInput!]
  updateMany: [InvoiceUpdateManyWithWhereNestedInput!]
}

input InvoiceUpdateManyWithoutVendorsInput {
  create: [InvoiceCreateWithoutVendorsInput!]
  delete: [InvoiceWhereUniqueInput!]
  connect: [InvoiceWhereUniqueInput!]
  disconnect: [InvoiceWhereUniqueInput!]
  update: [InvoiceUpdateWithWhereUniqueWithoutVendorsInput!]
  upsert: [InvoiceUpsertWithWhereUniqueWithoutVendorsInput!]
  deleteMany: [InvoiceScalarWhereInput!]
  updateMany: [InvoiceUpdateManyWithWhereNestedInput!]
}

input InvoiceUpdateManyWithWhereNestedInput {
  where: InvoiceScalarWhereInput!
  data: InvoiceUpdateManyDataInput!
}

input InvoiceUpdateWithoutCustomerDataInput {
  dateCreated: DateTime
  items: ProductUpdateManyWithoutPurchasesInput
  amount: String
  email: String
  record: Json
  stripeRecord: PaymentRecordUpdateManyInput
  created: Int
  stripePaymentId: String
  stripeCustomerId: String
  shippingAddress: ShippingAddressUpdateOneInput
  status: String
  vendors: UserUpdateManyWithoutSalesInput
}

input InvoiceUpdateWithoutItemsDataInput {
  dateCreated: DateTime
  amount: String
  email: String
  record: Json
  stripeRecord: PaymentRecordUpdateManyInput
  created: Int
  stripePaymentId: String
  stripeCustomerId: String
  shippingAddress: ShippingAddressUpdateOneInput
  status: String
  customer: UserUpdateOneWithoutPurchasesInput
  vendors: UserUpdateManyWithoutSalesInput
}

input InvoiceUpdateWithoutVendorsDataInput {
  dateCreated: DateTime
  items: ProductUpdateManyWithoutPurchasesInput
  amount: String
  email: String
  record: Json
  stripeRecord: PaymentRecordUpdateManyInput
  created: Int
  stripePaymentId: String
  stripeCustomerId: String
  shippingAddress: ShippingAddressUpdateOneInput
  status: String
  customer: UserUpdateOneWithoutPurchasesInput
}

input InvoiceUpdateWithWhereUniqueWithoutCustomerInput {
  where: InvoiceWhereUniqueInput!
  data: InvoiceUpdateWithoutCustomerDataInput!
}

input InvoiceUpdateWithWhereUniqueWithoutItemsInput {
  where: InvoiceWhereUniqueInput!
  data: InvoiceUpdateWithoutItemsDataInput!
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

input InvoiceUpsertWithWhereUniqueWithoutItemsInput {
  where: InvoiceWhereUniqueInput!
  update: InvoiceUpdateWithoutItemsDataInput!
  create: InvoiceCreateWithoutItemsInput!
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
  dateCreated: DateTime
  dateCreated_not: DateTime
  dateCreated_in: [DateTime!]
  dateCreated_not_in: [DateTime!]
  dateCreated_lt: DateTime
  dateCreated_lte: DateTime
  dateCreated_gt: DateTime
  dateCreated_gte: DateTime
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
  stripeRecord_every: PaymentRecordWhereInput
  stripeRecord_some: PaymentRecordWhereInput
  stripeRecord_none: PaymentRecordWhereInput
  created: Int
  created_not: Int
  created_in: [Int!]
  created_not_in: [Int!]
  created_lt: Int
  created_lte: Int
  created_gt: Int
  created_gte: Int
  stripePaymentId: String
  stripePaymentId_not: String
  stripePaymentId_in: [String!]
  stripePaymentId_not_in: [String!]
  stripePaymentId_lt: String
  stripePaymentId_lte: String
  stripePaymentId_gt: String
  stripePaymentId_gte: String
  stripePaymentId_contains: String
  stripePaymentId_not_contains: String
  stripePaymentId_starts_with: String
  stripePaymentId_not_starts_with: String
  stripePaymentId_ends_with: String
  stripePaymentId_not_ends_with: String
  stripeCustomerId: String
  stripeCustomerId_not: String
  stripeCustomerId_in: [String!]
  stripeCustomerId_not_in: [String!]
  stripeCustomerId_lt: String
  stripeCustomerId_lte: String
  stripeCustomerId_gt: String
  stripeCustomerId_gte: String
  stripeCustomerId_contains: String
  stripeCustomerId_not_contains: String
  stripeCustomerId_starts_with: String
  stripeCustomerId_not_starts_with: String
  stripeCustomerId_ends_with: String
  stripeCustomerId_not_ends_with: String
  shippingAddress: ShippingAddressWhereInput
  status: String
  status_not: String
  status_in: [String!]
  status_not_in: [String!]
  status_lt: String
  status_lte: String
  status_gt: String
  status_gte: String
  status_contains: String
  status_not_contains: String
  status_starts_with: String
  status_not_starts_with: String
  status_ends_with: String
  status_not_ends_with: String
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

scalar Json

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
  createPaymentRecord(data: PaymentRecordCreateInput!): PaymentRecord!
  updatePaymentRecord(data: PaymentRecordUpdateInput!, where: PaymentRecordWhereUniqueInput!): PaymentRecord
  updateManyPaymentRecords(data: PaymentRecordUpdateManyMutationInput!, where: PaymentRecordWhereInput): BatchPayload!
  upsertPaymentRecord(where: PaymentRecordWhereUniqueInput!, create: PaymentRecordCreateInput!, update: PaymentRecordUpdateInput!): PaymentRecord!
  deletePaymentRecord(where: PaymentRecordWhereUniqueInput!): PaymentRecord
  deleteManyPaymentRecords(where: PaymentRecordWhereInput): BatchPayload!
  createProduct(data: ProductCreateInput!): Product!
  updateProduct(data: ProductUpdateInput!, where: ProductWhereUniqueInput!): Product
  updateManyProducts(data: ProductUpdateManyMutationInput!, where: ProductWhereInput): BatchPayload!
  upsertProduct(where: ProductWhereUniqueInput!, create: ProductCreateInput!, update: ProductUpdateInput!): Product!
  deleteProduct(where: ProductWhereUniqueInput!): Product
  deleteManyProducts(where: ProductWhereInput): BatchPayload!
  createShippingAddress(data: ShippingAddressCreateInput!): ShippingAddress!
  updateShippingAddress(data: ShippingAddressUpdateInput!, where: ShippingAddressWhereUniqueInput!): ShippingAddress
  updateManyShippingAddresses(data: ShippingAddressUpdateManyMutationInput!, where: ShippingAddressWhereInput): BatchPayload!
  upsertShippingAddress(where: ShippingAddressWhereUniqueInput!, create: ShippingAddressCreateInput!, update: ShippingAddressUpdateInput!): ShippingAddress!
  deleteShippingAddress(where: ShippingAddressWhereUniqueInput!): ShippingAddress
  deleteManyShippingAddresses(where: ShippingAddressWhereInput): BatchPayload!
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

type PaymentRecord {
  id: ID!
  dateCreated: DateTime!
  amount: Int!
  balanceTransaction: String!
  created: Int!
  currency: String!
  stripeCustomerId: String!
  stripePaymentId: String!
  status: String!
  data: Json
}

type PaymentRecordConnection {
  pageInfo: PageInfo!
  edges: [PaymentRecordEdge]!
  aggregate: AggregatePaymentRecord!
}

input PaymentRecordCreateInput {
  dateCreated: DateTime!
  amount: Int!
  balanceTransaction: String!
  created: Int!
  currency: String!
  stripeCustomerId: String!
  stripePaymentId: String!
  status: String!
  data: Json
}

input PaymentRecordCreateManyInput {
  create: [PaymentRecordCreateInput!]
  connect: [PaymentRecordWhereUniqueInput!]
}

type PaymentRecordEdge {
  node: PaymentRecord!
  cursor: String!
}

enum PaymentRecordOrderByInput {
  id_ASC
  id_DESC
  dateCreated_ASC
  dateCreated_DESC
  amount_ASC
  amount_DESC
  balanceTransaction_ASC
  balanceTransaction_DESC
  created_ASC
  created_DESC
  currency_ASC
  currency_DESC
  stripeCustomerId_ASC
  stripeCustomerId_DESC
  stripePaymentId_ASC
  stripePaymentId_DESC
  status_ASC
  status_DESC
  data_ASC
  data_DESC
  createdAt_ASC
  createdAt_DESC
  updatedAt_ASC
  updatedAt_DESC
}

type PaymentRecordPreviousValues {
  id: ID!
  dateCreated: DateTime!
  amount: Int!
  balanceTransaction: String!
  created: Int!
  currency: String!
  stripeCustomerId: String!
  stripePaymentId: String!
  status: String!
  data: Json
}

input PaymentRecordScalarWhereInput {
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
  dateCreated: DateTime
  dateCreated_not: DateTime
  dateCreated_in: [DateTime!]
  dateCreated_not_in: [DateTime!]
  dateCreated_lt: DateTime
  dateCreated_lte: DateTime
  dateCreated_gt: DateTime
  dateCreated_gte: DateTime
  amount: Int
  amount_not: Int
  amount_in: [Int!]
  amount_not_in: [Int!]
  amount_lt: Int
  amount_lte: Int
  amount_gt: Int
  amount_gte: Int
  balanceTransaction: String
  balanceTransaction_not: String
  balanceTransaction_in: [String!]
  balanceTransaction_not_in: [String!]
  balanceTransaction_lt: String
  balanceTransaction_lte: String
  balanceTransaction_gt: String
  balanceTransaction_gte: String
  balanceTransaction_contains: String
  balanceTransaction_not_contains: String
  balanceTransaction_starts_with: String
  balanceTransaction_not_starts_with: String
  balanceTransaction_ends_with: String
  balanceTransaction_not_ends_with: String
  created: Int
  created_not: Int
  created_in: [Int!]
  created_not_in: [Int!]
  created_lt: Int
  created_lte: Int
  created_gt: Int
  created_gte: Int
  currency: String
  currency_not: String
  currency_in: [String!]
  currency_not_in: [String!]
  currency_lt: String
  currency_lte: String
  currency_gt: String
  currency_gte: String
  currency_contains: String
  currency_not_contains: String
  currency_starts_with: String
  currency_not_starts_with: String
  currency_ends_with: String
  currency_not_ends_with: String
  stripeCustomerId: String
  stripeCustomerId_not: String
  stripeCustomerId_in: [String!]
  stripeCustomerId_not_in: [String!]
  stripeCustomerId_lt: String
  stripeCustomerId_lte: String
  stripeCustomerId_gt: String
  stripeCustomerId_gte: String
  stripeCustomerId_contains: String
  stripeCustomerId_not_contains: String
  stripeCustomerId_starts_with: String
  stripeCustomerId_not_starts_with: String
  stripeCustomerId_ends_with: String
  stripeCustomerId_not_ends_with: String
  stripePaymentId: String
  stripePaymentId_not: String
  stripePaymentId_in: [String!]
  stripePaymentId_not_in: [String!]
  stripePaymentId_lt: String
  stripePaymentId_lte: String
  stripePaymentId_gt: String
  stripePaymentId_gte: String
  stripePaymentId_contains: String
  stripePaymentId_not_contains: String
  stripePaymentId_starts_with: String
  stripePaymentId_not_starts_with: String
  stripePaymentId_ends_with: String
  stripePaymentId_not_ends_with: String
  status: String
  status_not: String
  status_in: [String!]
  status_not_in: [String!]
  status_lt: String
  status_lte: String
  status_gt: String
  status_gte: String
  status_contains: String
  status_not_contains: String
  status_starts_with: String
  status_not_starts_with: String
  status_ends_with: String
  status_not_ends_with: String
  AND: [PaymentRecordScalarWhereInput!]
  OR: [PaymentRecordScalarWhereInput!]
  NOT: [PaymentRecordScalarWhereInput!]
}

type PaymentRecordSubscriptionPayload {
  mutation: MutationType!
  node: PaymentRecord
  updatedFields: [String!]
  previousValues: PaymentRecordPreviousValues
}

input PaymentRecordSubscriptionWhereInput {
  mutation_in: [MutationType!]
  updatedFields_contains: String
  updatedFields_contains_every: [String!]
  updatedFields_contains_some: [String!]
  node: PaymentRecordWhereInput
  AND: [PaymentRecordSubscriptionWhereInput!]
  OR: [PaymentRecordSubscriptionWhereInput!]
  NOT: [PaymentRecordSubscriptionWhereInput!]
}

input PaymentRecordUpdateDataInput {
  dateCreated: DateTime
  amount: Int
  balanceTransaction: String
  created: Int
  currency: String
  stripeCustomerId: String
  stripePaymentId: String
  status: String
  data: Json
}

input PaymentRecordUpdateInput {
  dateCreated: DateTime
  amount: Int
  balanceTransaction: String
  created: Int
  currency: String
  stripeCustomerId: String
  stripePaymentId: String
  status: String
  data: Json
}

input PaymentRecordUpdateManyDataInput {
  dateCreated: DateTime
  amount: Int
  balanceTransaction: String
  created: Int
  currency: String
  stripeCustomerId: String
  stripePaymentId: String
  status: String
  data: Json
}

input PaymentRecordUpdateManyInput {
  create: [PaymentRecordCreateInput!]
  update: [PaymentRecordUpdateWithWhereUniqueNestedInput!]
  upsert: [PaymentRecordUpsertWithWhereUniqueNestedInput!]
  delete: [PaymentRecordWhereUniqueInput!]
  connect: [PaymentRecordWhereUniqueInput!]
  disconnect: [PaymentRecordWhereUniqueInput!]
  deleteMany: [PaymentRecordScalarWhereInput!]
  updateMany: [PaymentRecordUpdateManyWithWhereNestedInput!]
}

input PaymentRecordUpdateManyMutationInput {
  dateCreated: DateTime
  amount: Int
  balanceTransaction: String
  created: Int
  currency: String
  stripeCustomerId: String
  stripePaymentId: String
  status: String
  data: Json
}

input PaymentRecordUpdateManyWithWhereNestedInput {
  where: PaymentRecordScalarWhereInput!
  data: PaymentRecordUpdateManyDataInput!
}

input PaymentRecordUpdateWithWhereUniqueNestedInput {
  where: PaymentRecordWhereUniqueInput!
  data: PaymentRecordUpdateDataInput!
}

input PaymentRecordUpsertWithWhereUniqueNestedInput {
  where: PaymentRecordWhereUniqueInput!
  update: PaymentRecordUpdateDataInput!
  create: PaymentRecordCreateInput!
}

input PaymentRecordWhereInput {
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
  dateCreated: DateTime
  dateCreated_not: DateTime
  dateCreated_in: [DateTime!]
  dateCreated_not_in: [DateTime!]
  dateCreated_lt: DateTime
  dateCreated_lte: DateTime
  dateCreated_gt: DateTime
  dateCreated_gte: DateTime
  amount: Int
  amount_not: Int
  amount_in: [Int!]
  amount_not_in: [Int!]
  amount_lt: Int
  amount_lte: Int
  amount_gt: Int
  amount_gte: Int
  balanceTransaction: String
  balanceTransaction_not: String
  balanceTransaction_in: [String!]
  balanceTransaction_not_in: [String!]
  balanceTransaction_lt: String
  balanceTransaction_lte: String
  balanceTransaction_gt: String
  balanceTransaction_gte: String
  balanceTransaction_contains: String
  balanceTransaction_not_contains: String
  balanceTransaction_starts_with: String
  balanceTransaction_not_starts_with: String
  balanceTransaction_ends_with: String
  balanceTransaction_not_ends_with: String
  created: Int
  created_not: Int
  created_in: [Int!]
  created_not_in: [Int!]
  created_lt: Int
  created_lte: Int
  created_gt: Int
  created_gte: Int
  currency: String
  currency_not: String
  currency_in: [String!]
  currency_not_in: [String!]
  currency_lt: String
  currency_lte: String
  currency_gt: String
  currency_gte: String
  currency_contains: String
  currency_not_contains: String
  currency_starts_with: String
  currency_not_starts_with: String
  currency_ends_with: String
  currency_not_ends_with: String
  stripeCustomerId: String
  stripeCustomerId_not: String
  stripeCustomerId_in: [String!]
  stripeCustomerId_not_in: [String!]
  stripeCustomerId_lt: String
  stripeCustomerId_lte: String
  stripeCustomerId_gt: String
  stripeCustomerId_gte: String
  stripeCustomerId_contains: String
  stripeCustomerId_not_contains: String
  stripeCustomerId_starts_with: String
  stripeCustomerId_not_starts_with: String
  stripeCustomerId_ends_with: String
  stripeCustomerId_not_ends_with: String
  stripePaymentId: String
  stripePaymentId_not: String
  stripePaymentId_in: [String!]
  stripePaymentId_not_in: [String!]
  stripePaymentId_lt: String
  stripePaymentId_lte: String
  stripePaymentId_gt: String
  stripePaymentId_gte: String
  stripePaymentId_contains: String
  stripePaymentId_not_contains: String
  stripePaymentId_starts_with: String
  stripePaymentId_not_starts_with: String
  stripePaymentId_ends_with: String
  stripePaymentId_not_ends_with: String
  status: String
  status_not: String
  status_in: [String!]
  status_not_in: [String!]
  status_lt: String
  status_lte: String
  status_gt: String
  status_gte: String
  status_contains: String
  status_not_contains: String
  status_starts_with: String
  status_not_starts_with: String
  status_ends_with: String
  status_not_ends_with: String
  AND: [PaymentRecordWhereInput!]
  OR: [PaymentRecordWhereInput!]
  NOT: [PaymentRecordWhereInput!]
}

input PaymentRecordWhereUniqueInput {
  id: ID
}

type Product {
  id: ID!
  dateCreated: DateTime
  name: String
  price: String
  description: String
  varietal: String
  vendor: User
  carts(where: CartWhereInput, orderBy: CartOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Cart!]
  purchases(where: InvoiceWhereInput, orderBy: InvoiceOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Invoice!]
}

type ProductConnection {
  pageInfo: PageInfo!
  edges: [ProductEdge]!
  aggregate: AggregateProduct!
}

input ProductCreateInput {
  dateCreated: DateTime
  name: String
  price: String
  description: String
  varietal: String
  vendor: UserCreateOneWithoutProductsInput
  carts: CartCreateManyWithoutItemsInput
  purchases: InvoiceCreateManyWithoutItemsInput
}

input ProductCreateManyWithoutCartsInput {
  create: [ProductCreateWithoutCartsInput!]
  connect: [ProductWhereUniqueInput!]
}

input ProductCreateManyWithoutPurchasesInput {
  create: [ProductCreateWithoutPurchasesInput!]
  connect: [ProductWhereUniqueInput!]
}

input ProductCreateManyWithoutVendorInput {
  create: [ProductCreateWithoutVendorInput!]
  connect: [ProductWhereUniqueInput!]
}

input ProductCreateWithoutCartsInput {
  dateCreated: DateTime
  name: String
  price: String
  description: String
  varietal: String
  vendor: UserCreateOneWithoutProductsInput
  purchases: InvoiceCreateManyWithoutItemsInput
}

input ProductCreateWithoutPurchasesInput {
  dateCreated: DateTime
  name: String
  price: String
  description: String
  varietal: String
  vendor: UserCreateOneWithoutProductsInput
  carts: CartCreateManyWithoutItemsInput
}

input ProductCreateWithoutVendorInput {
  dateCreated: DateTime
  name: String
  price: String
  description: String
  varietal: String
  carts: CartCreateManyWithoutItemsInput
  purchases: InvoiceCreateManyWithoutItemsInput
}

type ProductEdge {
  node: Product!
  cursor: String!
}

enum ProductOrderByInput {
  id_ASC
  id_DESC
  dateCreated_ASC
  dateCreated_DESC
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
  dateCreated: DateTime
  name: String
  price: String
  description: String
  varietal: String
}

input ProductScalarWhereInput {
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
  dateCreated: DateTime
  dateCreated_not: DateTime
  dateCreated_in: [DateTime!]
  dateCreated_not_in: [DateTime!]
  dateCreated_lt: DateTime
  dateCreated_lte: DateTime
  dateCreated_gt: DateTime
  dateCreated_gte: DateTime
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
  AND: [ProductScalarWhereInput!]
  OR: [ProductScalarWhereInput!]
  NOT: [ProductScalarWhereInput!]
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

input ProductUpdateInput {
  dateCreated: DateTime
  name: String
  price: String
  description: String
  varietal: String
  vendor: UserUpdateOneWithoutProductsInput
  carts: CartUpdateManyWithoutItemsInput
  purchases: InvoiceUpdateManyWithoutItemsInput
}

input ProductUpdateManyDataInput {
  dateCreated: DateTime
  name: String
  price: String
  description: String
  varietal: String
}

input ProductUpdateManyMutationInput {
  dateCreated: DateTime
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
  deleteMany: [ProductScalarWhereInput!]
  updateMany: [ProductUpdateManyWithWhereNestedInput!]
}

input ProductUpdateManyWithoutPurchasesInput {
  create: [ProductCreateWithoutPurchasesInput!]
  delete: [ProductWhereUniqueInput!]
  connect: [ProductWhereUniqueInput!]
  disconnect: [ProductWhereUniqueInput!]
  update: [ProductUpdateWithWhereUniqueWithoutPurchasesInput!]
  upsert: [ProductUpsertWithWhereUniqueWithoutPurchasesInput!]
  deleteMany: [ProductScalarWhereInput!]
  updateMany: [ProductUpdateManyWithWhereNestedInput!]
}

input ProductUpdateManyWithoutVendorInput {
  create: [ProductCreateWithoutVendorInput!]
  delete: [ProductWhereUniqueInput!]
  connect: [ProductWhereUniqueInput!]
  disconnect: [ProductWhereUniqueInput!]
  update: [ProductUpdateWithWhereUniqueWithoutVendorInput!]
  upsert: [ProductUpsertWithWhereUniqueWithoutVendorInput!]
  deleteMany: [ProductScalarWhereInput!]
  updateMany: [ProductUpdateManyWithWhereNestedInput!]
}

input ProductUpdateManyWithWhereNestedInput {
  where: ProductScalarWhereInput!
  data: ProductUpdateManyDataInput!
}

input ProductUpdateWithoutCartsDataInput {
  dateCreated: DateTime
  name: String
  price: String
  description: String
  varietal: String
  vendor: UserUpdateOneWithoutProductsInput
  purchases: InvoiceUpdateManyWithoutItemsInput
}

input ProductUpdateWithoutPurchasesDataInput {
  dateCreated: DateTime
  name: String
  price: String
  description: String
  varietal: String
  vendor: UserUpdateOneWithoutProductsInput
  carts: CartUpdateManyWithoutItemsInput
}

input ProductUpdateWithoutVendorDataInput {
  dateCreated: DateTime
  name: String
  price: String
  description: String
  varietal: String
  carts: CartUpdateManyWithoutItemsInput
  purchases: InvoiceUpdateManyWithoutItemsInput
}

input ProductUpdateWithWhereUniqueWithoutCartsInput {
  where: ProductWhereUniqueInput!
  data: ProductUpdateWithoutCartsDataInput!
}

input ProductUpdateWithWhereUniqueWithoutPurchasesInput {
  where: ProductWhereUniqueInput!
  data: ProductUpdateWithoutPurchasesDataInput!
}

input ProductUpdateWithWhereUniqueWithoutVendorInput {
  where: ProductWhereUniqueInput!
  data: ProductUpdateWithoutVendorDataInput!
}

input ProductUpsertWithWhereUniqueWithoutCartsInput {
  where: ProductWhereUniqueInput!
  update: ProductUpdateWithoutCartsDataInput!
  create: ProductCreateWithoutCartsInput!
}

input ProductUpsertWithWhereUniqueWithoutPurchasesInput {
  where: ProductWhereUniqueInput!
  update: ProductUpdateWithoutPurchasesDataInput!
  create: ProductCreateWithoutPurchasesInput!
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
  dateCreated: DateTime
  dateCreated_not: DateTime
  dateCreated_in: [DateTime!]
  dateCreated_not_in: [DateTime!]
  dateCreated_lt: DateTime
  dateCreated_lte: DateTime
  dateCreated_gt: DateTime
  dateCreated_gte: DateTime
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
  purchases_every: InvoiceWhereInput
  purchases_some: InvoiceWhereInput
  purchases_none: InvoiceWhereInput
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
  paymentRecord(where: PaymentRecordWhereUniqueInput!): PaymentRecord
  paymentRecords(where: PaymentRecordWhereInput, orderBy: PaymentRecordOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [PaymentRecord]!
  paymentRecordsConnection(where: PaymentRecordWhereInput, orderBy: PaymentRecordOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): PaymentRecordConnection!
  product(where: ProductWhereUniqueInput!): Product
  products(where: ProductWhereInput, orderBy: ProductOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Product]!
  productsConnection(where: ProductWhereInput, orderBy: ProductOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): ProductConnection!
  shippingAddress(where: ShippingAddressWhereUniqueInput!): ShippingAddress
  shippingAddresses(where: ShippingAddressWhereInput, orderBy: ShippingAddressOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [ShippingAddress]!
  shippingAddressesConnection(where: ShippingAddressWhereInput, orderBy: ShippingAddressOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): ShippingAddressConnection!
  user(where: UserWhereUniqueInput!): User
  users(where: UserWhereInput, orderBy: UserOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [User]!
  usersConnection(where: UserWhereInput, orderBy: UserOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): UserConnection!
  node(id: ID!): Node
}

type ShippingAddress {
  id: ID!
  dateCreated: DateTime!
  recipient: String!
  street: String!
  city: String!
  state: String!
  zip: String!
  user: User!
}

type ShippingAddressConnection {
  pageInfo: PageInfo!
  edges: [ShippingAddressEdge]!
  aggregate: AggregateShippingAddress!
}

input ShippingAddressCreateInput {
  dateCreated: DateTime!
  recipient: String!
  street: String!
  city: String!
  state: String!
  zip: String!
  user: UserCreateOneWithoutShippingAddressesInput!
}

input ShippingAddressCreateManyWithoutUserInput {
  create: [ShippingAddressCreateWithoutUserInput!]
  connect: [ShippingAddressWhereUniqueInput!]
}

input ShippingAddressCreateOneInput {
  create: ShippingAddressCreateInput
  connect: ShippingAddressWhereUniqueInput
}

input ShippingAddressCreateWithoutUserInput {
  dateCreated: DateTime!
  recipient: String!
  street: String!
  city: String!
  state: String!
  zip: String!
}

type ShippingAddressEdge {
  node: ShippingAddress!
  cursor: String!
}

enum ShippingAddressOrderByInput {
  id_ASC
  id_DESC
  dateCreated_ASC
  dateCreated_DESC
  recipient_ASC
  recipient_DESC
  street_ASC
  street_DESC
  city_ASC
  city_DESC
  state_ASC
  state_DESC
  zip_ASC
  zip_DESC
  createdAt_ASC
  createdAt_DESC
  updatedAt_ASC
  updatedAt_DESC
}

type ShippingAddressPreviousValues {
  id: ID!
  dateCreated: DateTime!
  recipient: String!
  street: String!
  city: String!
  state: String!
  zip: String!
}

input ShippingAddressScalarWhereInput {
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
  dateCreated: DateTime
  dateCreated_not: DateTime
  dateCreated_in: [DateTime!]
  dateCreated_not_in: [DateTime!]
  dateCreated_lt: DateTime
  dateCreated_lte: DateTime
  dateCreated_gt: DateTime
  dateCreated_gte: DateTime
  recipient: String
  recipient_not: String
  recipient_in: [String!]
  recipient_not_in: [String!]
  recipient_lt: String
  recipient_lte: String
  recipient_gt: String
  recipient_gte: String
  recipient_contains: String
  recipient_not_contains: String
  recipient_starts_with: String
  recipient_not_starts_with: String
  recipient_ends_with: String
  recipient_not_ends_with: String
  street: String
  street_not: String
  street_in: [String!]
  street_not_in: [String!]
  street_lt: String
  street_lte: String
  street_gt: String
  street_gte: String
  street_contains: String
  street_not_contains: String
  street_starts_with: String
  street_not_starts_with: String
  street_ends_with: String
  street_not_ends_with: String
  city: String
  city_not: String
  city_in: [String!]
  city_not_in: [String!]
  city_lt: String
  city_lte: String
  city_gt: String
  city_gte: String
  city_contains: String
  city_not_contains: String
  city_starts_with: String
  city_not_starts_with: String
  city_ends_with: String
  city_not_ends_with: String
  state: String
  state_not: String
  state_in: [String!]
  state_not_in: [String!]
  state_lt: String
  state_lte: String
  state_gt: String
  state_gte: String
  state_contains: String
  state_not_contains: String
  state_starts_with: String
  state_not_starts_with: String
  state_ends_with: String
  state_not_ends_with: String
  zip: String
  zip_not: String
  zip_in: [String!]
  zip_not_in: [String!]
  zip_lt: String
  zip_lte: String
  zip_gt: String
  zip_gte: String
  zip_contains: String
  zip_not_contains: String
  zip_starts_with: String
  zip_not_starts_with: String
  zip_ends_with: String
  zip_not_ends_with: String
  AND: [ShippingAddressScalarWhereInput!]
  OR: [ShippingAddressScalarWhereInput!]
  NOT: [ShippingAddressScalarWhereInput!]
}

type ShippingAddressSubscriptionPayload {
  mutation: MutationType!
  node: ShippingAddress
  updatedFields: [String!]
  previousValues: ShippingAddressPreviousValues
}

input ShippingAddressSubscriptionWhereInput {
  mutation_in: [MutationType!]
  updatedFields_contains: String
  updatedFields_contains_every: [String!]
  updatedFields_contains_some: [String!]
  node: ShippingAddressWhereInput
  AND: [ShippingAddressSubscriptionWhereInput!]
  OR: [ShippingAddressSubscriptionWhereInput!]
  NOT: [ShippingAddressSubscriptionWhereInput!]
}

input ShippingAddressUpdateDataInput {
  dateCreated: DateTime
  recipient: String
  street: String
  city: String
  state: String
  zip: String
  user: UserUpdateOneRequiredWithoutShippingAddressesInput
}

input ShippingAddressUpdateInput {
  dateCreated: DateTime
  recipient: String
  street: String
  city: String
  state: String
  zip: String
  user: UserUpdateOneRequiredWithoutShippingAddressesInput
}

input ShippingAddressUpdateManyDataInput {
  dateCreated: DateTime
  recipient: String
  street: String
  city: String
  state: String
  zip: String
}

input ShippingAddressUpdateManyMutationInput {
  dateCreated: DateTime
  recipient: String
  street: String
  city: String
  state: String
  zip: String
}

input ShippingAddressUpdateManyWithoutUserInput {
  create: [ShippingAddressCreateWithoutUserInput!]
  delete: [ShippingAddressWhereUniqueInput!]
  connect: [ShippingAddressWhereUniqueInput!]
  disconnect: [ShippingAddressWhereUniqueInput!]
  update: [ShippingAddressUpdateWithWhereUniqueWithoutUserInput!]
  upsert: [ShippingAddressUpsertWithWhereUniqueWithoutUserInput!]
  deleteMany: [ShippingAddressScalarWhereInput!]
  updateMany: [ShippingAddressUpdateManyWithWhereNestedInput!]
}

input ShippingAddressUpdateManyWithWhereNestedInput {
  where: ShippingAddressScalarWhereInput!
  data: ShippingAddressUpdateManyDataInput!
}

input ShippingAddressUpdateOneInput {
  create: ShippingAddressCreateInput
  update: ShippingAddressUpdateDataInput
  upsert: ShippingAddressUpsertNestedInput
  delete: Boolean
  disconnect: Boolean
  connect: ShippingAddressWhereUniqueInput
}

input ShippingAddressUpdateWithoutUserDataInput {
  dateCreated: DateTime
  recipient: String
  street: String
  city: String
  state: String
  zip: String
}

input ShippingAddressUpdateWithWhereUniqueWithoutUserInput {
  where: ShippingAddressWhereUniqueInput!
  data: ShippingAddressUpdateWithoutUserDataInput!
}

input ShippingAddressUpsertNestedInput {
  update: ShippingAddressUpdateDataInput!
  create: ShippingAddressCreateInput!
}

input ShippingAddressUpsertWithWhereUniqueWithoutUserInput {
  where: ShippingAddressWhereUniqueInput!
  update: ShippingAddressUpdateWithoutUserDataInput!
  create: ShippingAddressCreateWithoutUserInput!
}

input ShippingAddressWhereInput {
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
  dateCreated: DateTime
  dateCreated_not: DateTime
  dateCreated_in: [DateTime!]
  dateCreated_not_in: [DateTime!]
  dateCreated_lt: DateTime
  dateCreated_lte: DateTime
  dateCreated_gt: DateTime
  dateCreated_gte: DateTime
  recipient: String
  recipient_not: String
  recipient_in: [String!]
  recipient_not_in: [String!]
  recipient_lt: String
  recipient_lte: String
  recipient_gt: String
  recipient_gte: String
  recipient_contains: String
  recipient_not_contains: String
  recipient_starts_with: String
  recipient_not_starts_with: String
  recipient_ends_with: String
  recipient_not_ends_with: String
  street: String
  street_not: String
  street_in: [String!]
  street_not_in: [String!]
  street_lt: String
  street_lte: String
  street_gt: String
  street_gte: String
  street_contains: String
  street_not_contains: String
  street_starts_with: String
  street_not_starts_with: String
  street_ends_with: String
  street_not_ends_with: String
  city: String
  city_not: String
  city_in: [String!]
  city_not_in: [String!]
  city_lt: String
  city_lte: String
  city_gt: String
  city_gte: String
  city_contains: String
  city_not_contains: String
  city_starts_with: String
  city_not_starts_with: String
  city_ends_with: String
  city_not_ends_with: String
  state: String
  state_not: String
  state_in: [String!]
  state_not_in: [String!]
  state_lt: String
  state_lte: String
  state_gt: String
  state_gte: String
  state_contains: String
  state_not_contains: String
  state_starts_with: String
  state_not_starts_with: String
  state_ends_with: String
  state_not_ends_with: String
  zip: String
  zip_not: String
  zip_in: [String!]
  zip_not_in: [String!]
  zip_lt: String
  zip_lte: String
  zip_gt: String
  zip_gte: String
  zip_contains: String
  zip_not_contains: String
  zip_starts_with: String
  zip_not_starts_with: String
  zip_ends_with: String
  zip_not_ends_with: String
  user: UserWhereInput
  AND: [ShippingAddressWhereInput!]
  OR: [ShippingAddressWhereInput!]
  NOT: [ShippingAddressWhereInput!]
}

input ShippingAddressWhereUniqueInput {
  id: ID
}

type Subscription {
  cart(where: CartSubscriptionWhereInput): CartSubscriptionPayload
  invoice(where: InvoiceSubscriptionWhereInput): InvoiceSubscriptionPayload
  paymentRecord(where: PaymentRecordSubscriptionWhereInput): PaymentRecordSubscriptionPayload
  product(where: ProductSubscriptionWhereInput): ProductSubscriptionPayload
  shippingAddress(where: ShippingAddressSubscriptionWhereInput): ShippingAddressSubscriptionPayload
  user(where: UserSubscriptionWhereInput): UserSubscriptionPayload
}

type User {
  id: ID!
  dateCreated: DateTime
  role: String
  permissions: [String!]!
  email: String
  firstName: String
  lastName: String
  bizName: String
  password: String
  cart: Cart
  stripeId: String
  products(where: ProductWhereInput, orderBy: ProductOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Product!]
  purchases(where: InvoiceWhereInput, orderBy: InvoiceOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Invoice!]
  sales(where: InvoiceWhereInput, orderBy: InvoiceOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Invoice!]
  shippingAddresses(where: ShippingAddressWhereInput, orderBy: ShippingAddressOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [ShippingAddress!]
}

type UserConnection {
  pageInfo: PageInfo!
  edges: [UserEdge]!
  aggregate: AggregateUser!
}

input UserCreateInput {
  dateCreated: DateTime
  role: String
  permissions: UserCreatepermissionsInput
  email: String
  firstName: String
  lastName: String
  bizName: String
  password: String
  cart: CartCreateOneWithoutUserInput
  stripeId: String
  products: ProductCreateManyWithoutVendorInput
  purchases: InvoiceCreateManyWithoutCustomerInput
  sales: InvoiceCreateManyWithoutVendorsInput
  shippingAddresses: ShippingAddressCreateManyWithoutUserInput
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

input UserCreateOneWithoutShippingAddressesInput {
  create: UserCreateWithoutShippingAddressesInput
  connect: UserWhereUniqueInput
}

input UserCreatepermissionsInput {
  set: [String!]
}

input UserCreateWithoutCartInput {
  dateCreated: DateTime
  role: String
  permissions: UserCreatepermissionsInput
  email: String
  firstName: String
  lastName: String
  bizName: String
  password: String
  stripeId: String
  products: ProductCreateManyWithoutVendorInput
  purchases: InvoiceCreateManyWithoutCustomerInput
  sales: InvoiceCreateManyWithoutVendorsInput
  shippingAddresses: ShippingAddressCreateManyWithoutUserInput
}

input UserCreateWithoutProductsInput {
  dateCreated: DateTime
  role: String
  permissions: UserCreatepermissionsInput
  email: String
  firstName: String
  lastName: String
  bizName: String
  password: String
  cart: CartCreateOneWithoutUserInput
  stripeId: String
  purchases: InvoiceCreateManyWithoutCustomerInput
  sales: InvoiceCreateManyWithoutVendorsInput
  shippingAddresses: ShippingAddressCreateManyWithoutUserInput
}

input UserCreateWithoutPurchasesInput {
  dateCreated: DateTime
  role: String
  permissions: UserCreatepermissionsInput
  email: String
  firstName: String
  lastName: String
  bizName: String
  password: String
  cart: CartCreateOneWithoutUserInput
  stripeId: String
  products: ProductCreateManyWithoutVendorInput
  sales: InvoiceCreateManyWithoutVendorsInput
  shippingAddresses: ShippingAddressCreateManyWithoutUserInput
}

input UserCreateWithoutSalesInput {
  dateCreated: DateTime
  role: String
  permissions: UserCreatepermissionsInput
  email: String
  firstName: String
  lastName: String
  bizName: String
  password: String
  cart: CartCreateOneWithoutUserInput
  stripeId: String
  products: ProductCreateManyWithoutVendorInput
  purchases: InvoiceCreateManyWithoutCustomerInput
  shippingAddresses: ShippingAddressCreateManyWithoutUserInput
}

input UserCreateWithoutShippingAddressesInput {
  dateCreated: DateTime
  role: String
  permissions: UserCreatepermissionsInput
  email: String
  firstName: String
  lastName: String
  bizName: String
  password: String
  cart: CartCreateOneWithoutUserInput
  stripeId: String
  products: ProductCreateManyWithoutVendorInput
  purchases: InvoiceCreateManyWithoutCustomerInput
  sales: InvoiceCreateManyWithoutVendorsInput
}

type UserEdge {
  node: User!
  cursor: String!
}

enum UserOrderByInput {
  id_ASC
  id_DESC
  dateCreated_ASC
  dateCreated_DESC
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
  stripeId_ASC
  stripeId_DESC
  createdAt_ASC
  createdAt_DESC
  updatedAt_ASC
  updatedAt_DESC
}

type UserPreviousValues {
  id: ID!
  dateCreated: DateTime
  role: String
  permissions: [String!]!
  email: String
  firstName: String
  lastName: String
  bizName: String
  password: String
  stripeId: String
}

input UserScalarWhereInput {
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
  dateCreated: DateTime
  dateCreated_not: DateTime
  dateCreated_in: [DateTime!]
  dateCreated_not_in: [DateTime!]
  dateCreated_lt: DateTime
  dateCreated_lte: DateTime
  dateCreated_gt: DateTime
  dateCreated_gte: DateTime
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
  stripeId: String
  stripeId_not: String
  stripeId_in: [String!]
  stripeId_not_in: [String!]
  stripeId_lt: String
  stripeId_lte: String
  stripeId_gt: String
  stripeId_gte: String
  stripeId_contains: String
  stripeId_not_contains: String
  stripeId_starts_with: String
  stripeId_not_starts_with: String
  stripeId_ends_with: String
  stripeId_not_ends_with: String
  AND: [UserScalarWhereInput!]
  OR: [UserScalarWhereInput!]
  NOT: [UserScalarWhereInput!]
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
  dateCreated: DateTime
  role: String
  permissions: UserUpdatepermissionsInput
  email: String
  firstName: String
  lastName: String
  bizName: String
  password: String
  cart: CartUpdateOneWithoutUserInput
  stripeId: String
  products: ProductUpdateManyWithoutVendorInput
  purchases: InvoiceUpdateManyWithoutCustomerInput
  sales: InvoiceUpdateManyWithoutVendorsInput
  shippingAddresses: ShippingAddressUpdateManyWithoutUserInput
}

input UserUpdateManyDataInput {
  dateCreated: DateTime
  role: String
  permissions: UserUpdatepermissionsInput
  email: String
  firstName: String
  lastName: String
  bizName: String
  password: String
  stripeId: String
}

input UserUpdateManyMutationInput {
  dateCreated: DateTime
  role: String
  permissions: UserUpdatepermissionsInput
  email: String
  firstName: String
  lastName: String
  bizName: String
  password: String
  stripeId: String
}

input UserUpdateManyWithoutSalesInput {
  create: [UserCreateWithoutSalesInput!]
  delete: [UserWhereUniqueInput!]
  connect: [UserWhereUniqueInput!]
  disconnect: [UserWhereUniqueInput!]
  update: [UserUpdateWithWhereUniqueWithoutSalesInput!]
  upsert: [UserUpsertWithWhereUniqueWithoutSalesInput!]
  deleteMany: [UserScalarWhereInput!]
  updateMany: [UserUpdateManyWithWhereNestedInput!]
}

input UserUpdateManyWithWhereNestedInput {
  where: UserScalarWhereInput!
  data: UserUpdateManyDataInput!
}

input UserUpdateOneRequiredWithoutCartInput {
  create: UserCreateWithoutCartInput
  update: UserUpdateWithoutCartDataInput
  upsert: UserUpsertWithoutCartInput
  connect: UserWhereUniqueInput
}

input UserUpdateOneRequiredWithoutShippingAddressesInput {
  create: UserCreateWithoutShippingAddressesInput
  update: UserUpdateWithoutShippingAddressesDataInput
  upsert: UserUpsertWithoutShippingAddressesInput
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
  dateCreated: DateTime
  role: String
  permissions: UserUpdatepermissionsInput
  email: String
  firstName: String
  lastName: String
  bizName: String
  password: String
  stripeId: String
  products: ProductUpdateManyWithoutVendorInput
  purchases: InvoiceUpdateManyWithoutCustomerInput
  sales: InvoiceUpdateManyWithoutVendorsInput
  shippingAddresses: ShippingAddressUpdateManyWithoutUserInput
}

input UserUpdateWithoutProductsDataInput {
  dateCreated: DateTime
  role: String
  permissions: UserUpdatepermissionsInput
  email: String
  firstName: String
  lastName: String
  bizName: String
  password: String
  cart: CartUpdateOneWithoutUserInput
  stripeId: String
  purchases: InvoiceUpdateManyWithoutCustomerInput
  sales: InvoiceUpdateManyWithoutVendorsInput
  shippingAddresses: ShippingAddressUpdateManyWithoutUserInput
}

input UserUpdateWithoutPurchasesDataInput {
  dateCreated: DateTime
  role: String
  permissions: UserUpdatepermissionsInput
  email: String
  firstName: String
  lastName: String
  bizName: String
  password: String
  cart: CartUpdateOneWithoutUserInput
  stripeId: String
  products: ProductUpdateManyWithoutVendorInput
  sales: InvoiceUpdateManyWithoutVendorsInput
  shippingAddresses: ShippingAddressUpdateManyWithoutUserInput
}

input UserUpdateWithoutSalesDataInput {
  dateCreated: DateTime
  role: String
  permissions: UserUpdatepermissionsInput
  email: String
  firstName: String
  lastName: String
  bizName: String
  password: String
  cart: CartUpdateOneWithoutUserInput
  stripeId: String
  products: ProductUpdateManyWithoutVendorInput
  purchases: InvoiceUpdateManyWithoutCustomerInput
  shippingAddresses: ShippingAddressUpdateManyWithoutUserInput
}

input UserUpdateWithoutShippingAddressesDataInput {
  dateCreated: DateTime
  role: String
  permissions: UserUpdatepermissionsInput
  email: String
  firstName: String
  lastName: String
  bizName: String
  password: String
  cart: CartUpdateOneWithoutUserInput
  stripeId: String
  products: ProductUpdateManyWithoutVendorInput
  purchases: InvoiceUpdateManyWithoutCustomerInput
  sales: InvoiceUpdateManyWithoutVendorsInput
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

input UserUpsertWithoutShippingAddressesInput {
  update: UserUpdateWithoutShippingAddressesDataInput!
  create: UserCreateWithoutShippingAddressesInput!
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
  dateCreated: DateTime
  dateCreated_not: DateTime
  dateCreated_in: [DateTime!]
  dateCreated_not_in: [DateTime!]
  dateCreated_lt: DateTime
  dateCreated_lte: DateTime
  dateCreated_gt: DateTime
  dateCreated_gte: DateTime
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
  stripeId: String
  stripeId_not: String
  stripeId_in: [String!]
  stripeId_not_in: [String!]
  stripeId_lt: String
  stripeId_lte: String
  stripeId_gt: String
  stripeId_gte: String
  stripeId_contains: String
  stripeId_not_contains: String
  stripeId_starts_with: String
  stripeId_not_starts_with: String
  stripeId_ends_with: String
  stripeId_not_ends_with: String
  products_every: ProductWhereInput
  products_some: ProductWhereInput
  products_none: ProductWhereInput
  purchases_every: InvoiceWhereInput
  purchases_some: InvoiceWhereInput
  purchases_none: InvoiceWhereInput
  sales_every: InvoiceWhereInput
  sales_some: InvoiceWhereInput
  sales_none: InvoiceWhereInput
  shippingAddresses_every: ShippingAddressWhereInput
  shippingAddresses_some: ShippingAddressWhereInput
  shippingAddresses_none: ShippingAddressWhereInput
  AND: [UserWhereInput!]
  OR: [UserWhereInput!]
  NOT: [UserWhereInput!]
}

input UserWhereUniqueInput {
  id: ID
  email: String
  stripeId: String
}
`