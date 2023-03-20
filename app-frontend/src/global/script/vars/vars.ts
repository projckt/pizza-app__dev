export const Vars = {
  api: {
    url: document.domain === 'localhost' ? 'http://localhost:5555' : 'https://api.slimdl.com',
    endpoint: {
      login: 'login',
      logout: 'logout',
      signup: 'signup',
      send_PasswordResetCode: 'send-password-reset-code',
      confirm_Password: 'confirm-password',
      reSend_EmailVerificationCode: 'resend-email-verification-code',
      submit_EmailVerificationCode: 'verify-email',
      get_AccountDetails: 'account-details',
    },
  },
  cookie: {
    session: {
      isLogged: 'isLogged',
    },
  },
};
