export const Vars = {
  api: {
    url: document.domain === 'localhost' ? 'http://localhost:5555' : 'https://api.slimdl.com',
    endpoint: {
      confirm_Password: 'confirm-password',
      document: {
        all: 'documents',
        single: 'document',
      },
      get_AccountDetails: 'account-details',
      login: 'login',
      logout: 'logout',
      reSend_EmailVerificationCode: 'resend-email-verification-code',
      send_PasswordResetCode: 'send-password-reset-code',
      signup: 'signup',
      submit_EmailVerificationCode: 'verify-email',
      test: 'test',
      publications: {
        all: 'publications',
      },
    },
  },
  cookie: {
    session: {
      isLogged: 'isLogged',
    },
  },
};
