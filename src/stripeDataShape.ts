// STRIPE CHARGE DATA SHAPE
const stripeDataShape = { 
  id: 'ch_1DfzQvH5PCWGQOSIO812NGeX',
  object: 'charge',
  amount: 1600,
  amount_refunded: 0,
  application: null,
  application_fee: null,
  balance_transaction: 'txn_1DfzQvH5PCWGQOSITUHKzg8A',
  captured: true,
  created: 1544489349,
  currency: 'usd',
  customer: 'cus_E8FwMKZBTHQ3Mo',
  description: null,
  destination: null,
  dispute: null,
  failure_code: null,
  failure_message: null,
  fraud_details: {},
  invoice: null,
  livemode: false,
  metadata: {},
  on_behalf_of: null,
  order: null,
  outcome:
  { network_status: 'approved_by_network',
    reason: null,
    risk_level: 'normal',
    risk_score: 53,
    seller_message: 'Payment complete.',
    type: 'authorized' },
  paid: true,
  payment_intent: null,
  receipt_email: null,
  receipt_number: null,
  refunded: false,
  refunds:
  { object: 'list',
    data: [],
    has_more: false,
    total_count: 0,
    url: '/v1/charges/ch_1DfzQvH5PCWGQOSIO812NGeX/refunds' },
  review: null,
  shipping: null,
  source:
  { id: 'card_1DfzQuH5PCWGQOSIZ5pxnq9x',
    object: 'card',
    address_city: null,
    address_country: null,
    address_line1: null,
    address_line1_check: null,
    address_line2: null,
    address_state: null,
    address_zip: null,
    address_zip_check: null,
    brand: 'Visa',
    country: 'US',
    customer: 'cus_E8FwMKZBTHQ3Mo',
    cvc_check: null,
    dynamic_last4: null,
    exp_month: 12,
    exp_year: 2019,
    fingerprint: 'yW7FMROFyKDGI55X',
    funding: 'credit',
    last4: '4242',
    metadata: {},
    name: null,
    tokenization_method: null },
  source_transfer: null,
  statement_descriptor: null,
  status: 'succeeded',
  transfer_group: null 
} 