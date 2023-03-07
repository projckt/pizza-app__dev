import { createStore } from '@stencil/store';
import { vars } from '../';

const { state } = createStore({
  is_Logged: false,
  account_FirstName: '',
  account_LastName: '',
  account_Email: '',
  url_Base: document.domain === 'localhost' ? `${vars.dev.api.url}:${vars.dev.api.port}` : vars.prod.api.url,
});

export default state;
