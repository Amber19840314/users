import store from './store'
import axios from 'axios'

import getUsers from './action_getusers';

function editStart() {
    return {
      type: 'EDIT_START'
    };
}

function editSuccess(response) {
    return {
        type: 'EDIT_SUCCESS',
        user: response.data
    };
}
function editFail(error) {
    return {
        type: 'EDIT_FAIL',
        error
    };
}
function editTodo(id) {
    return (dispatch) => {
        console.log('in editTodo', id)
        dispatch(editStart());
        axios
            .put('/api/users/'+id)
            .then(response => {
                //console.log(response.data)
                dispatch(getUsers());
                dispatch(editSuccess(response));
            })
            .catch(err => {
                dispatch(editFail(err));
            });
        };
}

export default editTodo;