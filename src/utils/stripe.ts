import * as Stripe from 'stripe';

async function stripeTransaction(email: string){
  const stripe = new Stripe(process.env.STRIPE_SECRET);
  try{
    const transaction = await stripe.customers.create({
      // creates a new customer, 
      // doesn't account for existing customers
      email,
    }).then((customer) => {
      return stripe.customers.createSource(customer.id, {
        // card and payment details
        // needs to be tokenized?
        source: 'tok_visa'
      });
    }).then((source) => {
      // processes the charge, 
      // assumes a pre existing valid payment source and customer account 
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

const createGuestInvoice = async (email: string) => await stripeTransaction(email)
  .then(res => res)
  .catch((err) => err)

export { stripeTransaction, createGuestInvoice }