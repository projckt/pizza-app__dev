export const helper_Check_If_AccountDetails_In_LocalStorage = () => {
  if (!window.localStorage) {
    return {
      success: false,
      message: 'Could not find LocalStorage',
      payload: {},
    };
  }

  let string_AccountDetails: string = localStorage.getItem('accountDetails');
  if (!string_AccountDetails) {
    return {
      success: false,
      message: 'Could not find LocalStorage',
      payload: {},
    };
  }

  let obj_AccountDetails: any = JSON.parse(string_AccountDetails);
  return {
    success: true,
    message: 'Retrieved Account Details from local storage',
    payload: obj_AccountDetails,
  };
};
