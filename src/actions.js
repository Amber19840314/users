const ACTION_ADDUSER = 'ADD_USER'
const ACTION_EDIT_USER = "EDIT_USER"
const ACTION_SET_SEARCH = 'SET_SEARCH'


let addUser = (firstName, lastName, sex, age, password, password2) => {
    return { type: ACTION_ADDUSER, firstName: firstName, lastName: lastName, sex: sex, age: age, password: password, password2: password2}
}

let editUser = (id,firstName, lastName, sex, age, password, password2) => {
    return { type: ACTION_EDIT_USER, id: id, firstName: firstName, lastName: lastName, sex: sex, age: age, password: password, password2: password2}
}

let setSearch = (new_search) => {
    return {type: ACTION_SET_SEARCH, search: new_search}
}

export {ACTION_ADDUSER, ACTION_EDIT_USER, ACTION_SET_SEARCH, addUser, editUser, setSearch}