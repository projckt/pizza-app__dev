export const vars = {
  api: {
    url: document.domain === 'localhost' ? 'http://localhost:5555' : 'https://api.slimdl.com',
    endpoint: {
      login: 'login',
      logout: 'logout',
      signup: 'signup',
    },
  },
};
