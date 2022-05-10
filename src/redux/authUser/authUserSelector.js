const getIsLoggedIn = state => state.authUser.isLoggedIn;

const getUsername = state => state.authUser.user.name;

const getUserEmail = state => state.authUser.user.email;

const getFetchCurrentUser = state => state.authUser.isFetchCurrentUser

const authSelectors = {
  getIsLoggedIn,
  getUsername,
  getUserEmail,
  getFetchCurrentUser,
};
export default authSelectors;
