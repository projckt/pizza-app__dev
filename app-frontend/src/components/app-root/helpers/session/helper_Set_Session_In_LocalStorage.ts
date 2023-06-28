export const helper_Set_Session_In_LocalStorage = () => {
  let obj = {
    isLogged: true,
  };
  localStorage.setItem('session', JSON.stringify(obj));
};
