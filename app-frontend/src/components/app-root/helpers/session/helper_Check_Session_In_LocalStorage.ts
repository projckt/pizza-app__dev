export const helper_Check_Session_In_LocalStorage = () => {
  if (!window.localStorage) {
    return {
      success: false,
      message: 'Could not find LocalStorage',
      payload: {},
    };
  }

  let string_SessionDetails: string = localStorage.getItem('session');
  if (!string_SessionDetails) {
    return {
      success: false,
      message: 'Could not retrieve session',
      payload: {},
    };
  }

  let obj_SessionDetails: any = JSON.parse(string_SessionDetails);
  return {
    success: true,
    message: 'Retrieved Account Details from local storage',
    payload: obj_SessionDetails,
  };
};
