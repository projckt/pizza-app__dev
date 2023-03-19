import { interface_Submit_EmailVerificationCode_Inputs } from '../../interfaces';
import { vars } from '../../../../../global/script';

export const helper_ApiCall_Submit_EmailVerificationCode = async (payload_Submit_EmailVerificationCode: interface_Submit_EmailVerificationCode_Inputs) => {
  let backendPayload_Submit_EmailVerificationCode: any;

  let url: string = `${vars.api.url}/${vars.api.endpoint.submit_EmailVerificationCode}`;
  let options: any = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    credentials: 'include',
    body: JSON.stringify(payload_Submit_EmailVerificationCode),
  };

  await fetch(url, options)
    .then(response => response.json())
    .then(data => {
      backendPayload_Submit_EmailVerificationCode = data;
    })
    .catch(error => {
      console.log(error);
    });

  return {
    success: backendPayload_Submit_EmailVerificationCode.success,
    message: backendPayload_Submit_EmailVerificationCode.message,
    payload: backendPayload_Submit_EmailVerificationCode.payload,
  };
};
