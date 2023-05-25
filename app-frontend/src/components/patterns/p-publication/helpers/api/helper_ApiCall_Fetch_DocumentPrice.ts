import { interface_Fetch_DocumentPrice_Payload } from '../../interfaces';
import { Vars } from '../../../../../global/script';

export const helper_ApiCall_Fetch_DocumentPrice = async (payload_To_Fetch_DocumentPrice: interface_Fetch_DocumentPrice_Payload) => {
  let backendPayload_Fetch_DocumentPrice: any;

  let url: string = `${Vars.api.url}/${Vars.api.endpoint.document.price}`;
  let options: any = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    credentials: 'include',
    body: JSON.stringify(payload_To_Fetch_DocumentPrice),
  };

  await fetch(url, options)
    .then(response => response.json())
    .then(data => {
      backendPayload_Fetch_DocumentPrice = data;
    })
    .catch(error => {
      console.log(error);
    });

  return {
    success: backendPayload_Fetch_DocumentPrice.success,
    message: backendPayload_Fetch_DocumentPrice.message,
    payload: backendPayload_Fetch_DocumentPrice.payload,
  };
};
