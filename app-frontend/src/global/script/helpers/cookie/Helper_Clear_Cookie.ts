export const Helper_Clear_Cookie = (name_Cookie: string) => {
  document.cookie = `${name_Cookie}=; Path=/; Expires=Thu, 01 Jan 1970 00:00:01 GMT;`;
};
