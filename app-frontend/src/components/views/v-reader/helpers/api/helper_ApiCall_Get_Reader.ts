import { Vars } from '../../../../../global/script';

export const helper_ApiCall_Get_Reader = async payload_Get_Reader => {
  let backendPayload_Get_Reader: any;

  let url: string = `${Vars.api.url}/${Vars.api.endpoint.reader}`;
  let options: any = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    credentials: 'include',
    body: JSON.stringify(payload_Get_Reader),
  };

  await fetch(url, options)
    .then(response => response.json())
    .then(data => {
      backendPayload_Get_Reader = data;
    })
    .catch(error => {
      console.log(error);
    });

  return {
    success: backendPayload_Get_Reader.success,
    message: backendPayload_Get_Reader.message,
    payload: backendPayload_Get_Reader.payload,
  };
};
