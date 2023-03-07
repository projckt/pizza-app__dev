export const generate_Signup_Payload = (name_First: string, name_Last: string, email: string, password: string) => {
  let payload_SignupInputs = {
    name_First: name_First.trim(),
    name_Last: name_Last.trim(),
    email: email.trim(),
    password: password.trim(),
  };

  return payload_SignupInputs;
};
