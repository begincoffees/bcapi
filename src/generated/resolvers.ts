import { GraphQLResolveInfo } from "graphql";

export interface ITypeMap {
  Context: any;
  InvoiceOrderByInput: any;
  ProductOrderByInput: any;
  UserOrderByInput: any;
  CartOrderByInput: any;

  QueryParent: any;
  MutationParent: any;
  AuthPayloadParent: any;
  ViewerParent: any;
  MutationResultParent: any;
  UserParent: any;
  CartParent: any;
  InvoiceParent: any;
  ProductParent: any;
}

export interface cartAddItem {
  id: string;
}
export interface purchaseAddItem {
  id: string;
  price: string;
  quantity: string;
}
export interface InvoiceWhereInput {
  AND: string;
  OR: string;
  NOT: string;
  id: string;
  id_not: string;
  id_in: string;
  id_not_in: string;
  id_lt: string;
  id_lte: string;
  id_gt: string;
  id_gte: string;
  id_contains: string;
  id_not_contains: string;
  id_starts_with: string;
  id_not_starts_with: string;
  id_ends_with: string;
  id_not_ends_with: string;
  amount: string;
  amount_not: string;
  amount_in: string;
  amount_not_in: string;
  amount_lt: string;
  amount_lte: string;
  amount_gt: string;
  amount_gte: string;
  amount_contains: string;
  amount_not_contains: string;
  amount_starts_with: string;
  amount_not_starts_with: string;
  amount_ends_with: string;
  amount_not_ends_with: string;
  email: string;
  email_not: string;
  email_in: string;
  email_not_in: string;
  email_lt: string;
  email_lte: string;
  email_gt: string;
  email_gte: string;
  email_contains: string;
  email_not_contains: string;
  email_starts_with: string;
  email_not_starts_with: string;
  email_ends_with: string;
  email_not_ends_with: string;
  items_every: string;
  items_some: string;
  items_none: string;
  customer: string;
  vendors_every: string;
  vendors_some: string;
  vendors_none: string;
}
export interface ProductWhereInput {
  AND: string;
  OR: string;
  NOT: string;
  id: string;
  id_not: string;
  id_in: string;
  id_not_in: string;
  id_lt: string;
  id_lte: string;
  id_gt: string;
  id_gte: string;
  id_contains: string;
  id_not_contains: string;
  id_starts_with: string;
  id_not_starts_with: string;
  id_ends_with: string;
  id_not_ends_with: string;
  name: string;
  name_not: string;
  name_in: string;
  name_not_in: string;
  name_lt: string;
  name_lte: string;
  name_gt: string;
  name_gte: string;
  name_contains: string;
  name_not_contains: string;
  name_starts_with: string;
  name_not_starts_with: string;
  name_ends_with: string;
  name_not_ends_with: string;
  price: string;
  price_not: string;
  price_in: string;
  price_not_in: string;
  price_lt: string;
  price_lte: string;
  price_gt: string;
  price_gte: string;
  price_contains: string;
  price_not_contains: string;
  price_starts_with: string;
  price_not_starts_with: string;
  price_ends_with: string;
  price_not_ends_with: string;
  description: string;
  description_not: string;
  description_in: string;
  description_not_in: string;
  description_lt: string;
  description_lte: string;
  description_gt: string;
  description_gte: string;
  description_contains: string;
  description_not_contains: string;
  description_starts_with: string;
  description_not_starts_with: string;
  description_ends_with: string;
  description_not_ends_with: string;
  varietal: string;
  varietal_not: string;
  varietal_in: string;
  varietal_not_in: string;
  varietal_lt: string;
  varietal_lte: string;
  varietal_gt: string;
  varietal_gte: string;
  varietal_contains: string;
  varietal_not_contains: string;
  varietal_starts_with: string;
  varietal_not_starts_with: string;
  varietal_ends_with: string;
  varietal_not_ends_with: string;
  vendor: string;
  carts_every: string;
  carts_some: string;
  carts_none: string;
}
export interface UserWhereInput {
  AND: string;
  OR: string;
  NOT: string;
  id: string;
  id_not: string;
  id_in: string;
  id_not_in: string;
  id_lt: string;
  id_lte: string;
  id_gt: string;
  id_gte: string;
  id_contains: string;
  id_not_contains: string;
  id_starts_with: string;
  id_not_starts_with: string;
  id_ends_with: string;
  id_not_ends_with: string;
  role: string;
  role_not: string;
  role_in: string;
  role_not_in: string;
  role_lt: string;
  role_lte: string;
  role_gt: string;
  role_gte: string;
  role_contains: string;
  role_not_contains: string;
  role_starts_with: string;
  role_not_starts_with: string;
  role_ends_with: string;
  role_not_ends_with: string;
  email: string;
  email_not: string;
  email_in: string;
  email_not_in: string;
  email_lt: string;
  email_lte: string;
  email_gt: string;
  email_gte: string;
  email_contains: string;
  email_not_contains: string;
  email_starts_with: string;
  email_not_starts_with: string;
  email_ends_with: string;
  email_not_ends_with: string;
  firstName: string;
  firstName_not: string;
  firstName_in: string;
  firstName_not_in: string;
  firstName_lt: string;
  firstName_lte: string;
  firstName_gt: string;
  firstName_gte: string;
  firstName_contains: string;
  firstName_not_contains: string;
  firstName_starts_with: string;
  firstName_not_starts_with: string;
  firstName_ends_with: string;
  firstName_not_ends_with: string;
  lastName: string;
  lastName_not: string;
  lastName_in: string;
  lastName_not_in: string;
  lastName_lt: string;
  lastName_lte: string;
  lastName_gt: string;
  lastName_gte: string;
  lastName_contains: string;
  lastName_not_contains: string;
  lastName_starts_with: string;
  lastName_not_starts_with: string;
  lastName_ends_with: string;
  lastName_not_ends_with: string;
  bizName: string;
  bizName_not: string;
  bizName_in: string;
  bizName_not_in: string;
  bizName_lt: string;
  bizName_lte: string;
  bizName_gt: string;
  bizName_gte: string;
  bizName_contains: string;
  bizName_not_contains: string;
  bizName_starts_with: string;
  bizName_not_starts_with: string;
  bizName_ends_with: string;
  bizName_not_ends_with: string;
  password: string;
  password_not: string;
  password_in: string;
  password_not_in: string;
  password_lt: string;
  password_lte: string;
  password_gt: string;
  password_gte: string;
  password_contains: string;
  password_not_contains: string;
  password_starts_with: string;
  password_not_starts_with: string;
  password_ends_with: string;
  password_not_ends_with: string;
  cart: string;
  purchases_every: string;
  purchases_some: string;
  purchases_none: string;
  products_every: string;
  products_some: string;
  products_none: string;
  sales_every: string;
  sales_some: string;
  sales_none: string;
}
export interface CartWhereInput {
  AND: string;
  OR: string;
  NOT: string;
  id: string;
  id_not: string;
  id_in: string;
  id_not_in: string;
  id_lt: string;
  id_lte: string;
  id_gt: string;
  id_gte: string;
  id_contains: string;
  id_not_contains: string;
  id_starts_with: string;
  id_not_starts_with: string;
  id_ends_with: string;
  id_not_ends_with: string;
  itemCount: number;
  itemCount_not: number;
  itemCount_in: number;
  itemCount_not_in: number;
  itemCount_lt: number;
  itemCount_lte: number;
  itemCount_gt: number;
  itemCount_gte: number;
  totalPrice: string;
  totalPrice_not: string;
  totalPrice_in: string;
  totalPrice_not_in: string;
  totalPrice_lt: string;
  totalPrice_lte: string;
  totalPrice_gt: string;
  totalPrice_gte: string;
  totalPrice_contains: string;
  totalPrice_not_contains: string;
  totalPrice_starts_with: string;
  totalPrice_not_starts_with: string;
  totalPrice_ends_with: string;
  totalPrice_not_ends_with: string;
  items_every: string;
  items_some: string;
  items_none: string;
}

export namespace QueryResolvers {
  export type ViewerType<T extends ITypeMap> = (
    parent: T["QueryParent"],
    args: {},
    ctx: T["Context"],
    info: GraphQLResolveInfo
  ) => T["ViewerParent"] | null | Promise<T["ViewerParent"] | null>;

  export interface ArgsCart {
    id: string | null;
  }

  export type CartType<T extends ITypeMap> = (
    parent: T["QueryParent"],
    args: ArgsCart,
    ctx: T["Context"],
    info: GraphQLResolveInfo
  ) => T["CartParent"] | Promise<T["CartParent"]>;

  export type FeedType<T extends ITypeMap> = (
    parent: T["QueryParent"],
    args: {},
    ctx: T["Context"],
    info: GraphQLResolveInfo
  ) => T["ProductParent"][] | Promise<T["ProductParent"][]>;

  export interface Type<T extends ITypeMap> {
    viewer: (
      parent: T["QueryParent"],
      args: {},
      ctx: T["Context"],
      info: GraphQLResolveInfo
    ) => T["ViewerParent"] | null | Promise<T["ViewerParent"] | null>;
    cart: (
      parent: T["QueryParent"],
      args: ArgsCart,
      ctx: T["Context"],
      info: GraphQLResolveInfo
    ) => T["CartParent"] | Promise<T["CartParent"]>;
    feed: (
      parent: T["QueryParent"],
      args: {},
      ctx: T["Context"],
      info: GraphQLResolveInfo
    ) => T["ProductParent"][] | Promise<T["ProductParent"][]>;
  }
}

export namespace MutationResolvers {
  export interface ArgsCustomerSignup {
    email: string;
    password: string;
    firstName: string;
    lastName: string;
  }

  export type CustomerSignupType<T extends ITypeMap> = (
    parent: T["MutationParent"],
    args: ArgsCustomerSignup,
    ctx: T["Context"],
    info: GraphQLResolveInfo
  ) => T["AuthPayloadParent"] | Promise<T["AuthPayloadParent"]>;

  export interface ArgsVendorSignup {
    name: string;
    email: string;
    password: string;
  }

  export type VendorSignupType<T extends ITypeMap> = (
    parent: T["MutationParent"],
    args: ArgsVendorSignup,
    ctx: T["Context"],
    info: GraphQLResolveInfo
  ) => T["AuthPayloadParent"] | Promise<T["AuthPayloadParent"]>;

  export interface ArgsLogin {
    email: string;
    password: string;
  }

  export type LoginType<T extends ITypeMap> = (
    parent: T["MutationParent"],
    args: ArgsLogin,
    ctx: T["Context"],
    info: GraphQLResolveInfo
  ) => T["AuthPayloadParent"] | Promise<T["AuthPayloadParent"]>;

  export interface ArgsLogout {
    email: string | null;
  }

  export type LogoutType<T extends ITypeMap> = (
    parent: T["MutationParent"],
    args: ArgsLogout,
    ctx: T["Context"],
    info: GraphQLResolveInfo
  ) => T["MutationResultParent"] | Promise<T["MutationResultParent"]>;

  export interface ArgsAddItemToCart {
    product: cartAddItem | null;
  }

  export type AddItemToCartType<T extends ITypeMap> = (
    parent: T["MutationParent"],
    args: ArgsAddItemToCart,
    ctx: T["Context"],
    info: GraphQLResolveInfo
  ) => T["MutationResultParent"] | Promise<T["MutationResultParent"]>;

  export interface ArgsUpdateCartItem {
    id: string | null;
    quantity: number | null;
  }

  export type UpdateCartItemType<T extends ITypeMap> = (
    parent: T["MutationParent"],
    args: ArgsUpdateCartItem,
    ctx: T["Context"],
    info: GraphQLResolveInfo
  ) => T["MutationResultParent"] | Promise<T["MutationResultParent"]>;

  export interface ArgsRemoveItemFromCart {
    id: string | null;
  }

  export type RemoveItemFromCartType<T extends ITypeMap> = (
    parent: T["MutationParent"],
    args: ArgsRemoveItemFromCart,
    ctx: T["Context"],
    info: GraphQLResolveInfo
  ) => T["MutationResultParent"] | Promise<T["MutationResultParent"]>;

  export interface ArgsClearCart {
    id: string | null;
  }

  export type ClearCartType<T extends ITypeMap> = (
    parent: T["MutationParent"],
    args: ArgsClearCart,
    ctx: T["Context"],
    info: GraphQLResolveInfo
  ) => T["MutationResultParent"] | Promise<T["MutationResultParent"]>;

  export interface ArgsCheckout {
    items: purchaseAddItem[] | null;
  }

  export type CheckoutType<T extends ITypeMap> = (
    parent: T["MutationParent"],
    args: ArgsCheckout,
    ctx: T["Context"],
    info: GraphQLResolveInfo
  ) => T["MutationResultParent"] | Promise<T["MutationResultParent"]>;

  export interface ArgsCreateNewProduct {
    name: string;
    price: string;
    description: string;
    imageUrl: string | null;
    varietal: string;
    vendor: string;
  }

  export type CreateNewProductType<T extends ITypeMap> = (
    parent: T["MutationParent"],
    args: ArgsCreateNewProduct,
    ctx: T["Context"],
    info: GraphQLResolveInfo
  ) => T["MutationResultParent"] | Promise<T["MutationResultParent"]>;

  export interface Type<T extends ITypeMap> {
    customerSignup: (
      parent: T["MutationParent"],
      args: ArgsCustomerSignup,
      ctx: T["Context"],
      info: GraphQLResolveInfo
    ) => T["AuthPayloadParent"] | Promise<T["AuthPayloadParent"]>;
    vendorSignup: (
      parent: T["MutationParent"],
      args: ArgsVendorSignup,
      ctx: T["Context"],
      info: GraphQLResolveInfo
    ) => T["AuthPayloadParent"] | Promise<T["AuthPayloadParent"]>;
    login: (
      parent: T["MutationParent"],
      args: ArgsLogin,
      ctx: T["Context"],
      info: GraphQLResolveInfo
    ) => T["AuthPayloadParent"] | Promise<T["AuthPayloadParent"]>;
    logout: (
      parent: T["MutationParent"],
      args: ArgsLogout,
      ctx: T["Context"],
      info: GraphQLResolveInfo
    ) => T["MutationResultParent"] | Promise<T["MutationResultParent"]>;
    addItemToCart: (
      parent: T["MutationParent"],
      args: ArgsAddItemToCart,
      ctx: T["Context"],
      info: GraphQLResolveInfo
    ) => T["MutationResultParent"] | Promise<T["MutationResultParent"]>;
    updateCartItem: (
      parent: T["MutationParent"],
      args: ArgsUpdateCartItem,
      ctx: T["Context"],
      info: GraphQLResolveInfo
    ) => T["MutationResultParent"] | Promise<T["MutationResultParent"]>;
    removeItemFromCart: (
      parent: T["MutationParent"],
      args: ArgsRemoveItemFromCart,
      ctx: T["Context"],
      info: GraphQLResolveInfo
    ) => T["MutationResultParent"] | Promise<T["MutationResultParent"]>;
    clearCart: (
      parent: T["MutationParent"],
      args: ArgsClearCart,
      ctx: T["Context"],
      info: GraphQLResolveInfo
    ) => T["MutationResultParent"] | Promise<T["MutationResultParent"]>;
    checkout: (
      parent: T["MutationParent"],
      args: ArgsCheckout,
      ctx: T["Context"],
      info: GraphQLResolveInfo
    ) => T["MutationResultParent"] | Promise<T["MutationResultParent"]>;
    createNewProduct: (
      parent: T["MutationParent"],
      args: ArgsCreateNewProduct,
      ctx: T["Context"],
      info: GraphQLResolveInfo
    ) => T["MutationResultParent"] | Promise<T["MutationResultParent"]>;
  }
}

export namespace AuthPayloadResolvers {
  export type TokenType<T extends ITypeMap> = (
    parent: T["AuthPayloadParent"],
    args: {},
    ctx: T["Context"],
    info: GraphQLResolveInfo
  ) => string | null | Promise<string | null>;

  export type UserType<T extends ITypeMap> = (
    parent: T["AuthPayloadParent"],
    args: {},
    ctx: T["Context"],
    info: GraphQLResolveInfo
  ) => T["UserParent"] | null | Promise<T["UserParent"] | null>;

  export interface Type<T extends ITypeMap> {
    token: (
      parent: T["AuthPayloadParent"],
      args: {},
      ctx: T["Context"],
      info: GraphQLResolveInfo
    ) => string | null | Promise<string | null>;
    user: (
      parent: T["AuthPayloadParent"],
      args: {},
      ctx: T["Context"],
      info: GraphQLResolveInfo
    ) => T["UserParent"] | null | Promise<T["UserParent"] | null>;
  }
}

export namespace ViewerResolvers {
  export type MeType<T extends ITypeMap> = (
    parent: T["ViewerParent"],
    args: {},
    ctx: T["Context"],
    info: GraphQLResolveInfo
  ) => T["UserParent"] | Promise<T["UserParent"]>;

  export interface ArgsCart {
    id: string | null;
  }

  export type CartType<T extends ITypeMap> = (
    parent: T["ViewerParent"],
    args: ArgsCart,
    ctx: T["Context"],
    info: GraphQLResolveInfo
  ) => T["CartParent"] | Promise<T["CartParent"]>;

  export interface ArgsPurchases {
    id: string | null;
  }

  export type PurchasesType<T extends ITypeMap> = (
    parent: T["ViewerParent"],
    args: ArgsPurchases,
    ctx: T["Context"],
    info: GraphQLResolveInfo
  ) => T["InvoiceParent"][] | Promise<T["InvoiceParent"][]>;

  export interface ArgsSales {
    id: number | null;
  }

  export type SalesType<T extends ITypeMap> = (
    parent: T["ViewerParent"],
    args: ArgsSales,
    ctx: T["Context"],
    info: GraphQLResolveInfo
  ) => T["InvoiceParent"][] | Promise<T["InvoiceParent"][]>;

  export interface ArgsProducts {
    id: number | null;
  }

  export type ProductsType<T extends ITypeMap> = (
    parent: T["ViewerParent"],
    args: ArgsProducts,
    ctx: T["Context"],
    info: GraphQLResolveInfo
  ) => T["ProductParent"][] | Promise<T["ProductParent"][]>;

  export interface Type<T extends ITypeMap> {
    me: (
      parent: T["ViewerParent"],
      args: {},
      ctx: T["Context"],
      info: GraphQLResolveInfo
    ) => T["UserParent"] | Promise<T["UserParent"]>;
    cart: (
      parent: T["ViewerParent"],
      args: ArgsCart,
      ctx: T["Context"],
      info: GraphQLResolveInfo
    ) => T["CartParent"] | Promise<T["CartParent"]>;
    purchases: (
      parent: T["ViewerParent"],
      args: ArgsPurchases,
      ctx: T["Context"],
      info: GraphQLResolveInfo
    ) => T["InvoiceParent"][] | Promise<T["InvoiceParent"][]>;
    sales: (
      parent: T["ViewerParent"],
      args: ArgsSales,
      ctx: T["Context"],
      info: GraphQLResolveInfo
    ) => T["InvoiceParent"][] | Promise<T["InvoiceParent"][]>;
    products: (
      parent: T["ViewerParent"],
      args: ArgsProducts,
      ctx: T["Context"],
      info: GraphQLResolveInfo
    ) => T["ProductParent"][] | Promise<T["ProductParent"][]>;
  }
}

export namespace MutationResultResolvers {
  export type SuccessType<T extends ITypeMap> = (
    parent: T["MutationResultParent"],
    args: {},
    ctx: T["Context"],
    info: GraphQLResolveInfo
  ) => boolean | null | Promise<boolean | null>;

  export interface Type<T extends ITypeMap> {
    success: (
      parent: T["MutationResultParent"],
      args: {},
      ctx: T["Context"],
      info: GraphQLResolveInfo
    ) => boolean | null | Promise<boolean | null>;
  }
}

export namespace UserResolvers {
  export type IdType<T extends ITypeMap> = (
    parent: T["UserParent"],
    args: {},
    ctx: T["Context"],
    info: GraphQLResolveInfo
  ) => string | Promise<string>;

  export type RoleType<T extends ITypeMap> = (
    parent: T["UserParent"],
    args: {},
    ctx: T["Context"],
    info: GraphQLResolveInfo
  ) => string | null | Promise<string | null>;

  export type PermissionsType<T extends ITypeMap> = (
    parent: T["UserParent"],
    args: {},
    ctx: T["Context"],
    info: GraphQLResolveInfo
  ) => string[] | Promise<string[]>;

  export type EmailType<T extends ITypeMap> = (
    parent: T["UserParent"],
    args: {},
    ctx: T["Context"],
    info: GraphQLResolveInfo
  ) => string | null | Promise<string | null>;

  export type FirstNameType<T extends ITypeMap> = (
    parent: T["UserParent"],
    args: {},
    ctx: T["Context"],
    info: GraphQLResolveInfo
  ) => string | null | Promise<string | null>;

  export type LastNameType<T extends ITypeMap> = (
    parent: T["UserParent"],
    args: {},
    ctx: T["Context"],
    info: GraphQLResolveInfo
  ) => string | null | Promise<string | null>;

  export type BizNameType<T extends ITypeMap> = (
    parent: T["UserParent"],
    args: {},
    ctx: T["Context"],
    info: GraphQLResolveInfo
  ) => string | null | Promise<string | null>;

  export type PasswordType<T extends ITypeMap> = (
    parent: T["UserParent"],
    args: {},
    ctx: T["Context"],
    info: GraphQLResolveInfo
  ) => string | null | Promise<string | null>;

  export type CartType<T extends ITypeMap> = (
    parent: T["UserParent"],
    args: {},
    ctx: T["Context"],
    info: GraphQLResolveInfo
  ) => T["CartParent"] | null | Promise<T["CartParent"] | null>;

  export interface ArgsPurchases<T extends ITypeMap> {
    where: InvoiceWhereInput | null;
    orderBy: T["InvoiceOrderByInput"] | null;
    skip: number | null;
    after: string | null;
    before: string | null;
    first: number | null;
    last: number | null;
  }

  export type PurchasesType<T extends ITypeMap> = (
    parent: T["UserParent"],
    args: ArgsPurchases<T>,
    ctx: T["Context"],
    info: GraphQLResolveInfo
  ) => T["InvoiceParent"][] | Promise<T["InvoiceParent"][]>;

  export interface ArgsProducts<T extends ITypeMap> {
    where: ProductWhereInput | null;
    orderBy: T["ProductOrderByInput"] | null;
    skip: number | null;
    after: string | null;
    before: string | null;
    first: number | null;
    last: number | null;
  }

  export type ProductsType<T extends ITypeMap> = (
    parent: T["UserParent"],
    args: ArgsProducts<T>,
    ctx: T["Context"],
    info: GraphQLResolveInfo
  ) => T["ProductParent"][] | Promise<T["ProductParent"][]>;

  export interface ArgsSales<T extends ITypeMap> {
    where: InvoiceWhereInput | null;
    orderBy: T["InvoiceOrderByInput"] | null;
    skip: number | null;
    after: string | null;
    before: string | null;
    first: number | null;
    last: number | null;
  }

  export type SalesType<T extends ITypeMap> = (
    parent: T["UserParent"],
    args: ArgsSales<T>,
    ctx: T["Context"],
    info: GraphQLResolveInfo
  ) => T["InvoiceParent"][] | Promise<T["InvoiceParent"][]>;

  export interface Type<T extends ITypeMap> {
    id: (
      parent: T["UserParent"],
      args: {},
      ctx: T["Context"],
      info: GraphQLResolveInfo
    ) => string | Promise<string>;
    role: (
      parent: T["UserParent"],
      args: {},
      ctx: T["Context"],
      info: GraphQLResolveInfo
    ) => string | null | Promise<string | null>;
    permissions: (
      parent: T["UserParent"],
      args: {},
      ctx: T["Context"],
      info: GraphQLResolveInfo
    ) => string[] | Promise<string[]>;
    email: (
      parent: T["UserParent"],
      args: {},
      ctx: T["Context"],
      info: GraphQLResolveInfo
    ) => string | null | Promise<string | null>;
    firstName: (
      parent: T["UserParent"],
      args: {},
      ctx: T["Context"],
      info: GraphQLResolveInfo
    ) => string | null | Promise<string | null>;
    lastName: (
      parent: T["UserParent"],
      args: {},
      ctx: T["Context"],
      info: GraphQLResolveInfo
    ) => string | null | Promise<string | null>;
    bizName: (
      parent: T["UserParent"],
      args: {},
      ctx: T["Context"],
      info: GraphQLResolveInfo
    ) => string | null | Promise<string | null>;
    password: (
      parent: T["UserParent"],
      args: {},
      ctx: T["Context"],
      info: GraphQLResolveInfo
    ) => string | null | Promise<string | null>;
    cart: (
      parent: T["UserParent"],
      args: {},
      ctx: T["Context"],
      info: GraphQLResolveInfo
    ) => T["CartParent"] | null | Promise<T["CartParent"] | null>;
    purchases: (
      parent: T["UserParent"],
      args: ArgsPurchases<T>,
      ctx: T["Context"],
      info: GraphQLResolveInfo
    ) => T["InvoiceParent"][] | Promise<T["InvoiceParent"][]>;
    products: (
      parent: T["UserParent"],
      args: ArgsProducts<T>,
      ctx: T["Context"],
      info: GraphQLResolveInfo
    ) => T["ProductParent"][] | Promise<T["ProductParent"][]>;
    sales: (
      parent: T["UserParent"],
      args: ArgsSales<T>,
      ctx: T["Context"],
      info: GraphQLResolveInfo
    ) => T["InvoiceParent"][] | Promise<T["InvoiceParent"][]>;
  }
}

export namespace CartResolvers {
  export type IdType<T extends ITypeMap> = (
    parent: T["CartParent"],
    args: {},
    ctx: T["Context"],
    info: GraphQLResolveInfo
  ) => string | Promise<string>;

  export type ItemCountType<T extends ITypeMap> = (
    parent: T["CartParent"],
    args: {},
    ctx: T["Context"],
    info: GraphQLResolveInfo
  ) => number | null | Promise<number | null>;

  export type TotalPriceType<T extends ITypeMap> = (
    parent: T["CartParent"],
    args: {},
    ctx: T["Context"],
    info: GraphQLResolveInfo
  ) => string | null | Promise<string | null>;

  export interface ArgsItems<T extends ITypeMap> {
    where: ProductWhereInput | null;
    orderBy: T["ProductOrderByInput"] | null;
    skip: number | null;
    after: string | null;
    before: string | null;
    first: number | null;
    last: number | null;
  }

  export type ItemsType<T extends ITypeMap> = (
    parent: T["CartParent"],
    args: ArgsItems<T>,
    ctx: T["Context"],
    info: GraphQLResolveInfo
  ) => T["ProductParent"][] | Promise<T["ProductParent"][]>;

  export interface Type<T extends ITypeMap> {
    id: (
      parent: T["CartParent"],
      args: {},
      ctx: T["Context"],
      info: GraphQLResolveInfo
    ) => string | Promise<string>;
    itemCount: (
      parent: T["CartParent"],
      args: {},
      ctx: T["Context"],
      info: GraphQLResolveInfo
    ) => number | null | Promise<number | null>;
    totalPrice: (
      parent: T["CartParent"],
      args: {},
      ctx: T["Context"],
      info: GraphQLResolveInfo
    ) => string | null | Promise<string | null>;
    items: (
      parent: T["CartParent"],
      args: ArgsItems<T>,
      ctx: T["Context"],
      info: GraphQLResolveInfo
    ) => T["ProductParent"][] | Promise<T["ProductParent"][]>;
  }
}

export namespace InvoiceResolvers {
  export type IdType<T extends ITypeMap> = (
    parent: T["InvoiceParent"],
    args: {},
    ctx: T["Context"],
    info: GraphQLResolveInfo
  ) => string | Promise<string>;

  export interface ArgsItems<T extends ITypeMap> {
    where: ProductWhereInput | null;
    orderBy: T["ProductOrderByInput"] | null;
    skip: number | null;
    after: string | null;
    before: string | null;
    first: number | null;
    last: number | null;
  }

  export type ItemsType<T extends ITypeMap> = (
    parent: T["InvoiceParent"],
    args: ArgsItems<T>,
    ctx: T["Context"],
    info: GraphQLResolveInfo
  ) => T["ProductParent"][] | Promise<T["ProductParent"][]>;

  export type AmountType<T extends ITypeMap> = (
    parent: T["InvoiceParent"],
    args: {},
    ctx: T["Context"],
    info: GraphQLResolveInfo
  ) => string | null | Promise<string | null>;

  export type EmailType<T extends ITypeMap> = (
    parent: T["InvoiceParent"],
    args: {},
    ctx: T["Context"],
    info: GraphQLResolveInfo
  ) => string | Promise<string>;

  export type CustomerType<T extends ITypeMap> = (
    parent: T["InvoiceParent"],
    args: {},
    ctx: T["Context"],
    info: GraphQLResolveInfo
  ) => T["UserParent"] | null | Promise<T["UserParent"] | null>;

  export interface ArgsVendors<T extends ITypeMap> {
    where: UserWhereInput | null;
    orderBy: T["UserOrderByInput"] | null;
    skip: number | null;
    after: string | null;
    before: string | null;
    first: number | null;
    last: number | null;
  }

  export type VendorsType<T extends ITypeMap> = (
    parent: T["InvoiceParent"],
    args: ArgsVendors<T>,
    ctx: T["Context"],
    info: GraphQLResolveInfo
  ) => T["UserParent"][] | Promise<T["UserParent"][]>;

  export interface Type<T extends ITypeMap> {
    id: (
      parent: T["InvoiceParent"],
      args: {},
      ctx: T["Context"],
      info: GraphQLResolveInfo
    ) => string | Promise<string>;
    items: (
      parent: T["InvoiceParent"],
      args: ArgsItems<T>,
      ctx: T["Context"],
      info: GraphQLResolveInfo
    ) => T["ProductParent"][] | Promise<T["ProductParent"][]>;
    amount: (
      parent: T["InvoiceParent"],
      args: {},
      ctx: T["Context"],
      info: GraphQLResolveInfo
    ) => string | null | Promise<string | null>;
    email: (
      parent: T["InvoiceParent"],
      args: {},
      ctx: T["Context"],
      info: GraphQLResolveInfo
    ) => string | Promise<string>;
    customer: (
      parent: T["InvoiceParent"],
      args: {},
      ctx: T["Context"],
      info: GraphQLResolveInfo
    ) => T["UserParent"] | null | Promise<T["UserParent"] | null>;
    vendors: (
      parent: T["InvoiceParent"],
      args: ArgsVendors<T>,
      ctx: T["Context"],
      info: GraphQLResolveInfo
    ) => T["UserParent"][] | Promise<T["UserParent"][]>;
  }
}

export namespace ProductResolvers {
  export type IdType<T extends ITypeMap> = (
    parent: T["ProductParent"],
    args: {},
    ctx: T["Context"],
    info: GraphQLResolveInfo
  ) => string | Promise<string>;

  export type NameType<T extends ITypeMap> = (
    parent: T["ProductParent"],
    args: {},
    ctx: T["Context"],
    info: GraphQLResolveInfo
  ) => string | null | Promise<string | null>;

  export type PriceType<T extends ITypeMap> = (
    parent: T["ProductParent"],
    args: {},
    ctx: T["Context"],
    info: GraphQLResolveInfo
  ) => string | null | Promise<string | null>;

  export type DescriptionType<T extends ITypeMap> = (
    parent: T["ProductParent"],
    args: {},
    ctx: T["Context"],
    info: GraphQLResolveInfo
  ) => string | null | Promise<string | null>;

  export type VarietalType<T extends ITypeMap> = (
    parent: T["ProductParent"],
    args: {},
    ctx: T["Context"],
    info: GraphQLResolveInfo
  ) => string | null | Promise<string | null>;

  export type VendorType<T extends ITypeMap> = (
    parent: T["ProductParent"],
    args: {},
    ctx: T["Context"],
    info: GraphQLResolveInfo
  ) => T["UserParent"] | null | Promise<T["UserParent"] | null>;

  export interface ArgsCarts<T extends ITypeMap>{
    where: CartWhereInput | null;
    orderBy: T["CartOrderByInput"] | null;
    skip: number | null;
    after: string | null;
    before: string | null;
    first: number | null;
    last: number | null;
  }

  export type CartsType<T extends ITypeMap> = (
    parent: T["ProductParent"],
    args: ArgsCarts<T>,
    ctx: T["Context"],
    info: GraphQLResolveInfo
  ) => T["CartParent"][] | Promise<T["CartParent"][]>;

  export interface Type<T extends ITypeMap> {
    id: (
      parent: T["ProductParent"],
      args: {},
      ctx: T["Context"],
      info: GraphQLResolveInfo
    ) => string | Promise<string>;
    name: (
      parent: T["ProductParent"],
      args: {},
      ctx: T["Context"],
      info: GraphQLResolveInfo
    ) => string | null | Promise<string | null>;
    price: (
      parent: T["ProductParent"],
      args: {},
      ctx: T["Context"],
      info: GraphQLResolveInfo
    ) => string | null | Promise<string | null>;
    description: (
      parent: T["ProductParent"],
      args: {},
      ctx: T["Context"],
      info: GraphQLResolveInfo
    ) => string | null | Promise<string | null>;
    varietal: (
      parent: T["ProductParent"],
      args: {},
      ctx: T["Context"],
      info: GraphQLResolveInfo
    ) => string | null | Promise<string | null>;
    vendor: (
      parent: T["ProductParent"],
      args: {},
      ctx: T["Context"],
      info: GraphQLResolveInfo
    ) => T["UserParent"] | null | Promise<T["UserParent"] | null>;
    carts: (
      parent: T["ProductParent"],
      args: ArgsCarts<T>,
      ctx: T["Context"],
      info: GraphQLResolveInfo
    ) => T["CartParent"][] | Promise<T["CartParent"][]>;
  }
}

export interface IResolvers<T extends ITypeMap> {
  Query: QueryResolvers.Type<T>;
  Mutation: MutationResolvers.Type<T>;
  AuthPayload: AuthPayloadResolvers.Type<T>;
  Viewer: ViewerResolvers.Type<T>;
  MutationResult: MutationResultResolvers.Type<T>;
  User: UserResolvers.Type<T>;
  Cart: CartResolvers.Type<T>;
  Invoice: InvoiceResolvers.Type<T>;
  Product: ProductResolvers.Type<T>;
}
