import store from './store'
import axios from 'axios'

function getUsersStart() {
    return {
      type: 'USERS_FETCH_START'
    };
  }
function getUsersSuccess(response) {
    return {
        type: 'USERS_FETCH_SUCCESS',
        users: response.data
    };
}
function getUsersFail(error) {
    return {
        type: 'USERS_FETCH_FAIL',
        error
    };
}

function getUsers() {
    return (dispatch) => {
        console.log('in getUsers')
        dispatch(getUsersStart())
        axios
            .get('/api/users')
            .then(response => {
                console.log(response.data)
                dispatch(getUsersSuccess(response));
            })
            .catch(err => {
                dispatch(getUsersFail(err));
            });
        };
}

export default getUsers;