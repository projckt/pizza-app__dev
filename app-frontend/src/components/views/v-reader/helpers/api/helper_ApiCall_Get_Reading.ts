import { Vars } from '../../../../../global/script';

export const helper_ApiCall_Get_Reading = async payload_GetReading => {
  let backendPayload_Get_Reading: any;

  let url: string = `${Vars.api.url}/${Vars.api.endpoint.readings.single}`;
  let options: any = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    credentials: 'include',
    body: JSON.stringify(payload_GetReading),
  };

  await fetch(url, options)
    .then(response => response.json())
    .then(data => {
      backendPayload_Get_Reading = data;
    })
    .catch(error => {
      console.log(error);
    });

  return {
    success: backendPayload_Get_Reading.success,
    message: backendPayload_Get_Reading.message,
    payload: backendPayload_Get_Reading.payload,
  };
};
