export const saveUserToStorage = (user) => localStorage.setItem('user', JSON.stringify(user));
export const getUserFromStorage = () => JSON.parse(localStorage.getItem('user'));
export const getUserToken = () => {
  let user = getUserFromStorage();
  if (user) {
      return user.token;
  } else {
      return '';
  }
};