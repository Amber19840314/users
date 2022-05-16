const initState = { isFetching: false, user: {}, error: null };

const addUserR = (state = initState, action) => {
  // console.log(action)
  switch (action.type) {
    case 'ADDUSER_START':
      return {
        ...state,
        isFetching: true
      };
    case 'ADDUSER_FAIL':
      return {
        ...state,
        error: action.error,
        isFetching: false
      };
    case 'ADDUSER_SUCCESS':
      return {
        isFetching: false,
        error: null,
        user: action.user
      };
    default:
      return state;
  }
};

export default addUserR;