import { Vars } from '../../../../../global/script';

export const helper_ApiCall_GetAll_Documents = async () => {
  let backendPayload_GetAll_Documents: any;

  let url: string = `${Vars.api.url}/${Vars.api.endpoint.document.all}`;
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
      backendPayload_GetAll_Documents = data;
    })
    .catch(error => {
      console.log(error);
    });

  return {
    success: backendPayload_GetAll_Documents.success,
    message: backendPayload_GetAll_Documents.message,
    payload: backendPayload_GetAll_Documents.payload,
  };
};
