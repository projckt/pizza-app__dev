import { vars } from '../../../../global/script';

export const Helper_ApiCall_GetUserData_BySession = async () => {
  let backendPayload_GetUserData_BySession: any;

  let url: string = `${vars.api.url}/${vars.api.endpoint.user}`;
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
      backendPayload_GetUserData_BySession = data;
    })
    .catch(error => {
      console.log(error);
    });

  return {
    success: backendPayload_GetUserData_BySession.success,
    message: backendPayload_GetUserData_BySession.message,
    payload: backendPayload_GetUserData_BySession.payload,
  };
};
