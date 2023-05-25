import { Vars } from '../../../../../global/script';

export const helper_ApiCall_Document_Checkout = async payload_Document_Checkout => {
  let backendPayload_Document_Checkout: any;

  let url: string = `${Vars.api.url}/${Vars.api.endpoint.document.checkout}`;

  let options: any = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    credentials: 'include',
    body: JSON.stringify(payload_Document_Checkout),
  };

  await fetch(url, options)
    .then(response => response.json())
    .then(data => {
      backendPayload_Document_Checkout = data;
    })
    .catch(error => {
      console.log(error);
    });

  return {
    success: backendPayload_Document_Checkout.success,
    message: backendPayload_Document_Checkout.message,
    payload: backendPayload_Document_Checkout.payload,
  };
};
