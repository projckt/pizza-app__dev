import { Vars } from '../../../../../global/script';

export const helper_ApiCall_Reader_Init_Payload = async (payload_Reader_Init: any) => {
  let backendPayload_Init_Reader: any;
  let url: string = `${Vars.api.url}/${Vars.api.endpoint.reader.init}`;
  let options: any = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    credentials: 'include',
    body: JSON.stringify(payload_Reader_Init),
  };

  await fetch(url, options)
    .then(response => response.json())
    .then(data => {
      backendPayload_Init_Reader = data;
    })
    .catch(error => {
      console.log(error);
    });

  return {
    success: backendPayload_Init_Reader.success,
    message: backendPayload_Init_Reader.message,
    payload: backendPayload_Init_Reader.payload,
  };
};
