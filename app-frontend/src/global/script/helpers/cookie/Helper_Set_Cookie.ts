export const Helper_Set_Cookie = (name_Cookie: string, value_Cookie: any, days_Cookie_Expiry: number) => {
  let date: Date = new Date();
  date.setTime(date.getTime() + days_Cookie_Expiry * 24 * 60 * 60 * 1000);
  let expires: string = `; expires=${date.toUTCString()}`;
  document.cookie = `${name_Cookie}=${value_Cookie || ''}${expires}; path=/`;
};
