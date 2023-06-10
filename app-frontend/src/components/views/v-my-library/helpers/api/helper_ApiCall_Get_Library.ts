import { Vars } from '../../../../../global/script';

export const helper_ApiCall_Get_Library = async () => {
  let backendPayload_Get_Library: any;

  let url: string = `${Vars.api.url}/${Vars.api.endpoint.library.all}`;
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
      backendPayload_Get_Library = data;
    })
    .catch(error => {
      console.log(error);
    });

  return {
    success: backendPayload_Get_Library.success,
    message: backendPayload_Get_Library.message,
    payload: backendPayload_Get_Library.payload,
  };
};
