import { createStore } from '@stencil/store';

export const { state } = createStore({
  is_Logged: false,
  account_FirstName: '',
  account_LastName: '',
  account_Email: '',
});
