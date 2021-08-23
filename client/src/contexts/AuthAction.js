export const loginStart = (userCredentials) => ({
  type: "LOGIN_START",
});

export const loginSuccess = () => ({
  type: "LOGIN_SUCCESS",
});

export const Follow = (userId) => ({
  type: "FOLLOW",
  payload: userId,
});

export const Unfollow = (userId) => ({
  type: "UNFOLLOW",
  payload: userId,
});
