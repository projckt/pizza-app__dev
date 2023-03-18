import { createStore } from '@stencil/store';

export const { state } = createStore({
  isFetched_UserData: false,
  user_FirstName: 'Tuhin',
  user_LastName: 'Bhuyan',
  user_Email: 'tuhin.bhuyan0@gmail.com',
});
