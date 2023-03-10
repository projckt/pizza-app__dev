import { vars } from '../../../../../global/script';

export const helper_UserControl_Api_Logout = async () => {
  let payload_Logout_Submission: any;
  let isSuccess_Logout_Submission: boolean = false;

  let url: string = `${vars.api.url}/${vars.api.endpoint.logout}`;
  let options: any = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    credentials: 'include',
  };

  await fetch(url, options)
    .then(response => response.json())
    .then(data => {
      payload_Logout_Submission = data;
      isSuccess_Logout_Submission = true;
    })
    .catch(error => {
      console.log(error);
    });

  if (!isSuccess_Logout_Submission) {
    return { isSuccess_Logout_Submission: false, message_Logout_Submission: 'Signup failed', payload_Logout_Submission: {} };
  } else {
    return { isSuccess_Logout_Submission: true, message_Logout_Submission: 'Signup successful', payload_Logout_Submission: payload_Logout_Submission };
  }
};
