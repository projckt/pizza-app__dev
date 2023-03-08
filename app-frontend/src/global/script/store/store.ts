import { createStore } from '@stencil/store';

export const { state } = createStore({
  isUser_Logged: false,
  isUser_DataFetched: false,
  user_FirstName: '',
  user_LastName: '',
  user_Email: '',
});
