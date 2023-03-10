import { createStore } from '@stencil/store';

export const { state } = createStore({
  isUser_DataFetched: false,
  user_FirstName: '',
  user_LastName: '',
  user_Email: '',
});
