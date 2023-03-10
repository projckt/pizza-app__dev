export const helper_AppRoot_Session_IsUserLogged = () => {
  let cookie = document.cookie.match('(^|;)\\s*' + 'isLogged' + '\\s*=\\s*([^;]+)')?.pop() || '';

  console.log('Cookie');
  console.log(cookie);

  if (cookie.length > 0) {
    return true;
  } else {
    return false;
  }
};
