import * as Stripe from 'stripe';

async function guestTransaction(stripe: Stripe, email: string, amount: number){
  try{
    const transaction = await stripe.customers.create({
      email,
    }).then((customer) => {
      return stripe.customers.createSource(customer.id, {
        source: 'tok_visa'
      });
    }).then((source) => {
      return stripe.charges.create({
        amount,
        currency: 'usd',
        customer: source.customer as any
      }); 
    })
    return transaction
  } catch(err) {
    console.log({transactionErr: err.message})
  }
}

async function userTransaction(stripe: Stripe, customerId: string, amount: number){
  try{
    const transaction = await stripe.customers.createSource(customerId, {
        source: 'tok_visa'
      })
    .then((source) => {
      return stripe.charges.create({
        amount,
        currency: 'usd',
        customer: source.customer as any
      }); 
    })
    return transaction
  } catch(err) {
    console.log({transactionErr: err.message})
  }
}


const createUserInvoice = async(
  stripe: Stripe, 
  customerId: string, 
  amount: number
) => await userTransaction(stripe, customerId, amount)
    .then(res => res)
    .catch((err) => err)


const createGuestInvoice = async (
  stripe: Stripe, 
  email: string, 
  amount: number
) => await guestTransaction(stripe, email, amount)
    .then(res => res)
    .catch((err) => err)

export { createGuestInvoice, createUserInvoice }