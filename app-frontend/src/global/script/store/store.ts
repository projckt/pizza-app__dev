import { createStore } from '@stencil/store';
import { vars } from '../';

export const { state } = createStore({
  is_Logged: false,
  account_FirstName: '',
  account_LastName: '',
  account_Email: '',
  url_Base: vars.url_Base,
});
