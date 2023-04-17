export const Vars = {
  api: {
    url: document.domain === 'localhost' ? 'http://localhost:5555' : 'https://api.slimdl.com',
    endpoint: {
      confirm_Password: 'confirm-password',
      documents: 'documents',
      get_AccountDetails: 'account-details',
      login: 'login',
      logout: 'logout',
      reSend_EmailVerificationCode: 'resend-email-verification-code',
      send_PasswordResetCode: 'send-password-reset-code',
      signup: 'signup',
      submit_EmailVerificationCode: 'verify-email',
      test: 'test',
    },
  },
  cookie: {
    session: {
      isLogged: 'isLogged',
    },
  },
};
