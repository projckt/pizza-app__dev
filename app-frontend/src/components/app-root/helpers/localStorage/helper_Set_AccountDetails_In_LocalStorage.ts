export const helper_Set_AccountDetails_In_LocalStorage = obj_AccountDetails => {
  localStorage.setItem('accountDetails', JSON.stringify(obj_AccountDetails));
};
