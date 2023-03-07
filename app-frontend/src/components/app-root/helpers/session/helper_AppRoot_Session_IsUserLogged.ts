export const helper_AppRoot_Session_IsUserLogged = () => {
  let cookie = document.cookie.replace(/(?:(?:^|.*;\s*)isLogged\s*\=\s*([^;]*).*$)|^.*$/, '$1');
  if (cookie.length > 0) {
    return true;
  } else {
    return false;
  }
};
