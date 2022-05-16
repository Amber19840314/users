import store from './store'
import axios from 'axios'
import getUsers from './action_getusers';

function addUserStart() {
    return {
      type: 'ADDUSER_START'
    };
}

function addUserSuccess(response) {
    return {
        type: 'ADDUSER_SUCCESS',
        user: response.data
    };
}
function addUserFail(error) {
    return {
        type: 'ADDUSER_FAIL',
        error
    };
}

function addUser(user, history) {
    return (dispatch) => {
        console.log('in addUser', user)
        dispatch(addUserStart());
        axios
            .post('/api/users', {user: user})
            .then(response => {
                console.log('add user success')
                //dispatch(getUsers());
                dispatch(addUserSuccess(response));
                history.push('/');
            })
            .catch(err => {
                console.log('add user failed')
                console.log(err)
                dispatch(addUserFail(err));
            });
        };
}

export default addUser