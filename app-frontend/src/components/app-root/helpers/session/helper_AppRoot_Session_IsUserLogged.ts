export const helper_AppRoot_Session_IsUserLogged = () => {
  let cookie = document.cookie.match('(^|;)\\s*' + 'isLogged' + '\\s*=\\s*([^;]+)')?.pop() || '';

  if (cookie.length > 0) {
    return true;
  } else {
    return false;
  }
};
