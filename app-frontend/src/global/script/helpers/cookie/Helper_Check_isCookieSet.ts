export const Helper_Check_isCookieSet = (name_Cookie: string) => {
  let cookie = document.cookie.match('(^|;)\\s*' + `${name_Cookie}` + '\\s*=\\s*([^;]+)')?.pop() || '';
  if (cookie.length > 0) {
    return true;
  } else {
    return false;
  }
};
