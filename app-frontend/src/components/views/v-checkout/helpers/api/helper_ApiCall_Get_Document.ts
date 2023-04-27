import { Vars } from '../../../../../global/script';

export const helper_ApiCall_Get_Document = async payload_Get_Document_Inputs => {
  let backendPayload_Get_Document: any;

  let url: string = `${Vars.api.url}/${Vars.api.endpoint.document.single}?${new URLSearchParams(payload_Get_Document_Inputs)}`;

  let options: any = {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
    credentials: 'include',
  };

  await fetch(url, options)
    .then(response => response.json())
    .then(data => {
      backendPayload_Get_Document = data;
    })
    .catch(error => {
      console.log(error);
    });

  return {
    success: backendPayload_Get_Document.success,
    message: backendPayload_Get_Document.message,
    payload: backendPayload_Get_Document.payload,
  };
};
