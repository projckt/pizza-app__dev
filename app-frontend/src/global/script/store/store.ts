import { createStore } from '@stencil/store';

export const { state } = createStore({
  isFetched_AccountData: false,

  account_FirstName: 'Tuhin',
  account_LastName: 'Bhuyan',
  account_Email: 'tuhin.bhuyan0@gmail.com',
  isVerified_AccountEmail: false,
});
