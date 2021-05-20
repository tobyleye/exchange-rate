const initialState = {
  user: {
    firstName: "John",
    lastName: "doe"
  }
};

export default function userReducer(state = initialState, action) {
  return state;
}

// selector
export const getUser = (state) => {
  const { user } = state.user;
  return user.firstName + " " + user.lastName;
};
