export const generate_Login_Payload = (email: string, password: string) => {
  let payload_LoginInputs = {
    email: email.trim(),
    password: password.trim(),
  };

  return payload_LoginInputs;
};
