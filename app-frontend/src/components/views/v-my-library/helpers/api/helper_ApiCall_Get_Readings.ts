import { Vars } from '../../../../../global/script';

export const helper_ApiCall_Get_Readings = async () => {
  let backendPayload_Get_Readings: any;

  let url: string = `${Vars.api.url}/${Vars.api.endpoint.readings.all}`;
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
      backendPayload_Get_Readings = data;
    })
    .catch(error => {
      console.log(error);
    });

  return {
    success: backendPayload_Get_Readings.success,
    message: backendPayload_Get_Readings.message,
    payload: backendPayload_Get_Readings.payload,
  };
};
