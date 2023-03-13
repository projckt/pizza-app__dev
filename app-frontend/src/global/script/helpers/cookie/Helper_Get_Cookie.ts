export const Helper_Get_Cookie = (name_Cookie: string) => {
  let cookie = document.cookie.match('(^|;)\\s*' + `${name_Cookie}` + '\\s*=\\s*([^;]+)')?.pop() || '';
  return cookie;
};
