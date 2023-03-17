export const generate_ConfirmPassword_Payload = (email: string, password_New: string, password_New_Repeat: string, code_ResetPassword: number) => {
  return {
    email: email.trim().toLowerCase(),
    password_New: password_New,
    password_New_Repeat: password_New_Repeat,
    code_ResetPassword: code_ResetPassword,
  };
};
