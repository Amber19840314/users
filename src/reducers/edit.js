const initState = { isFetching: false, user: {}, error: null };

const editUserR = (state = initState, action) => {
  // console.log(action)
  switch (action.type) {
    case 'EDITUSER_START':
      return {
        ...state,
        isFetching: true
      };
    case 'EDITUSER_FAIL':
      return {
        ...state,
        error: action.error,
        isFetching: false
      };
    case 'EDITUSER_SUCCESS':
      return {
        isFetching: false,
        error: null,
        user: action.user
      };
    default:
      return state;
  }
};

export default editUserR;