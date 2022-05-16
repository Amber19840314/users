const initState = { isFetching: false, users: [], error: null };

const getUsersR = (state = initState, action) => {
  // console.log(action)
  switch (action.type) {
    case 'USERS_FETCH_START':
      return {
        ...state,
        isFetching: true
      };
    case 'USERS_FETCH_FAIL':
      return {
        ...state,
        error: action.error,
        isFetching: false
      };
    case 'USERS_FETCH_SUCCESS':
      return {
        isFetching: false,
        error: null,
        users: action.users
      };
    default:
      return state;
  }
};

export default getUsersR;