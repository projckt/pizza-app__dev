import { Vars } from '../../../../../global/script';

export const helper_Test_Api = async () => {
  let payload_TestInputs_Submission: any;
  let isSuccess_TestInputs_Submission: boolean = false;

  let url: string = `${Vars.api.url}/${Vars.api.endpoint.test}`;
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
      payload_TestInputs_Submission = data;
      isSuccess_TestInputs_Submission = payload_TestInputs_Submission.success;
    })
    .catch(error => {
      console.log(error);
    });

  if (!isSuccess_TestInputs_Submission) {
    return { isSuccess_TestInputs_Submission: false, message_TestInputs_Submission: payload_TestInputs_Submission.message, payload_TestInputs_Submission: {} };
  } else {
    return {
      isSuccess_TestInputs_Submission: true,
      message_TestInputs_Submission: payload_TestInputs_Submission.message,
      payload_TestInputs_Submission: payload_TestInputs_Submission,
    };
  }
};
