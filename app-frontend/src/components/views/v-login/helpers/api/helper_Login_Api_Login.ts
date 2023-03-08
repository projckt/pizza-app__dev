import { interface_LoginInputs } from '../../interfaces';
import { vars } from '../../../../../global/script';

export const helper_Login_Api_Login = async (payload_LoginInputs: interface_LoginInputs) => {
  let isSuccess_LoginInputs_Submission: boolean = false;
  let url: string = `${vars.api.url}/${vars.api.endpoint.login}`;
  let options: any = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(payload_LoginInputs),
  };
  let payload_LoginInputs_Submission: any;

  await fetch(url, options)
    .then(response => response.json())
    .then(data => {
      payload_LoginInputs_Submission = data;
      isSuccess_LoginInputs_Submission = true;
    })
    .catch(error => {
      console.log(error);
    });

  if (!isSuccess_LoginInputs_Submission) {
    return { isSuccess_LoginInputs_Submission: false, message_LoginInputs_Submission: 'Login failed', payload_LoginInputs_Submission: {} };
  } else {
    return { isSuccess_LoginInputs_Submission: true, message_LoginInputs_Submission: 'Login successful', payload_LoginInputs_Submission: payload_LoginInputs_Submission };
  }
};
