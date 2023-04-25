import { Vars } from '../../../../../global/script';

export const helper_ApiCall_Get_Publications = async () => {
  let backendPayload_Get_Publications: any;

  let url: string = `${Vars.api.url}/${Vars.api.endpoint.publications.all}`;
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
      backendPayload_Get_Publications = data;
    })
    .catch(error => {
      console.log(error);
    });

  return {
    success: backendPayload_Get_Publications.success,
    message: backendPayload_Get_Publications.message,
    payload: backendPayload_Get_Publications.payload,
  };
};
