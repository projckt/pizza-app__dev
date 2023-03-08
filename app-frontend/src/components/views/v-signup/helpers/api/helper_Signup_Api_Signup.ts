import { SignupInputs } from '../../interfaces';
import { vars } from '../../../../../global/script';

export const helper_Signup_Api_Signup = async (payload_SignupInputs: SignupInputs) => {
  let isSuccess_SignupInputs_Submission: boolean = false;
  let url: string = `${vars.api.url}/${vars.api.endpoint.signup}`;
  let options: any = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(payload_SignupInputs),
  };
  let payload_SignupInputs_Submission: any;

  await fetch(url, options)
    .then(response => response.json())
    .then(data => {
      payload_SignupInputs_Submission = data;
      isSuccess_SignupInputs_Submission = true;
    })
    .catch(error => {
      console.log(error);
    });

  if (!isSuccess_SignupInputs_Submission) {
    return { isSuccess_SignupInputs_Submission: false, message_SignupInputs_Submission: 'Signup failed', payload_SignupInputs_Submission: {} };
  } else {
    return { isSuccess_SignupInputs_Submission: true, message_SignupInputs_Submission: 'Signup successful', payload_SignupInputs_Submission: payload_SignupInputs_Submission };
  }
};
