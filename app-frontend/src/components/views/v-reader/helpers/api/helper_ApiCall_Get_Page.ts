import { Vars } from '../../../../../global/script';

export const helper_ApiCall_Get_Page = async payload_Get_Page => {
  let backendPayload_Get_Page: any;

  let url: string = `${Vars.api.url}/${Vars.api.endpoint.page.single}`;
  let options: any = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    credentials: 'include',
    body: JSON.stringify(payload_Get_Page),
  };

  await fetch(url, options)
    .then(response => response.json())
    .then(data => {
      backendPayload_Get_Page = data;
    })
    .catch(error => {
      console.log(error);
    });

  return {
    success: backendPayload_Get_Page.success,
    message: backendPayload_Get_Page.message,
    payload: backendPayload_Get_Page.payload,
  };
};
