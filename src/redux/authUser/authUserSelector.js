const getIsLoggedIn = state => state.authUser.isLoggedIn;

const getUsername = state => state.authUser.user.name;

const getUserEmail = state => state.authUser.user.email;

const authSelectors = {
  getIsLoggedIn,
  getUsername,
  getUserEmail,
};
export default authSelectors;
