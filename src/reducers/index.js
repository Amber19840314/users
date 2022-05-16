import {combineReducers} from 'redux';
import users from './users';
import search from './search';
import getUsersR from './getusers';
import addUserR from './adduser';
import editUserR from './edit';

const reducers = combineReducers({
  users,
  search,
  getUsersR,
  addUserR,
  editUserR,
});

export default reducers;