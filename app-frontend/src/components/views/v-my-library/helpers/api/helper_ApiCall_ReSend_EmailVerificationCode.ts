import { interface_ReSend_EmailVerificationCode_Inputs } from '../../interfaces';
import { vars } from '../../../../../global/script';

export const helper_ApiCall_ReSend_EmailVerificationCode = async (payload_ReSend_EmailVerificationCode: interface_ReSend_EmailVerificationCode_Inputs) => {
  let backendPayload_ReSend_EmailVerificationCode: any;

  let url: string = `${vars.api.url}/${vars.api.endpoint.reSend_EmailVerificationCode}`;
  let options: any = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    credentials: 'include',
    body: JSON.stringify(payload_ReSend_EmailVerificationCode),
  };

  await fetch(url, options)
    .then(response => response.json())
    .then(data => {
      backendPayload_ReSend_EmailVerificationCode = data;
    })
    .catch(error => {
      console.log(error);
    });

  return {
    success: backendPayload_ReSend_EmailVerificationCode.success,
    message: backendPayload_ReSend_EmailVerificationCode.message,
    payload: backendPayload_ReSend_EmailVerificationCode.payload,
  };
};
