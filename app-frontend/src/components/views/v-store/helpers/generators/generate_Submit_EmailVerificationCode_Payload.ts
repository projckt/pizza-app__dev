export const generate_Submit_EmailVerificationCode_Payload = (email: string, code_EmailVerification: number) => {
  let payload_Submit_EmailVerificationCode_Inputs = {
    email: email.trim().toLowerCase(),
    code_EmailVerification: code_EmailVerification,
  };

  return payload_Submit_EmailVerificationCode_Inputs;
};
