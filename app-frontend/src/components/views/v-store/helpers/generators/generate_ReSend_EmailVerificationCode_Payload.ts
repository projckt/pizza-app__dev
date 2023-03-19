export const generate_ReSend_EmailVerificationCode_Payload = (email: string) => {
  let payload_ReSend_EmailVerificationCode_Inputs = {
    email: email.trim().toLowerCase(),
  };

  return payload_ReSend_EmailVerificationCode_Inputs;
};
