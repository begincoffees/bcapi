import * as Stripe from 'stripe';

async function stripeTransaction(email: string){
  const stripe = new Stripe(process.env.STRIPE_SECRET);
  try{
    const transaction = await stripe.customers.create({
      email,
    }).then((customer) => {
      return stripe.customers.createSource(customer.id, {
        source: 'tok_visa'
      });
    }).then((source) => {
      return stripe.charges.create({
        amount: 1600,
        currency: 'usd',
        customer: source.customer as any
      }); 
    })
    return transaction
  } catch(err) {
    console.log({transactionErr: err.message})
  }
}

const createStripeInvoice = async (email: string) => await stripeTransaction(email)
  .then(res => res)
  .catch((err) => err)

export { stripeTransaction, createStripeInvoice }