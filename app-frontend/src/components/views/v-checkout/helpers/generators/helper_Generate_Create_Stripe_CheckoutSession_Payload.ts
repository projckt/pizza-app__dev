export const helper_Generate_Create_Stripe_CheckoutSession_Payload = (id_Document: string, currency: string) => {
  let payload_Create_Stripe_CheckoutSession = {
    id_Document: id_Document,
    currency: currency,
  };

  return payload_Create_Stripe_CheckoutSession;
};
